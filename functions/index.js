/* eslint-disable @typescript-eslint/no-var-requires */
const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
//api routes
const apiRoutes = require("./api");
//cors
const corsFunc = require("./cors");

const app = express();

app.use(cors());
const router = express.Router();

router.use(
	bodyParser.urlencoded({
		extended: false
	})
);
router.use(bodyParser.json());

router.all('/*', corsFunc);

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

