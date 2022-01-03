/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const PRODUCT_CATALOGUE = process.env.MONGO_DB_PRODUCT_CATALOGUE;
const PRODUCT = process.env.MONGO_DB_PRODUCT;
const { findQuery } = require("../../../database/query/index");
const { CountQuery } = require("../../../database/query/index");


const controller = async (req, res) => {

	const category = req.body.category;
	const limit = req.body.limit ? req.body.limit : 12;
	const skip = req.body.skip ? req.body.skip : 0;

	let queryResult = [];
	console.log("category", category);

	await findQuery({
		database: PRODUCT_CATALOGUE,
		collection: PRODUCT,
		query: {
			category: { "$regex": category, "$options": "i" }
		},
		skip: skip * limit,
		limit: limit
	})
		.then(result => {
			queryResult = result;
			return;
		})
		.then(() => {
			return CountQuery({
				database: PRODUCT_CATALOGUE,
				collection: PRODUCT,
				query: {
					category: { "$regex": category, "$options": "i" }
				}
			})
		})
		.then(count => {
			return res.status(200).send({
				status: true,
				message: queryResult.length ? "found something" : "found nothing",
				result: queryResult,
				count: count
			});
		})
		.catch(() => res.status(400).send({
			status: false,
			message: "something went wrong",
			result: queryResult
		}));
};

module.exports = controller;
