/* eslint-disable @typescript-eslint/no-var-requires */
const crypto = require('crypto')
// require("dotenv").config();
// const RAZOR_ID = process.env.RAZOR_ID;
// const RAZOR_KEY = process.env.RAZOR_KEY;
const secret_key = '12345678';

app.post('/paymentCapture', (req, res) => {
	// do a validation
	const data = crypto.createHmac('sha256', secret_key)
	data.update(JSON.stringify(req.body))
	const digest = data.digest('hex')
	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
		//we can store detail in db and send the response
		res.json({
			status: 'ok'
		})
	} else {
		res.status(400).send('Invalid signature');
	}
})