/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const PRODUCT_CATALOGUE = process.env.MONGO_DB_PRODUCT_CATALOGUE;
const PRODUCT = process.env.MONGO_DB_PRODUCT;
const { findQuery } = require("../../../database/query/index");


const controller = async (req, res) => {

	await findQuery({
		database: PRODUCT_CATALOGUE,
		collection: PRODUCT,
		limit: req.params.limit ? req.params.limit : 12
	})
		.then(result => {
			return res.status(200).send({
				status: true,
				message: result.length ? "found something" : "found nothing",
				result: result
			});
		})
		.catch(() => res.status(400).send({
			status: false,
			message: "something went wrong"
		}));
};

module.exports = controller;
