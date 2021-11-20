/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const smsSender = process.env.SMS_SENDER;
const client = require('twilio')(accountSid, authToken);

const sendSMS = (phoneNumber, message) => {
	return client.messages.create({
		body: message,
		from: '+1' + smsSender,
		to: '+91' + phoneNumber
	})
}

module.exports = sendSMS;