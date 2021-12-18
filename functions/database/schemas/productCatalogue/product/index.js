/* eslint-disable @typescript-eslint/no-var-requires */
//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const productSchema = new Schema({
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
	}
});

// virtual
productSchema.virtual("Price").get(function () {
	// return days
	return `₹ ${this.MRP}/-`;
});

module.exports = productSchema;