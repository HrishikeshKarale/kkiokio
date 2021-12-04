/* eslint-disable @typescript-eslint/no-var-requires */
//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const contactSchema = new Schema({
	name: {
		type: String,
		unique: false,
		required: false,
		trim: true
	},
	email: {
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
	phoneNumber: {
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
	preffered: {
		type: String,
		enum: ["EMAIL", "PHONE"],
		default: "EMAIL"
	},
	createdOn: {
		type: Date,
		default: Date.now
	}
});

// Compile model from schema
const contactModel = mongoose.model('contactDocument', contactSchema);

module.exports = contactModel;