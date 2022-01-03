/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const CUSTOMER = process.env.MONGO_DB_CUSTOMER;
const PROFILE = process.env.MONGO_DB_PROFILE;
const { findQuery } = require("../../../database/query/index");

const controller = async (req, res) => {

	const phoneNumber = req.body.phoneNumber
	const cart = req.body.cart

	await findQuery({
		type: "findOneAndUpdate",
		database: PROFILE,
		collection: CUSTOMER,
		query: {
			"phoneNumber.value": phoneNumber
		},
		update: {
			cart: cart
		}
	})
		.then(() => {
			return res.status(200).send({
				status: true,
				message: "cart updated."
			});
		})
		.catch(error => {
			return res.status(400).send({
				status: false,
				message: "Cart Updated failed, please try again.",
				error: error
			});
		});
};

module.exports = controller;
