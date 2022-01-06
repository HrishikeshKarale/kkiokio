/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const PROFILE = process.env.MONGO_DB_PROFILE;
const CUSTOMER = process.env.MONGO_DB_CUSTOMER;
//Require Mongoose
const mongoose = require('mongoose');
let conn = mongoose.connection;
conn = conn.useDb(PROFILE);

const customerSchema = require("../../profile/customer/index");
// const { selectModel } = require("../../../query/index");
// const customerModel = selectModel(PROFILE, CUSTOMER, false);

//Define a schema
const Schema = mongoose.Schema;

const authSchema = new Schema({
	_userID: {
		type: Schema.Types.ObjectId,
		// ref: customerModel,
		ref: conn.model(CUSTOMER, customerSchema, CUSTOMER),
		unique: false,
		required: true,
		trim: true
	},
	name: {
		type: String,
		unique: false,
		required: true,
		trim: true
	},
	log: [{
		token: {
			type: String,
			unique: true,
			required: false,
			trim: true
		},
		otp: {
			value: {
				type: Number,
				required: false,
				trim: true
			},
			verified: {
				type: Boolean,
				default: false
			}
		},
		source: {
			type: String,
			required: false,
			enum: ["PHONE", "CREDENTIALS"],
			default: "PHONE"
		},
		createdOn: {
			type: Date,
			default: Date.now
		}
	}],
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
	image: String,
	isAdmin: {
		type: Boolean,
		default: false
	}
});

module.exports = authSchema;