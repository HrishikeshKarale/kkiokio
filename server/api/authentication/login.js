/* eslint-disable @typescript-eslint/no-var-requires */
const { Router } = require("express");
const config = require("../../config");
const DB = require("../../database/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//handle request made to api/authenticate
const loginRouter = Router();
const db = new DB("sqlitedb");

// define the route for logging in an administrator
loginRouter.post("/loginUser", (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	db.selectByEmail(email, (err, user) => {
		if (err) return res.status(500).send("Error on the server.");
		if (!user) return res.status(404).send("No user found.");
		const passwordIsValid = bcrypt.compareSync(password, user.user_pass);
		if (!passwordIsValid) {
			return res.status(401).send({
				auth: false,
				token: null
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
	});
});

module.export = {
	loginRouter
};
