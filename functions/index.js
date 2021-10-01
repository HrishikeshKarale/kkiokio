/* eslint-disable @typescript-eslint/no-var-requires */
const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
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

//api routes
const apiRoutes = require("./api");

const app = express();
app.use(cors());
const router = express.Router();

router.use(
	bodyParser.urlencoded({
		extended: false
	})
);
router.use(bodyParser.json());

router.route('/')
	.get(function (req, res) {
		res.send('server is working (get)');
	})
	.delete(function (req, res) {
		res.send('server is working (delete)');
	})
	.post(function (req, res) {
		res.send('server is working (post)');
	})
	.put(function (req, res) {
		res.send('server is working (put)');
	});

//twilio routes (SMS)
router.use("/", apiRoutes);

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

