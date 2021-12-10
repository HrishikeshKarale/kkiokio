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
				return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+/.test(v);
			},
			message: '{VALUE} is not a valid email ID!'
		}
	},
	phoneNumber: {
		type: String,
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
	source: {
		type: String,
		required: false,
		enum: ["ePHARMACY", "KKIOKIO"],
		default: "ePHARMACY"
	},
	createdOn: {
		type: Date,
		default: Date.now
	}
});

// Compile model from schema
const contactModel = mongoose.model('connectRequest', contactSchema);

module.exports = contactModel;