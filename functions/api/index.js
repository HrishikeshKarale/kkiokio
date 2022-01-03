/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const twilioRoute = require("./twilio/index");
const productRoute = require("./product/index");
const authenticateRoute = require("./authentication/index");
const notificationRoute = require("./notification/index");
const razorRoute = require("./razor/index");

//handle request made to api/authenticate
const route = express.Router();

route.use("/api", twilioRoute);
route.use("/api", productRoute);
route.use("/api", notificationRoute);
route.use("/api", razorRoute);
route.use("/api", authenticateRoute);
route.get("/api", (req, res) => {
	return res.status(200).send("api route is working");
});

module.exports = route;