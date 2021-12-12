/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const sendTo = process.env.SENDER_EMAIL;


const controller = async (req, res) => {

	return res.status(200).send({
		status: true,
		message: "Email Sent."
	});
};

module.exports = controller;
