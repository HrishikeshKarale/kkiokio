/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const PRODUCT_CATALOGUE = process.env.MONGO_DB_PRODUCT_CATALOGUE;
const PRODUCT = process.env.MONGO_DB_PRODUCT;
const { findQuery } = require("../../../database/query/index");


const controller = async (req, res) => {

	await findQuery({
		database: PRODUCT_CATALOGUE,
		collection: PRODUCT,
		limit: req.body.limit ? req.body.limit : 12
	})
		.then(result => {
			return res.status(200).send({
				status: true,
				message: result.length ? "found something" : "found nothing",
				result: result
			});
		})
		.catch(error => res.status(400).send({
			status: false,
			message: "something went wrong"
		}));
};

module.exports = controller;
