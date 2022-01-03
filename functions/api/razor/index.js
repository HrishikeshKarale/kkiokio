/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const orderRoute = require("./order/route");
const paymentRoute = require("./payment/route");
const catchRoute = require("./catch/route");

//handle request made to api/authenticate
const route = express();

route.use("/razor", orderRoute);
route.use("/razor", paymentRoute);
route.use("/razor", catchRoute);
route.get("/razor", (req, res) => {
	return res.status(200).send("razor route is working");
});

module.exports = route;