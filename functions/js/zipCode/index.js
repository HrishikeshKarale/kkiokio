/* eslint-disable @typescript-eslint/no-var-requires */
const AXIOS = require("axios");
require('dotenv').config();
const APIKEY = process.env.ZIP_CODE_BASE_API;
const BASEURL = process.env.ZIP_CODE_BASE_URL;
const COUNTRY = process.env.ZIP_CODE_BASE_COUNTRY;
const UNIT = process.env.ZIP_CODE_BASE_UNIT;

const zipCode = async (type = "status", code1 = null, code2 = null, radius = 5) => {
	let url = BASEURL;
	let validRequest = true;
	switch (type) {
		case "status":
			url += "status";
			break;
		case "search":
			url += `search?apikey=${APIKEY}&codes=${code1}&country=${COUNTRY}`;
			break;
		case "distance":
			url += `distance?apikey=${APIKEY}&codes=${code1}&compare=${code2}&country=${COUNTRY}&unit=${UNIT}`;
			break;
		case "raduis":
			url += `radius?apikey=${APIKEY}&codes=${code1}&radius=${radius}&country=${COUNTRY}&unit=${UNIT}`;
			break;
		default:
			validRequest = false
			console.error("invalid request: type mismatch found");
	}
	if (validRequest) {
		return AXIOS.get(url);
	}
}

module.exports = zipCode;