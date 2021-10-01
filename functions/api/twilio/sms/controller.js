/* eslint-disable @typescript-eslint/no-var-requires */
const accountSid = "ACc55f4375a5da3246b262df5a1875eb0c";
const authToken = "32ea9117df10a25808383da8505a9885";
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const controller = (req, res) => {
	const twiml = new MessagingResponse();

	twiml.message('The Robots are coming! Head for the hills!');

	res.writeHead(200, { 'Content-Type': 'text/xml' });
	res.end(twiml.toString());
};

module.exports = {
	controller
};
