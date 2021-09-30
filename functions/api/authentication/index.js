/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const loginRoutes = require("./login/route");
const registerRoutes = require("./register/route");

//handle request made to api/authenticate
const route = express.Router();

route.use("/authenticate", loginRoutes);
route.use("/authenticate", registerRoutes);

module.exports = route;