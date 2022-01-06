/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const CUSTOMER = process.env.MONGO_DB_CUSTOMER;
const PROFILE = process.env.MONGO_DB_PROFILE;
const HASHCOMPLEX = process.env.HASH_COMPLEX;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const DB = require("../../../database/db");
// const config = require("../../../config");
// const db = new DB("sqlitedb");

const controller = (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const phoneNumber = req.body.phoneNumber;
	const username = req.body.username;
	const password = req.body.password;
	const isAdmin = (req.params.isAdmin !== null) ? req.params.isAdmin : 0;

	const DATA = {
		database: PROFILE,
		collection: CUSTOMER,
		name,
		email: {
			value: email,
			isVerified: false
		},
		password: {
			value: bcrypt.hashSync(password, HASHCOMPLEX),
			isVerified: false
		},
		phoneNumber: {
			value: phoneNumber,
			isVerified: false
		},
		username,
		isAdmin
	};

	await saveQuery(DATA);

	// name: this.user.name,
	// 	email: {
	// 	value: this.user.email.id,
	// 		isVerified: this.user.email.verified
	// },
	// phoneNumber: {
	// 	value: this.user.phone.number,
	// 		isVerified: this.user.phone.verified
	// }
	// db.insert([name, email, username, bcrypt.hashSync(password, 8), isAdmin], err => {
	// 	if (err) {
	// 		console.error("register user", err);
	// 		return res.status(500).send("There was a problem registering the user.");
	// 	}
	// 	db.selectByEmail(email, (err, user) => {
	// 		if (err) return res.status(500).send("There was a problem getting user");
	// 		const token = jwt.sign(
	// 			{
	// 				id: user.id
	// 			},
	// 			config.secret,
	// 			{
	// 				expiresIn: 86400 // expires in 24 hours
	// 			}
	// 		);
	// 		res.status(200).send({
	// 			auth: true,
	// 			token,
	// 			user
	// 		});
	// 	});
	// });
};

module.exports = controller;
