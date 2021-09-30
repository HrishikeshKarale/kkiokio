const controller = (req, res) => {
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
