/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const controller = (req, res) => {
	const twiml = new MessagingResponse();

	twiml.message('The Robots are coming! Head for the hills!');

	res.writeHead(200, { 'Content-Type': 'text/xml' });
	res.end(twiml.toString());
};

module.exports = controller;
