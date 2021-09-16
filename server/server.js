/* eslint-disable @typescript-eslint/no-var-requires */
// defined the database, and created an Express server and router
const express = require("express");
const cors = require('cors');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const DB = require("./database/db");
const config = require("./config");
// const { authenticateRouter } = require("./api");

const db = new DB("sqlitedb");
const app = express();
app.use(cors());
const router = express.Router();
// use the Express server to make our application accessible
app.use(router);

router.use(
	bodyParser.urlencoded({
		extended: false
	})
);
router.use(bodyParser.json());


router.get("/api", (req, res) => {
	return res.status(200).send("Welcome to kkiokio API");
});
router.get("/", (req, res) => {
	return res.status(200).send("Welcome to kkiokio web server");
});

const port = process.env.PORT || 8001;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const server = app.listen(port, () => {
	console.log(`Express server listening on port ${port}`);
});
