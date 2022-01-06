/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const CUSTOMER = process.env.MONGO_DB_CUSTOMER;
const PROFILE = process.env.MONGO_DB_PROFILE;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { findQuery } = require("../../../database/query/index");
// const DB = require("../../../database/dbConnection");
// const config = require("../../../config");
// const db = new DB("sqlitedb");

const controller = async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	await findQuery({
		database: PROFILE,
		collection: CUSTOMER,
		query: {
			"email.value": email
		}
	})
		.then(result => {
			try {
				const passwordIsValid = bcrypt.compareSync(password, result[0].password);

				if (!passwordIsValid) {
					return res.status(401).send({
						auth: false,
						token: "Incorrect Password"
					});
				}

				const token = jwt.sign(
					{
						id: user.id
					},
					config.secret,
					{
						expiresIn: 86400 // expires in 24 hours
					}
				);
				res.status(200).send({
					auth: true,
					token,
					user
				});
			} catch {
				console.log("does not work", bcrypt);
			}
		})
		.catch(error => {
			return res.status(400).send({
				status: false,
				message: "EmailID/Password did not match. Please try again.",
				error: error
			});
		});



	// db.selectByEmail(email, (err, user) => {
	// 	if (err) return res.status(500).send({
	// 		auth: false,
	// 		message: "Error on the server.",
	// 	});
	// 	if (!user) return res.status(404).send({
	// 		auth: false,
	// 		message: "No user found.",
	// 	});
	// 	const passwordIsValid = bcrypt.compareSync(password, user.user_pass);
	// 	if (!passwordIsValid) {
	// 		return res.status(401).send({
	// 			auth: false,
	// 			token: "Incorrect Password"
	// 		});
	// 	}
	// 	const token = jwt.sign(
	// 		{
	// 			id: user.id
	// 		},
	// 		config.secret,
	// 		{
	// 			expiresIn: 86400 // expires in 24 hours
	// 		}
	// 	);
	// 	res.status(200).send({
	// 		auth: true,
	// 		token,
	// 		user
	// 	});
	// });
};

module.exports = controller;
