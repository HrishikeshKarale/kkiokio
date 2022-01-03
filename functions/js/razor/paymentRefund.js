app.post('/refund', async (req, res) => {
	try {
		//first validate the payment Id then call razorpay API
		/* eslint-disable @typescript-eslint/camelcase */
		const options = {
			payment_id: req.body.paymentId,
			amount: req.body.amount,
		};
		const razorpayResponse = await razorpay.refund(options);
		if (razorpayResponse) {
			res.send('Successfully refunded')
		}
		//we can store detail in db and send the response
	} catch (error) {
		console.error(error);
		res.status(400).send('Unable to refund the payment');
	}
})