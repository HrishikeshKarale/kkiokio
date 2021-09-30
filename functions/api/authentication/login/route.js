/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const login = require("./controller");

//handle request made to api/authenticate/login
const loginrouter = express.Router();

// define the route for logging in an administrator
loginrouter.post("/login", login.controller);

module.export = {
	loginRouter
};
