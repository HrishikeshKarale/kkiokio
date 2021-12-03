/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const emailRoutes = require("./email/route");

//handle request made to api/authenticate
const route = express();

route.use("/notification", emailRoutes);
route.get("/notification", (req, res) => {
	return res.status(200).send("notification is working");
});

module.exports = route;