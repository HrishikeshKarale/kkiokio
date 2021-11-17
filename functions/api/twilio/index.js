/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const otpRoutes = require("./otp/route");
const smsRoutes = require("./sms/route");
const whatsappRoutes = require("./whatsapp/route");
const verifiedNumberRoutes = require("./addVerifiedNumber/route");
const whatsappQueryRoutes = require("./whatsappQuery/route");

//handle request made to api/authenticate
const route = express();

route.use("/twilio", otpRoutes);
route.use("/twilio", smsRoutes);
route.use("/twilio", whatsappRoutes);
route.use("/twilio", verifiedNumberRoutes);
route.use("/twilio", whatsappQueryRoutes);
route.get("/twilio", (req, res) => {
	return res.status(200).send("twilio is working");
});

module.exports = route;