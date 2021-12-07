/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const sendMail = require('../../../js/sendMail/index');
const sendTo = process.env.SENDER_EMAIL;
// mongoose db connection
// const mongoose = require("mongoose");
// const CONNECTION = mongoose.connection;
// import a model
// const connectRequest = require("../../../database/schemas/contact/index");
const { saveQuery } = require("../../../database/query/index");


const controller = async (req, res) => {
	const data = {
		target: req.body.target,
		to: sendTo,
		name: req.body.name,
		subject: req.body.subject,
		email: req.body.email,
		phoneNumber: req.body.phoneNumber,
		preffered: req.body.preffered,
		message: req.body.message,
	}

	// // set data
	// const contact = new connectRequest({
	// 	name: name,
	// 	to: to,
	// 	email: cc,
	// 	phoneNumber: phoneNumber,
	// 	message: content,
	// 	preffered: preffered
	// });

	// save
	await saveQuery(data)
		.then(async (savedResult) => {
			try {
				return await sendMail(
					[
						data.to
					],
					data.subject,
					{
						type: 'html',
						value: `<p>Hi,<p>A contact request has been made by ${savedResult.name} to contact you.<br />The preferred means of contatct is <b>${savedResult.preffered}</b></p><p>*Phone:* ${savedResult.phoneNumber}</p>*Email ID*: ${savedResult.email}<p></p></p><p>*Message:* <q>${savedResult.message}</q></p>`
					},
					[
						savedResult.email
					]
				)
			} catch (error) {
				console.error('CATCH ERROR: ', error);
				return res.status(400).send({
					status: false,
					message: "Contact request saved in DB. Email sending failed.",
					error: error
				});
			}
		})
		.then(() => {
			return res.status(200).send({
				status: true,
				message: "Email Sent."
			});
		})
		.catch(exception => {
			console.error('ERROR: ', exception);
			return res.status(400).send({
				status: false,
				message: "opeartion failed, please try again.",
				error: error
			});
		});
};

module.exports = controller;
