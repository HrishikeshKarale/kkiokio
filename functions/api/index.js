/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const twilioRoutes = require("./twilio/index");
const authenticateRoutes = require("./authentication/index");

//handle request made to api/authenticate
const route = express.Router();

route.use("/api", twilioRoutes);
route.use("/api", authenticateRoutes);

module.exports = route;