/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const twilioRoutes = require("./twilio/index");
const authenticateRoutes = require("./authentication/index");
const notificationRoutes = require("./notification/index");

//handle request made to api/authenticate
const route = express.Router();

route.use("/api", twilioRoutes);
route.use("/api", notificationRoutes);
route.use("/api", authenticateRoutes);
route.get("/api", (req, res) => {
	return res.status(200).send("api is working");
});

module.exports = route;