/* eslint-disable @typescript-eslint/no-var-requires */
const functions = require('firebase-functions');
const express = require("express");
const cors = require('cors');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const DB = require("./database/db");
const config = require("./config");
// const twilio = require('twilio');
//configure env
require('dotenv').config();

//twilio
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = "ACc55f4375a5da3246b262df5a1875eb0c";
const authToken = "32ea9117df10a25808383da8505a9885";
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const db = new DB("sqlitedb");
const app = express();
app.use(cors());
const router = express.Router();

router.use(
	bodyParser.urlencoded({
		extended: false
	})
);
router.use(bodyParser.json());


router.get("/", (req, res) => {
	return res.status(200).send("Server is working");
});
router.get("/api", (req, res) => {
	return res.status(200).send("api is working");
});

//send message to a predefined number
router.post("/twilio", (req, res) => {
	client.messages.create({
		body: 'Please copy paste this code on whatsapp group (Rishi) CODE: hellY hea!',
		from: '+19168888870',
		to: '+13156122340'
	})
		.then(message => {
			console.log(message.sid);
			return res.status(200).send(`Message sent ${message.sid}`);
		})
		.catch((exception) => {
			const msg = "Exception thrown by Twilio" + exception;
			return res.status(200).send(msg);
		});
});

//send automated response
router.post('/sms', (req, res) => {
	const twiml = new MessagingResponse();

	twiml.message('The Robots are coming! Head for the hills!');

	res.writeHead(200, { 'Content-Type': 'text/xml' });
	res.end(twiml.toString());
});

// defining router for registering a new user
router.post("/register", (req, res) => {
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

// define the route for registering an administrator
router.post("/register-admin", (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const username = req.body.username;
	const password = req.body.password;
	db.insertAdmin(
		[name, email, username, bcrypt.hashSync(password, 8), 1],
		err => {
			if (err)
				return res
					.status(500)
					.send("There was a problem registering the user.");
			db.selectByEmail(email, (err, user) => {
				if (err)
					return res.status(500).send("There was a problem getting user");
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
		}
	);
});

// define the route for logging in an administrator
router.post("/loginUser", (req, res) => {
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

// use the Express server to make our application accessible
app.use(router);

exports.router = functions.https.onRequest(router);



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

