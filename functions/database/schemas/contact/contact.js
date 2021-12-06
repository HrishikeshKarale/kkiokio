/* eslint-disable @typescript-eslint/no-var-requires */
//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const contactSchema = new Schema({
	name: {
		type: String,
		unique: false,
		required: true,
		trim: true
	},
	email: {
		type: String,
		unique: false,
		required: true,
		validate: {
			validator: function (v) {
				return /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(v);
			},
			message: '{VALUE} is not a valid email ID!'
		}
	},
	phoneNumber: {
		type: Number,
		unique: false,
		required: true,
		validate: {
			validator: function (v) {
				return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(v);
			},
			message: '{VALUE} is not a valid 10 digit number!'
		}
	},
	message: {
		type: String,
		unique: false,
		required: true
	},
	preffered: {
		type: String,
		required: false,
		enum: ["EMAIL", "PHONE"],
		default: "EMAIL"
	},
	createdOn: {
		type: Date,
		default: Date.now
	}
});

// Compile model from schema
const contactModel = mongoose.model('contactform', contactSchema);

module.exports = contactModel;