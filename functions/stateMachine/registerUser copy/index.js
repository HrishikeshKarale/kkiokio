/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const PROFILE = process.env.MONGO_DB_PROFILE;
const sendSMS = require('../../js/sendSMS/index');
const sendMail = require('../../js/sendMail/index');
const generateOTP = require('../../js/generateOTP/index');
const { saveQuery } = require("../../database/query/index");

let reply;
const sendTo = process.env.SENDER_EMAIL;

const machine = {
	state: {
		type: 'INIT',
		subType: ''
	},
	user: {
		OTP: false,
		OTP_COUNTER: 3,
		name: "",
		phone: {
			number: null,
			verified: false
		},
		email: {
			id: null,
			verified: false
		}
	},
	transitions: {
		INIT: {
			initialise: function (payload) {
				reply = `Dear user, \nThe number *${payload.from.slice(-10)}* is not a registered number.\n\nWould you like to register with us using this number ?\n1. Yes, Register with *${payload.from.slice(-10)}*\n2. NO`;
				this.changeState('VERIFY_PHONE');
			},
			// add: function (register) {
			// 	// do something
			// }
		},
		VERIFY_PHONE: {
			sendOTP: async function (payload) {
				const reg = payload.message.toUpperCase();
				switch (reg) {
					case "1":
					case "Y":
					case "YES":
					case "REGISTER":
						this.user.OTP = this.user.OTP ? this.user.OTP : generateOTP(5);
						// console.log(this.user.OTP);
						this.user.OTP_COUNTER = 3;
						await sendSMS(payload.from.slice(-10), `Kkiokio\nOTP Code:${this.user.OTP}`)
							.then(() => {
								this.changeSubState('OTPSent');
								// console.log(message);
								this.user.phone.number = payload.from.slice(-10),
									reply = `Please enter the OTP sent to your phone number (${payload.from}).`;
								return;
							})
							.catch((exception) => {
								console.error(`Exception thrown by Twilio in sending OTP: ${exception}`);
							});
						break;
					case "2":
					case "N":
					case "NO":
						this.changeSubState('');
						reply = 'The number you are using is not verified, please contact us using a verified phone number';
						break;
					default:
						reply = 'Invaid reply\nPlease try again';
				}
			},
			verifyOTP: function (payload) {
				if (this.user.OTP === payload.message) {
					this.changeState('REGISTER_NAME');
					reply = `Your phone number *${this.user.phone.number}* has been *VERIFIED*.\n\nTo move forward with the registration, please enter your full name (Ex: John doe)`;
					this.user.phone.verified = true;
					this.user.OTP = false;
				} else {
					//  if OTP does not match decrese attempts and after 3 attempts reset counter.
					if (this.user.OTP_COUNTER === 0) {
						this.user.OTP = false;
						this.user.OTP_COUNTER = 3;
						reply = `Invalid OTP\n\nYou have exhausted your maximum number of tries.\n please try again from the begining.`;
					} else {
						this.user.OTP_COUNTER -= 1;
						reply = `Invalid OTP\n\nPlease try again.\nRetry left: ${this.user.OTP_COUNTER}`;
					}
				}
			},
		},
		REGISTER_NAME: {
			verifyName: function (payload) {
				const [firstName] = payload.message.split(' ');
				// console.log(firstName, lastName);
				this.user.name = payload.message;
				reply = `Hi *${firstName}*,\nPlease enter a valid email ID for registration (Ex: John.doe@gmail.com).`;
				this.changeState('REGISTER_EMAIL');
			}
		},
		REGISTER_EMAIL: {
			sendCode: async function (payload) {
				const emailPattern = new RegExp('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,3}$');
				const reg = emailPattern.test(payload.message);
				switch (reg) {
					case true:
						this.user.OTP = this.user.OTP ? this.user.OTP : generateOTP(5);
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
								value: `<p>Dear Customer,</p><p>Welcome, we than you for registering at Kkiokio on our portfolio website</p><br /><p>Your registered mobile number is: <b>${this.user.phone.number}</b><p>Your email id verification code is: <b>${this.user.OTP}</b></p><br /><br /><h5>*************Information*************</h5><p>For any Queries or information regarding your interaction/transaction with Kkiokio, do not provide your credit/debit card details by any means to Kkiokio. All your queries can be replied on the basis of 10 digit Kkiokio transaction id/user id. Kkiokio does not store the credit/debit card information inany form during the transaction.</p><h5>*************************************</h5><br /><br /><br /><br /><p>Warm Regards,<br />Customer Care Team,<br />Kkiokio</p>`
							}
						)
							.then(() => {
								// console.log(this.user.OTP, response);
								this.changeSubState('codeSent');
								reply = `Please check your email for the verification code and  enter the code here.`;
								return;
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
				}
			},
			verifyEmail: async function (payload) {
				if (this.user.OTP === payload.message) {
					this.changeState('COMPLETED');
					this.user.email.verified = true;
					const DATA = {
						database: PROFILE,
						collection: "customer",
						name: this.user.name,
						email: {
							value: this.user.email.id,
							isVerified: this.user.email.verified
						},
						phoneNumber: {
							value: this.user.phone.number,
							isVerified: this.user.phone.verified
						}
					}

					// send email about email confirmation
					await sendMail(
						[
							this.user.email.id
						],
						`Welcome to Kkiokio`,
						{
							type: 'html',
							value: `<p>Hi,</p><p>Your emil has been verified</p>`
						}
					)
						// save profile in db
						.then(async () => {

							// save
							return await saveQuery(DATA);
							// this.changeState('COMPLETED');
						})
						// send email for registration
						.then(async () => {
							reply = 'User Registered';
							return await sendMail(
								[
									sendTo
								],
								"Registered with Mr. Chemist",
								{
									type: 'html',
									value: `<p>Hi,<p>You are now registered with Mr. Chemist.</p><p>*name:* ${DATA.name}</p><p>*Phone:* ${DATA.phone}</p>*Email ID*: ${DATA.email}<p></p>`
								},
								[
									DATA.email
								]
							);
						})
						// send reply to user about successful registration
						.then(() => {
							reply += ` and confirmation mail sent to ${this.user.email.id}`;
							// return res.status(200).send("email sent");
							return;
						})
						.catch(error => {
							console.error('CATCH SAVE ERROR: ', error);
							// return res.status(400).send({
							// 	status: false,
							// 	message: "User registeration failed, please try again.",
							// 	error: error
							// });
						});
				} else {
					//  if OTP does not match decrese attempts and after 3 attempts reset counter.
					if (this.user.OTP_COUNTER === 0) {
						this.user.OTP = false;
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
			registered: async function () {
				reply = "You are already registered";
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

const whatsappBot = Object.create(machine, {
	name: {
		writable: false,
		enumerable: true,
		value: "registerUser"
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
			}
			break;
		case "VERIFY_PHONE":
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
			}
			break;
		case "REGISTER_NAME":
			switch (whatsappBot.state.subType) {
				case "":
					whatsappBot.dispatch('verifyName', [payload]);
					break;
				default:
					reply = 'Please Try again';
					break;
			}
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
			}
			break;
		case "COMPLETED":
		case "":
			await whatsappBot.dispatch('registered', [payload]);
			break;
		default:
			reply = 'Invalid Request'
	}
	return reply;
}

module.exports = getReply;