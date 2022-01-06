/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const loginRoute = require("./login/route");
// const registerRoute = require("./register/route");
// const emailIDRoute = require("./emailID/route");

//handle request made to api/authenticate
const route = express.Router();

// route.use("/authentication", emailIDRoute);
route.use("/authentication", loginRoute);
// route.use("/authentication", registerRoute);
route.get("/authentication", (req, res) => {
	return res.status(200).send("authentication route is working");
});

module.exports = route;