/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const controller = require("./controller");

//handle request made to api/authenticate
const route = express.Router();

// defining router for registering a new user
route.post("/logout", controller);

module.exports = route;