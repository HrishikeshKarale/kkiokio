/* eslint-disable @typescript-eslint/no-var-requires */
const crypto = require('crypto');
require("dotenv").config();
// const RAZOR_ID = process.env.RAZOR_ID;
const RAZOR_KEY = process.env.RAZOR_KEY;

const controller = async (req, res) => {

	const razorOrder = req.body.razorpay_order_id;
	const razorPayment = req.body.razorpay_payment_id;
	const razorSignature = req.body.razorpay_signature;

	const hmac = crypto.createHmac('sha256', RAZOR_KEY);
	hmac.update(razorOrder + "|" + razorPayment);
	const generatedSignature = hmac.digest('hex');

	const isSignatureValid = generatedSignature === razorSignature;

	if (isSignatureValid) {
		// console.log('request is legit');
		//we can store detail in db and send the response
		res.status(200);
		// res.status(200).send({
		// 	status: true,
		// 	message: "Valid Signature"
		// })
	} else {
		// res.status(400).send({
		// 	status: false,
		// 	message: "Invalid Signature"
		// });
	}
};

module.exports = controller;
