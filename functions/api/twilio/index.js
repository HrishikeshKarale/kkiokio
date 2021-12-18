/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const otpRoute = require("./otp/route");
const smsRoute = require("./sms/route");
const whatsappRoute = require("./whatsapp/route");
const verifiedNumberRoute = require("./addVerifiedNumber/route");
const whatsappQueryRoute = require("./whatsappQuery/route");

//handle request made to api/authenticate
const route = express();

route.use("/twilio", otpRoute);
route.use("/twilio", smsRoute);
route.use("/twilio", whatsappRoute);
route.use("/twilio", verifiedNumberRoute);
route.use("/twilio", whatsappQueryRoute);
route.get("/twilio", (req, res) => {
	return res.status(200).send("twilio route is working");
});

module.exports = route;