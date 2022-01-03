/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const MEDICINE = process.env.MONGO_DB_MEDICINE;
const PRODUCT = process.env.MONGO_DB_PRODUCT;
//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const customerSchema = new Schema({
	name: {
		type: String,
		unique: false,
		required: false,
		trim: true
	},
	email: [
		{
			value: {
				type: String,
				unique: true,
				required: false,
				validate: {
					validator: function (v) {
						return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+/.test(v);
					},
					message: '{VALUE} is not a valid email ID!'
				}
			},
			createdOn: {
				type: Date,
				default: Date.now
			},
			isVerified: {
				type: Boolean,
				default: false
			}
		}
	],
	username: {
		type: String,
		unique: true,
		required: false,
		trim: true,
		validate: {
			validator: function (v) {
				return /^(?=.{8,20}$)(?![_.0-9])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(v);
			},
			message: '{VALUE} is not a valid password!'
		}
	},
	phoneNumber: {
		createdOn: {
			type: Date,
			default: Date.now
		},
		value: {
			type: String,
			unique: true,
			required: true,
			validate: {
				validator: function (v) {
					return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(v);
				},
				message: '{VALUE} is not a valid 10 digit number!'
			}
		},
		isVerified: {
			type: Boolean,
			default: false
		}
	},
	image: String,
	password: [
		{
			createdOn: {
				type: Date,
				default: Date.now
			},
			value: {
				type: String,
				trim: true,
				maxLength: [20, ' password too long'],
				minLength: [8, ' password too short'],
				validate: {
					validator: function (v) {
						return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/.test(v);
					},
					message: '{VALUE} is not a valid password!'
				}
			},
			isActive: {
				type: Boolean,
				default: false
			}
		}
	],
	isAdmin: {
		type: Boolean,
		default: false
	},
	DOB: {
		type: Date,
		required: false
	},
	gender: {
		type: String,
		required: false,
		enum: ["MALE", "FEMALE"],
	},
	address: {
		type: {
			type: String,
			required: false,
			enum: ["HOUSE", "APARTMENT"],
		},
		houseOrAptNumber: {
			type: String,
			unique: false,
			required: false,
			trim: true
		},
		landmark: {
			type: String,
			unique: false,
			required: false,
			trim: true
		},
		address1: {
			type: String,
			unique: false,
			required: false,
			trim: true
		},
		address2: {
			type: String,
			unique: false,
			required: false,
			trim: true
		},
		zipCode: {
			type: String,
			unique: false,
			required: false,
			trim: true
		},
		city: {
			type: String,
			unique: false,
			required: false,
			trim: true
		},
		province: {
			type: String,
			unique: false,
			required: false,
			trim: true
		},
		state: {
			type: String,
			unique: false,
			required: false,
			trim: true
		},
		country: {
			type: String,
			unique: false,
			required: false,
			trim: true,
			default: 'India'
		}
	},
	cart: [
		{
			_Pid: {
				type: Schema.Types.ObjectId,
				ref: PRODUCT
			},
			_Mid: {
				type: Schema.Types.ObjectId,
				ref: MEDICINE
			},
			name: {
				type: String,
				required: true,
				unique: true,
				trim: true
			},
			typeOfSell: {
				type: String,
				required: false,
				unique: false,
				trim: true
			},
			category: {
				type: [String],
				required: false,
				unique: false,
				default: []
			},
			manufacturer: {
				type: String,
				required: true,
				unique: false,
				trim: true
			},
			MRP: {
				type: Number,
				required: false,
				unique: false,
				default: 0
			},
			quantity: {
				type: Number,
				required: false,
				unique: false,
				default: 0
			},
			createdOn: {
				type: Date,
				default: Date.now
			}
		}
	],
});

// virtual
customerSchema.virtual('age').get(function () {
	const time = Math.abs(new Date() - this.DOB);
	// return days
	return Math.ceil(time / (1000 * 60 * 60 * 24));
});

customerSchema.virtual('firstName').get(function () {
	let firstName = this.name;
	if (firstName.includes(' ')) {
		firstName = firstName.split(' ')[0];
	}
	return firstName;
});

customerSchema.virtual('lastName').get(function () {
	let lastName = this.name;
	if (lastName.includes(' ')) {
		lastName = lastName.split(' ')[1];
	}
	return lastName;
});

module.exports = customerSchema;