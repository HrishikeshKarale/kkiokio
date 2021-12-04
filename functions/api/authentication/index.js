/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
// const loginRoutes = require("./login/route");
// const registerRoutes = require("./register/route");
const emailIDRoutes = require("./emailID/route");

//handle request made to api/authenticate
const route = express.Router();

route.use("/authentication", emailIDRoutes);
// route.use("/authentication", loginRoutes);
// route.use("/authentication", registerRoutes);
route.get("/authentication", (req, res) => {
	return res.status(200).send("authentication is working");
});

module.exports = route;