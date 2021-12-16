/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const PROFILE = process.env.MONGO_DB_PROFILE;
const CUSTOMER = process.env.MONGO_DB_CUSTOMER;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const registerUser = require('../../../stateMachine/registerUser/index');
const completeProfile = require('../../../stateMachine/completeProfile/index');
// const sender = process.env.SENDER;
const client = require('twilio')(accountSid, authToken);
// query
const { findQuery } = require("../../../database/query/index");

const controller = async (req, res) => {
	const message = req.body.Body;
	const sender = req.body.From;
	const reciever = req.body.To;

	let func = registerUser;

	await findQuery({
		type: "default",
		database: PROFILE,
		collection: CUSTOMER,
		query: {
			"phoneNumber.value": sender.slice(-10)
		},
		select: ["name", "phoneNumber", "email"]
	})
		.then(result => {
			if (result.length !== 0 && result[0].phoneNumber.value === sender.slice(-10)) {
				func = completeProfile;
			}

			return {
				status: true,
				result: result
			};
		})
		.catch((result) => console.error("ERROR FindQuery " + result));




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
