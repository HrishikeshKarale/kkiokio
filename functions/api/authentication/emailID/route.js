/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const controller = require("./controller");

//handle request made to api/authenticate/login
const route = express.Router();

// define the route for logging in an administrator
route.post("/verifyEmailID/:emaiID/:code", controller);
route.get("/verifyEmailID/:emaiID/:code", (req, res) => {
	return res.status(200).send("Email ID is verified " + req.params.emaiID + " " + req.params.code);
});

module.exports = route;
