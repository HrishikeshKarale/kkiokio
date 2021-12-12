/* eslint-disable @typescript-eslint/no-var-requires */
const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
//api routes
const apiRoute = require("./api");
//cors
const corsFunc = require("./cors");

// connect to db
require("./database/dbConnection");

const app = express();
app.use(cors(corsFunc));

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
		res.status(200).send('server is working (get)');
	})
	.delete((req, res) => {
		res.status(200).send('server is working (delete)');
	})
	.post((req, res) => {
		res.status(200).send('server is working (post)');
	})
	.put((req, res) => {
		res.status(200).send('server is working (put)');
	});

//twilio routes (SMS)
router.use("/", apiRoute);

// use the Express server to make our application accessible
app.use(router);

exports.router = functions.https.onRequest(router);