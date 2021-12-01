/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const controller = (req, res) => {
	let phoneNumber = 8551849510;
	if (req.body.phoneNumber) {
		phoneNumber = req.body.phoneNumber;
	}
	const name = req.body.name;

	if (name) {
		client.validationRequests
			.create({
				friendlyName: name,
				phoneNumber: '+91' + phoneNumber
			})
			.then(validationRequest => {
				return res.status(200).send({ validationRequest: validationRequest })
			})
			.catch((exception) => {
				const msg = "Exception thrown by Twilio" + exception;
				return res.status(200).send(msg);
			});
	} else {
		return res.status(419).send({
			message: "missing argument",
		});
	}
};

module.exports = controller;
