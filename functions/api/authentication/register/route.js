/* eslint-disable @typescript-eslint/no-var-requires */
const { Router } = require("express");
const register = require("./controller");

//handle request made to api/authenticate
const registerouter = Router();

// defining router for registering a new user
registerouter.post("/register:isAdmin", register.controller);

module.export = {
	registerRouter
};