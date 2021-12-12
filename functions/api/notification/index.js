/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const emailRoute = require("./email/route");

//handle request made to api/authenticate
const route = express();

route.use("/notification", emailRoute);
route.get("/notification", (req, res) => {
	return res.status(200).send("notification route is working");
});

module.exports = route;