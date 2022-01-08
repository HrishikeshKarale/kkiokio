/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const MEDICINE = process.env.MONGO_DB_MEDICINE;
const PRODUCT = process.env.MONGO_DB_PRODUCT;
const PRODUCT_CATALOGUE = process.env.MONGO_DB_PRODUCT_CATALOGUE;
//Require Mongoose
// const PRODUCT_CATALOGUE = process.env.MONGO_DB_PRODUCT_CATALOGUE;
const productSchema = require("../../productCatalogue/product/index");
const medicineSchema = require("../../productCatalogue/medicine/index");

const mongoose = require('mongoose');
let conn = mongoose.connection;
conn = conn.useDb(PRODUCT_CATALOGUE);


// const { selectModel } = require("../../../query/index");
// const medicineModel = selectModel(PRODUCT_CATALOGUE, MEDICINE, false);
// const productModel = selectModel(PRODUCT_CATALOGUE, PRODUCT, false);

//Define a schema
const Schema = mongoose.Schema;

const cartSchema = new mongoose.Schema(
	{
		_Pid: {
			type: Schema.Types.ObjectId,
			// ref: productModel,
			ref: conn.model(PRODUCT, productSchema, PRODUCT)
		},
		_Mid: {
			type: Schema.Types.ObjectId,
			// ref: medicineModel,
			ref: conn.model(MEDICINE, medicineSchema, MEDICINE)
		},
		name: {
			type: String,
			trim: true
		},
		typeOfSell: {
			type: String,
			trim: true
		},
		category: {
			type: [String],
			default: []
		},
		manufacturer: {
			type: String,
			trim: true
		},
		MRP: {
			type: Number,
		},
		quantity: {
			type: Number,
		},
		createdOn: {
			type: Date,
			default: Date.now
		}
	},
	{ _id: false, _Pid: false, _Mid: false });

const addressSchema = new mongoose.Schema(
	{
		type: {
			type: String,
			enum: ["HOUSE", "APARTMENT"],
		},
		houseOrAptNumber: {
			type: String,
			trim: true
		},
		landmark: {
			type: String,
			trim: true
		},
		address1: {
			type: String,
			trim: true
		},
		address2: {
			type: String,
			trim: true
		},
		zipCode: {
			type: String,
			trim: true
		},
		city: {
			type: String,
			trim: true
		},
		province: {
			type: String,
			trim: true
		},
		state: {
			type: String,
			trim: true
		},
		country: {
			type: String,
			trim: true,
			default: 'India'
		}
	},
	{ _id: false });

const customerSchema = new Schema({
	name: {
		type: String,
		trim: true
	},
	email: [
		{
			value: {
				type: String,
				unique: true,
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
			},
			isPrimary: {
				type: Boolean,
				default: false
			}
		}
	],
	username: {
		type: String,
		unique: true,
		trim: true,
		validate: {
			validator: function (v) {
				return /^(?=.{8,20}$)(?![_.0-9])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(v);
			},
			message: '{VALUE} is not a valid username!'
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
	},
	gender: {
		type: String,
		enum: ["MALE", "FEMALE"],
	},
	address: {
		type: addressSchema,
	},
	cart: {
		type: [cartSchema]
	},
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