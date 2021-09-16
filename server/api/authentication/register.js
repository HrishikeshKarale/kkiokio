/* eslint-disable @typescript-eslint/no-var-requires */
const { Router } = require("express");
const config = require("../../config");
const DB = require("../../database/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//handle request made to api/authenticate
const registerRouter = Router();
const db = new DB("sqlitedb");

// defining router for registering a new user
registerRouter.post("/register", (req, res) => {
	//console.log("pretneder");
	const name = req.body.name;
	const email = req.body.email;
	const username = req.body.username;
	const password = req.body.password;
	db.insert([name, email, username, bcrypt.hashSync(password, 8), 0], err => {
		if (err) {
			// console.error("register user", err);
			return res.status(500).send("There was a problem registering the user.");
		}
		db.selectByEmail(email, (err, user) => {
			if (err) return res.status(500).send("There was a problem getting user");
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
		});
	});
});

module.export = {
	registerRouter
};