/* eslint-disable @typescript-eslint/no-var-requires */
const bcrypt = require("bcrypt");
require("dotenv").config();
const CUSTOMER = process.env.MONGO_DB_CUSTOMER;
const PROFILE = process.env.MONGO_DB_PROFILE;
const OTHERS = process.env.MONGO_DB_OTHERS;
const AUTH = process.env.MONGO_DB_AUTH;
const HASHCOMPLEX = process.env.HASH_COMPLETE;
const { saveQuery } = require("../../../database/query/index");
const sendSMS = require('../../../js/sendSMS/index');
const generateOTP = require('../../../js/generateOTP/index');


const controller = async (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const phoneNumber = req.body.phoneNumber;
	const username = req.body.username;
	const password = bcrypt.hashSync(req.body.password, Number(HASHCOMPLEX));
	const isAdmin = req.params.isAdmin ? req.params.isAdmin : false;

	let otp;

	const DATA = {
		database: PROFILE,
		collection: CUSTOMER,
		name,
		email: [{
			value: email,
			isVerified: false
		}],
		password: [{
			value: password,
			isActive: false
		}],
		phoneNumber: {
			value: phoneNumber,
			isVerified: false
		},
		username,
		isAdmin
	};

	await saveQuery(DATA)
		.then(async result => {
			otp = generateOTP(5);
			const DATA = {
				database: OTHERS,
				collection: AUTH,
				_userID: result._id,
				name: name,
				log: [{
					"otp.value": otp,
					"otp.verified": false,
					source: "FORM"
				}],
				phoneNumber,
				username: username,
				image: result.image,
				isAdmin: isAdmin
			};
			return await saveQuery(DATA);
		})
		.then(async result => {
			const message = `Mr CHEMIST OTP verification\n Code: ${otp}`;
			return await sendSMS(phoneNumber, message);
		})
		.then(() => {
			// auth record updated
			return res.status(200).send({
				status: true,
				message: `OTP Sent to phone Number(${phoneNumber})`
			});
		})
		.catch(error => {
			return res.status(200).send({
				status: false,
				message: "Error checking crdentials. Please try again.",
				error: error
			});
		});
};

module.exports = controller;
