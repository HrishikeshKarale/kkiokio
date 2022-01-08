/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const OTHERS = process.env.MONGO_DB_OTHERS;
const AUTH = process.env.MONGO_DB_AUTH;
const { findQuery } = require("../../../database/query/index");


const controller = async (req, res) => {
	const token = req.body.token;

	await findQuery({
		type: "findOneAndUpdate",
		database: OTHERS,
		collection: AUTH,
		query: {
			"log[0].token": token
		},
		update: {
			log: [{
				"log[0].otp.loggedOut": true,
			}],
		}
	})
		.then(async () => {
			return res.status(200).send({
				status: true,
				message: `User successfully logged Out`
			});
		})
		.catch(error => {
			return res.status(200).send({
				status: false,
				message: "Error Logging out. Please try again.",
				error: error
			});
		});
};

module.exports = controller;
