/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const sms = require("./controller");

//handle request made to api/authenticate/login
const route = express.Router();

// define the route for logging in an administrator
route.post("/sms", sms.controller);

module.exports = route;
