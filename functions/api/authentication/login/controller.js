/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const CUSTOMER = process.env.MONGO_DB_CUSTOMER;
const PROFILE = process.env.MONGO_DB_PROFILE;
const OTHERS = process.env.MONGO_DB_OTHERS;
const AUTH = process.env.MONGO_DB_AUTH;

// const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { findQuery, saveQuery } = require("../../../database/query/index");
const { createToken } = require("../../../js/jwt/index");
// const DB = require("../../../database/dbConnection");
// const config = require("../../../config");
// const db = new DB("sqlitedb");

const controller = async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	const phoneNumber = req.body.phoneNumber;
	const OTP = req.body.OTP;
	const query = {};
	let user, token, sendReponse;
	if (phoneNumber) {
		query["phoneNumber.value"] = phoneNumber;
	} else if (email) {
		query["email.value"] = email;
	}

	await findQuery({
		database: PROFILE,
		collection: CUSTOMER,
		query
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
				const currentPassword = user.password.find(pass => pass.isActive === true);
				const passwordIsValid = bcrypt.compareSync(password, currentPassword.value);
				if (!passwordIsValid) {
					return res.status(401).send({
						status: false,
						message: "Incorrect Password"
					});
				} else {
					// credentials matched
					token = createToken(user.phoneNumber.value);
					return await findQuery({
						type: "findOneAndUpdate",
						database: OTHERS,
						collection: AUTH,
						query: {
							"_userID": user._id
						},
						update: {
							log: [{
								token: token.value,
								source: "CREDENTIALS"
							}],
						}
					});
				} // credentials matched
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
				token: token.value,
				tokenExpires: token.expiry,
				user: {
					name: user.name,
					email: user.email.find(mail => mail.isPrimary && mail.isVerified),
					phoneNumber: user.phoneNumber,
					isAdmin: user.isAdmin,
					address: user.address,
					gender: user.gender,
					DOB: user.DOB,
				}
			}
			if (result) {
				// auth record updated as well
				return res.status(200).send(sendReponse);
			}
			// no matching auth record found
			const DATA = {
				database: OTHERS,
				collection: AUTH,
				_userID: user._id,
				name: user.name,
				log: [{
					token: token.value,
					source: "CREDENTIALS"
				}],
				username: user.username,
				image: user.image,
				isAdmin: user.isAdmin
			};
			return await saveQuery(DATA);
		})
		.then(() => {
			// auth record updated as well
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
