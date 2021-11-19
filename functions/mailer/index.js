/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const nodemailer = require('nodemailer');
const sender = process.env.SENDER_EMAIL;
const password = process.env.SENDER_PASSWORD;

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: sender,
		pass: password
	}
});

const sendMail = (to, subject, content) => {
	transporter.sendMail({
		from: sender,
		to: to.length > 1 ? to.join(', ') : to,
		subject: subject,
		text: content.type === 'text' ? content.value : '',
		html: content.type === 'html' ? content.value : ''
	}, function (error, info) {
		if (error) {
			console.log('ERROR: ', error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
}

module.exports = sendMail;