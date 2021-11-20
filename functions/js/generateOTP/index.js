const generateOTP = (digit = 4) => {
	const start = 10 ** digit;
	const end = (10 ** (digit + 1)) - 1;
	return Math.floor(start + Math.random() * end).toString();
}

module.exports = generateOTP;