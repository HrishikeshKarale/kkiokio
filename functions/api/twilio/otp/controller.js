/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const CUSTOMER = process.env.MONGO_DB_CUSTOMER;
const PROFILE = process.env.MONGO_DB_PROFILE;
const OTHERS = process.env.MONGO_DB_OTHERS;
const AUTH = process.env.MONGO_DB_AUTH;

const { findQuery, saveQuery } = require("../../../database/query/index");
const sendSMS = require('../../../js/sendSMS/index');
const generateOTP = require('../../../js/generateOTP/index');

const controller = async (req, res) => {
	const phoneNumber = req.body.phoneNumber;
	const otp = req.body.otp ? req.body.otp : generateOTP(5);
	let user, sendReponse;

	const message = `Mr CHEMIST OTP verification\n Code: ${otp}`;

	await findQuery({
		database: PROFILE,
		collection: CUSTOMER,
		query: {
			"phoneNumber.value": phoneNumber
		}
	})
		// user record
		.then(async result => {
			if (result.length === 0) {
				// when no such user exists
				return res.status(200).send({
					status: false,
					message: "No such user found. Please check your redentials"
				});
			} else if (result.length === 1) {
				// ideal
				user = result[0];
				return await findQuery({
					type: "findOneAndUpdate",
					database: OTHERS,
					collection: AUTH,
					query: {
						"_userID": user._id
					},
					update: {
						log: [{
							"otp.value": otp,
							source: "PHONE"
						}],
					}
				});
			} else {
				// multiple results found
				// should not happen
				return res.status(200).send({
					status: false,
					message: "Multiple users found. please contact support."
				});
			}
		})
		// auth record find query result
		.then(async result => {
			sendReponse = {
				status: true,
				message: `OTP Sent to phone Number(${phoneNumber})`
			}
			if (result) {
				// auth record updated as well
				return;
			}
			// no matching auth record found
			const DATA = {
				database: OTHERS,
				collection: AUTH,
				_userID: user._id,
				name: user.name,
				log: [{
					"otp.value": otp,
					"otp.verified": false,
					source: "PHONE"
				}],
				phoneNumber,
				username: user.username,
				image: user.image,
				isAdmin: user.isAdmin
			};
			return await saveQuery(DATA);
		})
		.then(async () => {
			return await sendSMS(phoneNumber, message);
		})
		.then(() => {
			// auth record updated
			return res.status(200).send(sendReponse);
		})
		.catch(error => {
			return res.status(400).send({
				status: false,
				message: "Error checking crdentials. Please try again.",
				error: error
			});
		});
};

module.exports = controller;
