const controller = (req, res) => {
	const emailID = req.params.emaiID;
	const code = req.params.code;
	// console.log('verifyEmailID: ', emailID, code);
	res.status(200).send({
		emailID,
		code
	});
};

module.exports = controller;
