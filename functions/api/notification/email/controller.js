/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const sendMail = require('../../../js/sendMail/index');
const to = process.env.SENDER_EMAIL;
// mongoose db connection
const mongoose = require("mongoose");
const CONNECTION = mongoose.connection;
// import a model
const contactPage = require("../../../database/schemas/contact/contact");


const controller = async (req, res) => {
	const name = req.body.name;
	const preffered = req.body.preffered;
	const phoneNumber = req.body.phoneNumber;
	const subject = req.body.subject;
	const content = req.body.content;
	const cc = req.body.cc;

	// set data
	const contact = new contactPage({
		name: name,
		to: to,
		email: cc,
		phoneNumber: phoneNumber,
		message: content,
		preffered: preffered
	});

	// save data to mongoDB

	// save
	contact.save(async function (error) {
		if (error) {
			console.error(" SAVE_CONTACT ERROR: ", error);
			return res.status(400).send("data not saved, please try again");
		} else {
			try {
				await sendMail(
					[
						to
					],
					subject,
					{
						type: 'html',
						value: `<p>Hi,<p>A contact request has been made by ${name} to contact you.<br />The preferred means of contatct is <b>${preffered}</b></p><p><span :class='${preffered}=="phone"? "fas fa-check": ""' />Phone: ${phoneNumber}</p><span :class='${preffered}=="email"? "fas fa-check": ""' />email ID: ${cc}<p></p></p><p>message: <q>${content}</q></p>`
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
						return res.status(400).send("Quert saved but email sending failed");
					});
			} catch (error) {
				return res.status(400).send("Quert saved but email NOT SENT", error);
			}
		}
	});
};

module.exports = controller;
