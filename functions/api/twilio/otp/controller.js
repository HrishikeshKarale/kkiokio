/* eslint-disable @typescript-eslint/no-var-requires */
const accountSid = "ACc55f4375a5da3246b262df5a1875eb0c";
const authToken = "32ea9117df10a25808383da8505a9885";
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken); const controller = (req, res) => {
	client.messages.create({
		body: `OTP Code: ${Math.floor(1000 + Math.random() * 9000)}`,
		from: '+19168888870',
		to: '+13156122340'
	})
		.then(message => {
			console.log(message.sid);
			return res.status(200).send(`Message sent ${message.sid}`);
		})
		.catch((exception) => {
			const msg = "Exception thrown by Twilio" + exception;
			return res.status(200).send(msg);
		});
};

module.exports = {
	controller
};
