/* eslint-disable @typescript-eslint/no-var-requires */
//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
						return /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,3}$/.test(v);
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
	phoneNumber: [
		{
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
						return /d{10}/.test(v);
					},
					message: '{VALUE} is not a valid 10 digit number!'
				}
			},
			isVerified: {
				type: Boolean,
				default: false
			}
		}
	],
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
	}
});

// virtual
userSchema.virtual('age').get(function () {
	const time = Math.abs(new Date() - this.DOB);
	// return days
	return Math.ceil(time / (1000 * 60 * 60 * 24));
});

userSchema.virtual('firstName').get(function () {
	let firstName = this.name;
	if (firstName.includes(' ')) {
		firstName = firstName.split(' ')[0];
	}
	return firstName;
});

userSchema.virtual('lastName').get(function () {
	let lastName = this.name;
	if (lastName.includes(' ')) {
		lastName = lastName.split(' ')[1];
	}
	return lastName;
});

// Compile model from schema
const userModel = mongoose.model('userDetails', userSchema);

module.exports = userModel;