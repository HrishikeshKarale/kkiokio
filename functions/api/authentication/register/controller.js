/* eslint-disable @typescript-eslint/no-var-requires */
const DB = require("../../../database/db");
const config = require("../../../config");
const db = new DB("sqlitedb");
const controller = (req, res) => {
	//console.log("pretneder");
	const name = req.body.name;
	const email = req.body.email;
	const username = req.body.username;
	const password = req.body.password;
	const isAdmin = req.param.isAdmin;
	db.insert([name, email, username, bcrypt.hashSync(password, 8), isAdmin], err => {
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
};

module.exports = {
	controller
};
