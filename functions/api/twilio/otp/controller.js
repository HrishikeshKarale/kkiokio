/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken); const controller = (req, res) => {
	let phoneNumber = 8551849510;
	let otp = Math.floor(1000 + Math.random() * 9000);
	if (req.body.phoneNumber) {
		phoneNumber = req.body.phoneNumber;
	}
	if (req.body.otp) {
		otp = req.body.otp;
	}
	client.messages.create({
		body: `OTP Code: ${otp}`,
		from: '+19168888870',
		to: '+91' + phoneNumber
	})
		.then(message => {
			// console.log(message.sid);
			return res.status(200).send({
				message: message,
				otp: otp
			});
		})
		.catch((exception) => {
			const msg = "Exception thrown by Twilio" + exception;
			return res.status(200).send(msg);
		});
};

module.exports = controller;
