/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
// import getReply from '../../../stateMachine/whatsappBot/index'
const getReply = require('../../../stateMachine/registerUser/index');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// const sender = process.env.SENDER;
const client = require('twilio')(accountSid, authToken);
const controller = async (req, res) => {
	let message = req.body.Body;
	const sender = req.body.From;
	const reciever = req.body.To;

	// console.log('whatsappQuery', message, req.body);
	client.messages
		.create({
			body: await getReply({
				message: message,
				to: reciever,
				from: sender
			}),
			from: reciever,
			to: sender
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
