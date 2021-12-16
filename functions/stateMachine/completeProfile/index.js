/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const CUSTOMER = process.env.MONGO_DB_CUSTOMER;
const PROFILE = process.env.MONGO_DB_PROFILE;
const zipCode = require('../../js/zipCode/index');
const isValidDate = require('../../js/validate/date');
// query
const { findQuery } = require("../../database/query/index");

let reply;

const machine = {
	state: {
		type: 'INIT',
		subType: ''
	},
	profile: {
		DOB: '',
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
			initialise: function () {
				reply = `Looks like you are registered with us.\n\nNow, let's work towards setting up your profile for success.\n\nPlease enter your *Date of birth* (DOB) in a 2 digit *DD MM YYYY* or *DD MM YY* format. (Ex: *26 01 90* for January 26, 1990)`;
				this.changeState('REGISTER_DOB');
			},
		},
		REGISTER_DOB: {
			validateDOB: async function (payload) {
				let delimiter = ' ';
				// date, month, year;

				if (payload.message.includes('/')) {
					delimiter = '/'
				} else if (payload.message.includes('.')) {
					delimiter = '.'
				} else if (payload.message.includes('-')) {
					delimiter = '-'
				}
				[date, month, year] = payload.message.split(delimiter);
				const DOB = month + "/" + date + "/" + year;
				const reg = isValidDate(DOB);

				// const reg = datePattern.test(DOB);
				switch (reg) {
					case true:
						this.changeState('REGISTER_GENDER');
						this.profile.DOB = new Date(year, month - 1, date);
						reply = `*DOB ${payload.message} added successfully*\n\nPlease select your Gender\n1. *M*ale\n2. *F*emale`;
						break;
					case false:
						this.changeSubState('');
						reply = '*Wrong Format*\nPlease try again';
						break;
					default:
						reply = 'Invaid reply\nPlease try again';
				}
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
						this.profile.gender = "male";
						exists = true;
						break;
					case "2":
					case "F":
					case "FEMALE":
					case GENDER.includes("FEMALE"):
						this.profile.gender = "female";
						exists = true;
						break;
					default:
						reply = 'Invaid reply\nPlease try again';
				}
				if (exists) {
					this.changeState('REGISTER_ADDRESS');
					reply = `You have successfully registered as a *${this.profile.gender}.*,\n\n Lets move ahead to Entering your address.\nPlease select your type of residence.\n1. House\n2. Apartment.`;
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
						this.profile.address.type = "house";
						exists = true;
						break;
					case "2":
					case "A":
					case "APARTMENT":
					case RESIDENCE.includes("APARTMENT"):
						this.profile.address.type = "apartment";
						exists = true;
						break;
					default:
						reply = 'Invaid reply\nPlease try again';
				}
				if (exists) {
					this.changeSubState('residenceTypeVerified');
					reply = `what is your *${this.profile.address.type}* number?`;
				}
			},
			residenceNumber: function (payload) {
				this.profile.address.houseOrAptNumber = payload.message;
				this.changeSubState('residenceNumberAdded');
				reply = `Please enter closest landmark.`;
			},
			residenceLandmark: function (payload) {
				this.profile.address.landmark = payload.message;
				this.changeSubState('landmarkAdded');
				reply = `Please enter Your address(Line1/2)`;
			},
			residenceAddress1: function (payload) {
				this.profile.address.address1 = payload.message;
				this.changeSubState('addressLine1Added');
				reply = `Please enter Your address(Line2/2)`;
			},
			residenceAddress2: function (payload) {
				this.profile.address.address2 = payload.message;
				this.changeSubState('addressLine2Added');
				reply = `Please enter Your pin Code`;
			},
			zipCode: async function (payload) {
				let exists = true;
				await zipCode("search", payload.message)
					.then(async (response) => {
						const ZIPCODE = payload.message;
						const POSSIBLECITIES = [...new Set(response.data.results[ZIPCODE].map(element => element.city))];
						this.profile.address.zipCode.cities = POSSIBLECITIES;

						const CITYCOUNTER = POSSIBLECITIES.length;
						// multiple cities have same zip code
						if (CITYCOUNTER > 1) {
							this.changeSubState('selectCity');
							let COUNTER = 1;
							reply = `The selected pin code is *${ZIPCODE}*.\n\nPlease select one of the following cities/nearest post office:`;
							POSSIBLECITIES.forEach(possible => {
								reply += '\n' + COUNTER++ + ' ' + possible;
							});
						} else if (CITYCOUNTER === 1) {
							// only one city have same zip code
							// address task completed
							this.profile.address.city = POSSIBLECITIES.pop();

							reply = `The pin code is associated with the following info.\n\npin code: ${ZIPCODE} \ncity/nearest post office: ${response.data.results[ZIPCODE][0].city} \nprovince: ${response.data.results[ZIPCODE][0].province} \nstate: ${response.data.results[ZIPCODE][0].state}.\n\n`

							reply += await this.updateUserProfile(payload.from.slice(-10));
						} else {
							// zip not found
							exists = false;
							reply = "Incorrect zip code. Please try again."
						}

						if (exists) {
							this.profile.address.zipCode.value = ZIPCODE;
							this.profile.address.province = response.data.results[ZIPCODE][0].province;
							this.profile.address.state = response.data.results[ZIPCODE][0].state;
						}

						return {
							status: true,
							result: {
								zipCode: ZIPCODE,
								city: this.profile.address.city,
								province: this.profile.address.procvince,
								state: this.profile.address.state
							}
						}
					})
					.catch(error => {
						reply = "Something went wrong, please try gain."
						console.error("ERROR: ", error);
					});
			},
			cityPicker: async function (payload) {
				const CITY = payload.message.toUpperCase();
				const CITIES = this.profile.address.zipCode.cities;
				let exists = false;
				for (let i = 1; i <= CITIES.length; i += 1) {
					if (Number(CITY) === i) {
						exists = true;
						this.profile.address.city = CITIES[i - 1];
						reply = `You have selected *${CITIES[i - 1]}* as your city/nearest post office.\n\n`
					}
				}
				if (!exists) {
					reply = "Incorrect input. Please try again."
				} else {
					reply += await this.updateUserProfile(payload.from.slice(-10));
				}
			}
		},
		COMPLETED: {
			registered: async function () {
				reply = 'Profile Completed';
			}
		}
	},
	async updateUserProfile(phoneNumber) {
		await findQuery({
			type: "findOneAndUpdate",
			database: PROFILE,
			collection: CUSTOMER,
			query: {
				"phoneNumber.value": phoneNumber
			},
			update: {
				DOB: this.profile.DOB,
				gender: this.profile.gender,
				address: {
					type: this.profile.address.type,
					houseOrAptNumber: this.profile.address.houseOrAptNumber,
					landmark: this.profile.address.landmark,
					address1: this.profile.address.address1,
					address2: this.profile.address.address2,
					zipCode: this.profile.address.zipCode.value,
					city: this.profile.address.city,
					province: this.profile.address.province,
					state: this.profile.address.state,
					country: this.profile.address.country
				}
			}
		})
			.then(async () => {
				this.changeState('COMPLETE');
				return `Your ${this.profile.address.type} address has been registered as:\nhouse type: ${this.profile.address.houseOrAptNumber}\n${this.profile.address.address1}\n${this.profile.address.address2}\n${this.profile.address.city} - ${this.profile.address.zipCode}\n${this.profile.address.state}\n${this.profile.address.country}.\n\nnearest Landmark: ${this.profile.address.landmark}\nnearest post office: ${this.profile.address.province}\n\nYour Profile has been updated!`;
				// return res.status(200).send("email sent");
			})
			.catch(error => {
				console.error('CATCH SAVE ERROR: ', error);
				// return res.status(400).send({
				// 	status: false,
				// 	message: "User registeration failed, please try again.",
				// 	error: error
				// });
			});
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
			}
			break;
		case "REGISTER_DOB":
			switch (whatsappBot.state.subType) {
				case "":
					await whatsappBot.dispatch('validateDOB', [payload]);
					break;
				default:
					reply = 'Please Try again';
					break;
			}
			break;
		case "REGISTER_GENDER":
			switch (whatsappBot.state.subType) {
				case "":
					whatsappBot.dispatch('validateGender', [payload]);
					break;
				default:
					reply = 'Please Try again';
					break;
			}
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
			}
			break;
		case "COMPLETED":
		case "":
			await whatsappBot.dispatch('addDetails', [payload]);
			break;
		default:
			reply = 'Invalid Request'
	}
	return reply;
}

module.exports = getReply;