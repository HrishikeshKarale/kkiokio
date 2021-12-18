app.post('/refund', async (req, res) => {
	try {
		//first validate the payment Id then call razorpay API
		const options = {
			payment_id: req.body.paymentId,
			amount: req.body.amount,
		};
		const razorpayResponse = await razorpay.refund(options);
		//we can store detail in db and send the response
		res.send('Successfully refunded')
	} catch (error) {
		console.log(error);
		res.status(400).send('Unable to refund the payment');
	}
})