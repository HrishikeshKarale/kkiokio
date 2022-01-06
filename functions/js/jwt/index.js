/* eslint-disable @typescript-eslint/no-var-requires */
// https://www.npmjs.com/package/jsonwebtoken
// look into token algorithms
const expiry = 86400;
const jwt = require("jsonwebtoken");
const config = require("../../config");

const createToken = (id) => {
	const value = jwt.sign(
		{
			id
		},
		config.secret,
		{
			expiresIn: expiry // expires in 24 hours
		}
	);
	return {
		value,
		expiry
	};
};

const verifyToken = (token) => {
	return jwt.verify(token, config.secret);
}

module.exports = { createToken, verifyToken };