/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const getController = require("./getController");
const postController = require("./postController");

//handle request made to api/authenticate/login
const route = express.Router();

// define the route for logging in an administrator
route.get("/popular/:limit?", getController);
route.post("/popular", postController);

module.exports = route;
