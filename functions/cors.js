/* eslint-disable @typescript-eslint/no-var-requires */
const corsFunction = (req, res, next) => {

	// CORS headers
	res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	// Set custom headers for CORS
	// res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	if (req.method === 'OPTIONS') {
		console.log("HELO");
		res.status(200).end();
	} else {
		// eslint-disable-next-line callback-return
		next();
	}
};

module.exports = corsFunction;