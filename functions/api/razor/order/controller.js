/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const RAZOR_INR = process.env.RAZORPAY_DEFAULT_CURRENCY;

const { createOrder } = require("../../../js/razor/createOrder");

const controller = async (req, res) => {

	const options = {
		amount: req.body.amount * 100,
		currency: req.body.currency ? req.body.currency : RAZOR_INR,
		receipt: req.body.receipt ? req.body.receipt : "",
		notes: req.body.notes,
		partial: req.body.partial ? req.body.partial : false
	};

	await createOrder(options)
		.then(result => {
			return res.status(200).send({
				status: true,
				message: "",
				id: result.id,
				result: result
			});
		})
		.catch((result) => {
			return res.status(200).send({
				status: false,
				message: "error message",
				id: result.id,
				result: result
			});
		});

	// const category = req.body.category;
	// const limit = req.body.limit ? req.body.limit : 12;
	// const skip = req.body.skip ? req.body.skip : 0;

	// let queryResult = [];

	// await findQuery({
	// 	database: PRODUCT_CATALOGUE,
	// 	collection: PRODUCT,
	// 	query: {
	// 		category: { "$regex": category, "$options": "i" }
	// 	},
	// 	skip: skip * limit,
	// 	limit: limit
	// })
	// 	.then(result => {
	// 		queryResult = result;
	// 		return;
	// 	})
	// 	.then(() => {
	// 		return CountQuery({
	// 			database: PRODUCT_CATALOGUE,
	// 			collection: PRODUCT,
	// 			query: {
	// 				category: { "$regex": category, "$options": "i" }
	// 			}
	// 		})
	// 	})
	// 	.then(count => {
	// 		return res.status(200).send({
	// 			status: true,
	// 			message: queryResult.length ? "found something" : "found nothing",
	// 			result: queryResult,
	// 			count: count
	// 		});
	// 	})
	// 	.catch(() => res.status(400).send({
	// 		status: false,
	// 		message: "something went wrong",
	// 		result: queryResult
	// 	}));
};

module.exports = controller;
