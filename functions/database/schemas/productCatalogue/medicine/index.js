/* eslint-disable @typescript-eslint/no-var-requires */
//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const medicineSchema = new Schema({
	medicineName: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},
	isPrescription: {
		type: Boolean,
		required: false,
		unique: false,
		default: false
	},
	typeOfSell: {
		type: String,
		required: false,
		unique: false,
		trim: true
	},
	manufacturer: {
		type: String,
		required: true,
		unique: false,
		trim: true
	},
	salt: {
		type: String,
		required: false,
		unique: false,
		trim: true
	},
	MRP: {
		type: Number,
		required: false,
		unique: false,
		default: 0
	},
	uses: {
		type: [String],
		required: false,
		unique: false,
		default: []
	},
	alternateMedicines: {
		type: [String],
		required: false,
		unique: false,
		default: []
	},
	sideEffects: {
		type: [String],
		required: false,
		unique: false,
		default: []
	},
	howToUse: {
		type: [String],
		required: false,
		unique: false,
		default: []
	},
	chemicalClass: {
		type: String,
		required: false,
		unique: false,
		trim: true
	},
	isHabitForming: {
		type: Boolean,
		required: false,
		unique: false,
		default: false
	},
	therapeuticClass: {
		type: String,
		required: false,
		unique: false,
		trim: true
	},
	actionClass: {
		type: String,
		required: false,
		unique: false,
		trim: true
	}
});

// virtual
medicineSchema.virtual("Price").get(function () {
	// return days
	return `₹ ${this.MRP}/-`;
});

module.exports = medicineSchema;