/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const popularRoute = require("./popular/route");
const updateCartRoute = require("./popular/route");

//handle request made to api/authenticate
const route = express();

route.use("/product", updateCartRoute);
route.use("/product", popularRoute);
route.get("/product", (req, res) => {
	return res.status(200).send("product route is working");
});

module.exports = route;