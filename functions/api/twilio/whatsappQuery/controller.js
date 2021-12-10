/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const registerUser = require('../../../stateMachine/registerUser/index');
const completeProfile = require('../../../stateMachine/completeProfile/index');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// const sender = process.env.SENDER;
const client = require('twilio')(accountSid, authToken);

// query
const { findQuery } = require("../../../database/query/index");

const controller = async (req, res) => {
	const message = req.body.Body;
	const sender = req.body.From;
	const reciever = req.body.To;

	let func;

	await findQuery({
		type: "default",
		target: 'user',
		query: {
			"phoneNumber.value": sender.slice(-10)
		},
		select: ["name", "phoneNumber", "email"]
	})
		.then(result => {

			if (result.length > 0) {
				func = completeProfile;
			} else {
				func = registerUser;
			}
			return {
				status: true,
				result: result
			};
		})
		.catch(() => console.error("ERROR FindQuery"));




	// console.log('whatsappQuery', message, req.body);
	client.messages
		.create({
			body: await func({
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
