/* eslint-disable @typescript-eslint/no-var-requires */
const sendSMS = require('../../js/sendSMS/index');
const sendMail = require('../../js/sendMail/index');
const generateOTP = require('../../js/generateOTP/index');

let reply;

const machine = {
	state: {
		type: 'INIT',
		subType: ''
	},
	profile: {
		DOB: '',
		COUNTER: 3,
		gender: '',
		address: {
			type: '',
			houseOrAptNumber: '',
			landmark: '',
			address1: '',
			address2: '',
			zipCode: '',
			city: '',
			state: '',
			country: 'India'
		},
		paymentMode: ''
	},
	transitions: {
		INIT: {
			initialise: function (payload) {
				reply = `Thank you for registering ith us.\nNow, let's work towards setting up your profile for success.\n\nPlease enter your Date of birth (DOB) in a 2 digit DD MM YYYY or DD MM YY  format. (Ex: 26 01 90 for January 26, 1990)`;
				this.changeState('REGISTER_DOB');
			},
		},
		REGISTER_DOB: {
			validateDOB: async function (payload) {
				const datePattern = new RegExp('^(?:(?:31(\/|-|\.| )(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.| )(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.| )0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.| )(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$');
				const reg = emailPattern.test(payload.message);
				let delimiter = ' '
				switch (reg) {
					case true:
						if (payload.message.index('/')) {
							delimiter = '/'
						} else if (payload.message.index('.')) {
							delimiter = '.'
						} else if (payload.message.index('-')) {
							delimiter = '-'
						}
						const [date, month, year] = payload.message.split(delimiter);

						this.changeState('REGISTER_GENDER');
						reply = '*DOB added successfully*\n\nPlease select your Gender\n1. Female\n2. Male';
						break;
					case false:
						this.changeSubState('');
						reply = '*Wrong Format*\nPlease try again';
						break;
					default:
						reply = 'Invaid reply\nPlease try again';
				};
			},
		},
		REGISTER_GENDER: {
			verifyName: function (payload) {
				const [firstName, lastName] = payload.message.split(' ');
				// console.log(firstName, lastName);
				reply = `Hi *${firstName}*,\nPlease enter a valid email ID for registration (Ex: John.doe@gmail.com).`
				this.changeState('REGISTER_EMAIL');
			}
		},
		REGISTER_ADDRESS: {
			sendCode: async function (payload) {
				const emailPattern = new RegExp('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,3}$');
				const reg = emailPattern.test(payload.message);
				switch (reg) {
					case true:
						this.user.OTP = this.user.OTP !== '0' ? this.user.OTP : generateOTP(5);
						this.user.OTP_COUNTER = 3;
						this.user.email = {
							id: payload.message,
							verified: false
						};
						await sendMail(
							[
								payload.message
							],
							`Kkiokio Email Verificatinon Code ${this.user.OTP}`,
							{
								type: 'html',
								value: `<p>Hi,</p><p>Your requested verification code is <b>${this.user.OTP}</b></p>`
							}
						)
							.then(() => {
								console.log(this.user.OTP);
								this.changeSubState('codeSent');
								reply = `Please check your email for the verification code and  enter the code here.`;
							})
							.catch(exception => {
								console.error('ERROR: ', exception);
								reply = `Somethig went wrong, Please try again.`;
							});
						break;
					case false:
						this.changeSubState('');
						reply = 'The email you are using is not verified.\nunless verified we would not be able to send you an invoice for your purchase.';
						break;
					default:
						reply = 'Invaid reply\nPlease try again';
				};
			},
			verifyEmail: async function (payload) {
				if (this.user.OTP === payload.message) {
					this.changeState('COMPLETED');
					this.user.email.verified = true;
					await sendMail(
						[
							this.user.email.id
						],
						`Welcome to Kkiokio`,
						{
							type: 'html',
							value: `<p>Hi,</p><p>Yor profile is now registered <b>Hurray!!</b></p>`
						}
					)
						.then(() => {
							reply = "*Congralutations!!*\n your profile has now been registered."
						})
						.catch(exception => {
							console.error('ERROR: ', exception);
						});
				} else {
					//  if OTP does not match decrese attempts and after 3 attempts reset counter.
					if (this.user.OTP_COUNTER === 0) {
						this.user.OTP = '0';
						this.user.OTP_COUNTER = 3;
						reply = `Invalid code\n\nYou have exhausted your maximum number of tries.\n please try again from the begining.`;
					} else {
						this.user.OTP_COUNTER -= 1;
						reply = `Invalid code\n\nPlease try again.\nRetry left: ${this.user.OTP_COUNTER} `;
					}
				}
			},
		},
		PAYMENT_MODE: {
			sendCode: async function (payload) {
				const emailPattern = new RegExp('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,3}$');
				const reg = emailPattern.test(payload.message);
				switch (reg) {
					case true:
						this.user.OTP = this.user.OTP !== '0' ? this.user.OTP : generateOTP(5);
						this.user.OTP_COUNTER = 3;
						this.user.email = {
							id: payload.message,
							verified: false
						};
						await sendMail(
							[
								payload.message
							],
							`Kkiokio Email Verificatinon Code ${this.user.OTP}`,
							{
								type: 'html',
								value: `<p>Hi,</p><p>Your requested verification code is <b>${this.user.OTP}</b></p>`
							}
						)
							.then(() => {
								console.log(this.user.OTP);
								this.changeSubState('codeSent');
								reply = `Please check your email for the verification code and  enter the code here.`;
							})
							.catch(exception => {
								console.error('ERROR: ', exception);
								reply = `Somethig went wrong, Please try again.`;
							});
						break;
					case false:
						this.changeSubState('');
						reply = 'The email you are using is not verified.\nunless verified we would not be able to send you an invoice for your purchase.';
						break;
					default:
						reply = 'Invaid reply\nPlease try again';
				};
			},
			verifyEmail: async function (payload) {
				if (this.user.OTP === payload.message) {
					this.changeState('COMPLETED');
					this.user.email.verified = true;
					await sendMail(
						[
							this.user.email.id
						],
						`Welcome to Kkiokio`,
						{
							type: 'html',
							value: `<p>Hi,</p><p>Yor profile is now registered <b>Hurray!!</b></p>`
						}
					)
						.then(() => {
							reply = "*Congralutations!!*\n your profile has now been registered."
						})
						.catch(exception => {
							console.error('ERROR: ', exception);
						});
				} else {
					//  if OTP does not match decrese attempts and after 3 attempts reset counter.
					if (this.user.OTP_COUNTER === 0) {
						this.user.OTP = '0';
						this.user.OTP_COUNTER = 3;
						reply = `Invalid code\n\nYou have exhausted your maximum number of tries.\n please try again from the begining.`;
					} else {
						this.user.OTP_COUNTER -= 1;
						reply = `Invalid code\n\nPlease try again.\nRetry left: ${this.user.OTP_COUNTER} `;
					}
				}
			},
		},
		COMPLETED: {
			registered: async function (payload) {
				reply = 'userRegistered';
			}
		}
	},
	async dispatch(actionName, ...payload) {
		const actions = this.transitions[this.state.type];
		const action = actions[actionName];

		if (action) {
			await action.apply(machine, ...payload)
		} else {
			// do nothing
		}
	},
	changeState(newState) {
		if (this.transitions[newState]) {
			this.state.type = newState;
			this.changeSubState('');
		} else {
			// do nothing
		}
	},
	changeSubState(newSubState) {
		this.state.subType = newSubState;
	}
}

let whatsappBot = Object.create(machine, {
	name: {
		writable: false,
		enumerable: true,
		value: "completeProfile"
	}
});

async function getReply(payload) {
	reply = '';
	switch (whatsappBot.state.type) {
		case "INIT":
			switch (whatsappBot.state.subType) {
				case "":
					whatsappBot.dispatch('initialise', [payload]);
					break;
				default:
					reply = 'Please Try again';
					break;
			};
			break;
		case "REGISTER_DOB":
			switch (whatsappBot.state.subType) {
				case "":
					await whatsappBot.dispatch('sendOTP', [payload]);
					break;
				case "OTPSent":
					whatsappBot.dispatch('verifyOTP', [payload]);
					// console.log(reply);
					break;
				default:
					reply = 'Please Try again';
					break;
			};
			break;
		case "REGISTER_NAME":
			switch (whatsappBot.state.subType) {
				case "":
					whatsappBot.dispatch('verifyName', [payload]);
					break;
				default:
					reply = 'Please Try again';
					break;
			};
			break;
		case "REGISTER_EMAIL":
			switch (whatsappBot.state.subType) {
				case "":
					await whatsappBot.dispatch('sendCode', [payload]);
					break;
				case "codeSent":
					await whatsappBot.dispatch('verifyEmail', [payload]);
					break;
				default:
					reply = 'Please Try again';
					break;
			};
			break;
		case "COMPLETED":
		case "":
			await whatsappBot.dispatch('addDetails', [payload]);
			break;
		default:
			reply = 'Invalid Request'
	};
	return reply;
};

module.exports = getReply;