/* eslint-disable @typescript-eslint/no-var-requires */
const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
//api routes
const apiRoutes = require("./api");
//cors
const corsFunc = require("./cors");

// connect to db
require("./database/dbConnection");
// // import a model
// const contactPage = require("./database/schemas/contact/contact");
// // set data
// const anurag = new contactPage({
// 	name: "Anurag Tingre",
// 	email: "anuragtingre@gmail.com",
// 	phoneNumber: 7588792342,
// 	message: "This is a test run for entering details from message page"
// });
// // save
// anurag.save(function (error) {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		console.log("saved!");
// 		// contactPage.find({ "name": "Anurag Tingre" }, function (error, result) {
// 		// 	if (error) {
// 		// 		console.log("FIND ERROR: ", error);
// 		// 	} else {
// 		// 		console.log(result);
// 		// 	}
// 		// });
// 	}
// });


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
	.get((req, res) => {
		res.send('server is working (get)');
	})
	.delete((req, res) => {
		res.send('server is working (delete)');
	})
	.post((req, res) => {
		res.send('server is working (post)');
	})
	.put((req, res) => {
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

