/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const sendMail = require('../../../js/sendMail/index');
const to = process.env.SENDER_EMAIL;
const controller = async (req, res) => {
	const name = req.body.name;
	const preffered = req.body.preffered;
	const phoneNumber = req.body.phoneNumber;
	const from = req.body.from;
	const subject = req.body.subject;
	const content = req.body.content;
	const cc = req.body.cc;

	await sendMail(
		[
			to
		],
		subject,
		{
			type: 'html',
			value: `<p>Hi,<p>A contact request has been made by ${name} to contact you.<br />The preferred means of contatct is ${preffered}</p></p><p>${content}</p>`
		},
		[
			cc
		]
	)
		.then(() => {
			return res.status(200).send("email sent");
		})
		.catch(exception => {
			console.error('ERROR: ', exception);
			return res.status(400).send("email not send");
		});
};

module.exports = controller;
