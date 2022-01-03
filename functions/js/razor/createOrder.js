/* eslint-disable @typescript-eslint/no-var-requires */
const Razorpay = require("razorpay");
require("dotenv").config();
const RAZOR_ID = process.env.RAZOR_ID;
const RAZOR_KEY = process.env.RAZOR_KEY;

/* eslint-disable @typescript-eslint/camelcase */
const razor = new Razorpay({
	key_id: RAZOR_ID,
	key_secret: RAZOR_KEY,
});

const createOrder = (options) => {
	return razor.orders.create({
		amount: options.amount,
		currency: options.currency,
		receipt: options.receipt,
		notes: options.notes,
		partial_payment: options.partial
	});
};

module.exports = { createOrder, razor };

	//https://razorpay.com/docs/api/orders/#create-an-order
// https://medium.com/@itskumarkrishna/razorpay-payment-api-using-node-js-6f93cf5c1569
// https://www.geeksforgeeks.org/razorpay-payment-integration-using-node-js/
// https://piyushgarg.hashnode.dev/integrate-razorpay-payment-gateway-with-node-js-and-express-server-924f771af7e0
// https://codingshiksha.com/javascript/node-js-express-razorpay-payment-gateway-integration-in-website-using-ejs-mongodb-deployed-to-heroku-full-project-for-beginners/


// VUE
// https://medium.com/@toakshay.official/payment-gateway-with-vue-js-b96d10c33755

// sample response
// {
	// "id": "order_DBJOWzybf0sJbb",
	// "entity": "order",
	// "amount": 50000,
	// "amount_paid": 0,
	// "amount_due": 39900,
	// "currency": "INR",
	// "receipt": "order_rcptid_11",
	// "status": "created",
	// "attempts": 0,
	// "notes": [],
	// "created_at": 1566986570
	// }