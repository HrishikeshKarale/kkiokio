/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const CUSTOMER = process.env.MONGO_DB_CUSTOMER;
const PROFILE = process.env.MONGO_DB_PROFILE;
const OTHERS = process.env.MONGO_DB_OTHERS;
const AUTH = process.env.MONGO_DB_AUTH;

const { findQuery } = require("../../../database/query/index");
const { createToken } = require("../../../js/jwt/index");

const controller = async (req, res) => {
	const phoneNumber = req.body.phoneNumber;
	const otp = req.body.otpCode;
	let user;
	const token = createToken(phoneNumber);

	await findQuery({
		type: "findOneAndUpdate",
		database: OTHERS,
		collection: AUTH,
		query: {
			"phoneNumber": phoneNumber,
			"log[0].otp.value": otp
		},
		update: {
			log: [{
				"log[0].otp.verified": otp ? true : false,
				"log[0].otp.value": otp
			}],
		}
	})
		.then(async result => {
			if (result) {
				return await findQuery({
					database: PROFILE,
					collection: CUSTOMER,
					query: {
						"phoneNumber.value": phoneNumber,
					}
				});
			}
			return res.status(400).send({
				status: false,
				mesage: "No such auth record exists. Please start by requesting an OTP"
			});
		})
		// auth record find query result
		.then(result => {
			// auth record updated as well
			user = result[0];
			return res.status(200).send({
				status: true,
				token: token.value,
				tokenExpires: token.expiry,
				"user": {
					name: user.name,
					email: user.email.find(mail => mail.isPrimary && mail.isVerified),
					phoneNumber,
					isAdmin: user.isAdmin,
					address: user.address,
					gender: user.gender,
					DOB: user.DOB,
				}
			});
		});
}

module.exports = controller;
