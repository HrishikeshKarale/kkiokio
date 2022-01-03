/* eslint-disable @typescript-eslint/no-var-requires */
const sendSMS = require('../../../js/sendSMS/index');
const generateOTP = require('../../../js/generateOTP/index');

const controller = (req, res) => {
	const phoneNumber = req.body.phoneNumber;
	const otp = req.body.otp ? req.body.otp : generateOTP(5);

	const message = `Kkiokio.com\nOTP Code: ${otp}`;

	sendSMS(phoneNumber, message)
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
