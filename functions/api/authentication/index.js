/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const loginRoutes = require("./login/route");
const registerRoutes = require("./register/route");

//handle request made to api/authenticate
const route = express.Router();

route.use("/authenticate", loginRoutes);
route.use("/authenticate", registerRoutes);
route.get("/authenticate", (req, res) => {
	return res.status(200).send("authenticate is working");
});

module.exports = route;