/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const otpRoutes = require("./otp/route");
const smsRoutes = require("./sms/route");

//handle request made to api/authenticate
const route = express();

route.use("/twilio", otpRoutes);
route.use("/twilio", smsRoutes);
route.get("/twilio", (req, res) => {
	return res.status(200).send("twilio is working");
});

module.exports = route;