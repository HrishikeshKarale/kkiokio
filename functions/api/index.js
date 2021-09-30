/* eslint-disable @typescript-eslint/no-var-requires */
const { Router } = require("express");
const { loginRouter } = require("./authentication/login");
const { registerRouter } = require("./authentication/register");

//handle request made to api/authenticate
const authenticateRouter = Router();

authenticateRouter.use("/authenticate", loginRouter);
authenticateRouter.use("/authenticate", registerRouter);

module.export = {
	authenticateRouter
};