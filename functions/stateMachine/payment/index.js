/* eslint-disable @typescript-eslint/no-var-requires */
// const sendSMS = require('../../js/sendSMS/index');
const zipCode = require('../../js/zipCode/index');

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
			zipCode: {
				value: '',
				cities: []
			},
			city: '',
			province: '',
			state: '',
			country: 'India'
		},
		paymentMode: ''
	},
	transitions: {
		INIT: {
			initialise: function (payload) {
				reply = `Thank you for registering with us.\nNow, let's work towards setting up your profile for success.\n\nPlease enter your Date of birth (DOB) in a 2 digit DD MM YYYY or DD MM YY  format. (Ex: 26 01 90 for January 26, 1990)`;
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
						state.profile.DOB = new Date(year, (+month) - 1, date);
						reply = `*DOB ${payload.message} added successfully*\n\nPlease select your Gender\n1. *M*ale\n2. *F*emale`;
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
			validateGender: function (payload) {
				const GENDER = payload.message.toUpperCase();
				let exists = false;
				switch (GENDER) {
					case "1":
					case "M":
					case "MALE":
					case GENDER.includes("MALE"):
						state.profile.gender = "male";
						exists = true;
						break;
					case "2":
					case "F":
					case "FEMALE":
					case GENDER.includes("FEMALE"):
						state.profile.gender = "female";
						exists = true;
						break;
					default:
						reply = 'Invaid reply\nPlease try again';
				}
				if (exists) {
					this.changeState('REGISTER_ADDRESS');
					reply = `You have successfully registered as a *${state, profile.gender}.*,\n\n Lets move ahead to Entering your address.\nPlease select your type of residence.\n1. House\n2. Apartment.`;
				}
			}
		},
		REGISTER_ADDRESS: {
			residenceType: function (payload) {
				const RESIDENCE = payload.message.toUpperCase();
				let exists = false;
				switch (RESIDENCE) {
					case "1":
					case "H":
					case "HOUSE":
					case RESIDENCE.includes("HOUSE"):
						state.profile.address.type = "house";
						exists = true;
						break;
					case "2":
					case "A":
					case "APARTMENT":
					case RESIDENCE.includes("APARTMENT"):
						state.profile.address.type = "apartment";
						exists = true;
						break;
					default:
						reply = 'Invaid reply\nPlease try again';
				}
				if (exists) {
					this.changeSubState('residenceTypeVerified');
					reply = `what is your *${state.profile.address.type}* number?`;
				}
			},
			residenceNumber: function (payload) {
				state.profile.address.houseOrAptNumber = payload.message;
				this.changeSubState('residenceNumberAdded');
				reply = `Please enter closest landmark.`;
			},
			residenceLandmark: function (payload) {
				state.profile.address.landmark = payload.message;
				this.changeSubState('landmarkAdded');
				reply = `Please enter Your address(Line1/2)`;
			},
			residenceAddress1: function (payload) {
				state.profile.address.address1 = payload.message;
				this.changeSubState('addressLine1Added');
				reply = `Please enter Your address(Line2/2)`;
			},
			residenceAddress2: function (payload) {
				state.profile.address.address2 = payload.message;
				this.changeSubState('addressLine2Added');
				reply = `Please enter Your address(Line1/2)`;
			},
			zipCode: async function (payload) {
				let exists = true;
				await zipCode("search", payload.message)
					.then((response) => {
						const ZIPCODE = payload.message;
						const POSSIBLECITIES = [...new Set(response.data.results[ZIPCODE].map(element => element.city))];
						state.profile.address.zipCode.cities = POSSIBLECITIES;

						const CITYCOUNTER = POSSIBLECITIES.length;
						// multiple cities have same zip code
						if (CITYCOUNTER > 1) {
							this.changeSubState('selectCity');
							let COUNTER = 1;
							reply = `The selected pin code is *${ZIPCODE}*.\n\nPlease select one of the following cities:${COUNTER <= CITYCOUNTER ? '\n' + COUNTER + ' ' + POSSIBLECITIES[(COUNTER++) - 1] : ''} `;
						} else if (CITYCOUNTER === 1) {
							// only one city have same zip code
							// address task completed
							state.profile.address.city = POSSIBLECITIES.pop();
							this.changeState('COMPLETE');
							reply = `The pin code is associated with the following info.\n\npin code: ${ZIPCODE} \ncity: ${response.data.results[ZIPCODE][0].city} \nprovince: ${response.data.results[ZIPCODE][0].province} \nstate: ${response.data.results[ZIPCODE][0].state}.\n\nWould you like to set up a payment method?`
						} else {
							// zip not found
							exists = false;
							reply = "Incorrect zip code. Please try again."
						}

						if (exists) {
							state.profile.address.zipCode.value = ZIPCODE;
							state.profile.address.province = response.data.results[ZIPCODE][0].province;
							state.profile.address.state = response.data.results[ZIPCODE][0].state;
						}
					})
					.catch(error => {
						reply = "Something went wrong, please try gain."
						console.error("ERROR: ", error);
					});
			},
			cityPicker: function (payload) {
				const CITY = payload.message.toUpperCase();
				const CITIES = state.profile.address.zipCode.cities;
				let exists = false;
				for (let i = 1; i <= CITIES.length; i += 1) {
					if (CITY == i) {
						exists = true;
						state.profile.address.city = CITIES[i - 1];
						reply = `You have selected *${CITIES[i - 1]}* as your city.\n\nWould you like to set up a payment method?`;
						this.changeState('COMPLETE');
					}
				}
				if (!exists) {
					reply = "Incorrect input. Please try again."
				}
			}
		},
		// PAYMENT_MODE: {
		// 	setPayment: function (payload) {

		// 	}
		// },
		COMPLETED: {
			registered: async function () {
				reply = 'Profile Completed';
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
					await whatsappBot.dispatch('validateDOB', [payload]);
					break;
				default:
					reply = 'Please Try again';
					break;
			};
			break;
		case "REGISTER_GENDER":
			switch (whatsappBot.state.subType) {
				case "":
					whatsappBot.dispatch('validateGender', [payload]);
					break;
				default:
					reply = 'Please Try again';
					break;
			};
			break;
		case "REGISTER_ADDRESS":
			switch (whatsappBot.state.subType) {
				case "":
					await whatsappBot.dispatch('residenceType', [payload]);
					break;
				case "residenceTypeVerified":
					await whatsappBot.dispatch('residenceNumber', [payload]);
					break;
				case "residenceNumberAdded":
					await whatsappBot.dispatch('residenceLandmark', [payload]);
					break;
				case "landmarkAdded":
					await whatsappBot.dispatch('residenceAddress1', [payload]);
					break;
				case "addressLine1Added":
					await whatsappBot.dispatch('residenceAddress2', [payload]);
					break;
				case "addressLine2Added":
					await whatsappBot.dispatch('zipCode', [payload]);
					break;
				case "selectCity":
					await whatsappBot.dispatch('cityPicker', [payload]);
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