/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const sender = process.env.SENDER;
const client = require('twilio')(accountSid, authToken);
const controller = (req, res) => {
	let phoneNumber = 8551849510;
	if (req.body.phoneNumber) {
		phoneNumber = req.body.phoneNumber;
	}
	let message = 'Hello! This is a sample text message seny by Hrishikesh.';
	if (req.body.message) {
		message = req.body.message;
	}
	console.log(phoneNumber, sender);

	client.messages
		.create({
			body: message,
			from: 'whatsapp:+1' + sender,
			to: 'whatsapp:+91' + phoneNumber
		})
		.then(message => {
			// console.log(message.sid);
			return res.status(200).send({
				message: message,
			});
		})
		.catch((exception) => {
			const msg = "Exception thrown by Twilio" + exception;
			return res.status(200).send(msg);
		});
};

module.exports = controller;
