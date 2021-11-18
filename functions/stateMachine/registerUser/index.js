// enum Preset {
// 	HELLO = 'Hi'
// };

let reply;

let state = {
	active: false
};

function getReply(query) {
	console.log('getReply', query);
	switch (query) {
		case "Hi":
			reply = "Dear user,\nThe number * phoneNumber * is not a registered number.\n\nWould you like to register with us using this number ?\n1. Yes, Register * phoneNumber *\n2. NO"
			break;
		case "a":
			reply = "Great!\nPlease Enter your Full Name(Ex: Ravi Patel)"
			break;
		case "b":
			reply = "Hi *firstName*,\nPlease enter your Date of Birth(Ex: 01 01 90) in a 2 digit DD MM YY format."
			break;
		case "c":
			reply = "As per our system, you seem to be *X* Years old.\n\nIs that correct ?\n1. Yes, I am * X * years old\n2. Re - Enter Date of Birth"
			break;
		case "d":
			reply = "Great!\nNow that we know your age, Please enter your email address you wish to use with this account.  (Ex: username@domain.com)"
			break;
		case "e":
			reply = "We have sent a confirmation email to *emailID@mail.com*.\nPlease confirm your email ID."
			break;
		case "f":
			reply = "You are all set up."
		case "g":
			reply = "Your profile is 40% complete.\nWould you like to complete your profile?\n1. Yes, Continue with Address details\n2. NO"
			break;
		case "h":
			reply = "Awesome!\nLets continue your registration.\nPlease enter the details of your address below.\n\nI live in a ______?\n1. House\n2. partment"
			break;
		case "i":
			reply = "Please enter your house Number.\nIf you don't know your houseNumber enter 'N' to skip this question"
			break;
		case "j":
			reply = "Please enter closest landmark details if any, if not type 'n' to skip. (Ex: near/behind/across police station)"
			break;
		case "k":
			reply = "Please enter line 1 of your address (Ex: Jawahar Nagar/Colony)"
			break;
		case "l":
			reply = "Please enter line 2 of your address.\nType 'N' to skip"
			break;
		case "m":
			reply = "Please Enter zip/pin code"
			break;
		case "n":
			reply = "Do you live in *cityName*, *state*?\n1. Yes, I live in *cityName*, *state*\n2. NO"
			break;
		case "o":
			reply = "Your profile is 60% complete.\nWould you like to complete your profile?\n\n1. Yes, Continue with mode of payment\n2. NO"
			break;
		case "p":
			reply = "Please follow this link and make a payment of 1 rupee.\nYou payment would be returned to your bank account in 3 days.\n\n*Link*"
			break;
		case "q":
			reply = "congralutations! Payment mode set up successfull\n\nA payment of Rs 1/- is made in the name of *firstName* *lastName*.\n\nYour payment will be reverted back in 2-3 days\n\nPlease contact us if it does not show up in 5 days."
			break;
		case "r":
			reply = "Your profile is not 8-% complete.\nTo complete your profile any further, please visit this link and sign in to continue \n\n*link*"
			break;
		default:
			reply = 'Please try again.'
	};
	return reply;
};

module.exports = getReply;