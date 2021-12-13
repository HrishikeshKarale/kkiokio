/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const mongoose = require("mongoose");
const PROFILE = process.env.MONGO_DB_PROFILE;
const CUSTOMER = process.env.MONGO_DB_CUSTOMER;
const CLIENT = process.env.MONGO_DB_CLIENT;
const PRODUCT_CATALOGUE = process.env.MONGO_DB_PRODUCT_CATALOGUE;
const MEDICINE = process.env.MONGO_DB_MEDICINE;
const PRODUCT = process.env.MONGO_DB_PRODUCT;
const OTHERS = process.env.MONGO_DB_OTHERS;
const CONTACT_REQ = process.env.MONGO_DB_CONTACT_REQ;

// schemas
const contactRequestSchema = require("../schemas/others/contactRequest/index");
const clientSchema = require("../schemas/profile/client/index");
const customerSchema = require("../schemas/profile/customer/index");
const productSchema = require("../schemas/productCatalogue/product/index");
const medicineSchema = require("../schemas/productCatalogue/medicine/index");

// import queryBuilder
const queryBuilder = require("../queryBuilder/index")

// SET MODEL
const selectModel = (database, collection, payload = false) => {
	let dataModel, model, conn = mongoose.connection;

	switch (database) {
		case PROFILE:
			conn = conn.useDb(PROFILE);
			switch (collection) {
				case CUSTOMER:
					model = conn.model(CUSTOMER, customerSchema, CUSTOMER);
					if (payload) {
						dataModel = new model(payload);
					} else {
						dataModel = model;
					}
					break;
				case CLIENT:
					model = conn.model(CLIENT, clientSchema, CLIENT);
					if (payload) {
						dataModel = new model(payload);
					} else {
						dataModel = model;
					}
					break;
			}
			break;

		case PRODUCT_CATALOGUE:
			conn = conn.useDb(PRODUCT_CATALOGUE);
			switch (collection) {
				case MEDICINE:
					model = conn.model(MEDICINE, medicineSchema, MEDICINE);
					if (payload) {
						dataModel = new model(payload);
					} else {
						dataModel = model;
					}
					break;
				case PRODUCT:
					model = conn.model(PRODUCT, productSchema, PRODUCT);
					if (payload) {
						dataModel = new model(payload);
					} else {
						dataModel = model;
					}
					break;
			}
			break;

		case OTHERS:
			conn = conn.useDb(OTHERS);
			switch (collection) {
				case CONTACT_REQ:
					model = conn.model(CONTACT_REQ, contactRequestSchema, CONTACT_REQ);
					if (payload) {
						dataModel = new model(payload);
					} else {
						dataModel = model;
					}
					break;
			}
			break;
	}

	return dataModel;
}

const saveQuery = function (payload) {
	// set data
	const dataModel = selectModel(payload.database, payload.collection, payload);

	// return save promiss
	return dataModel.save()
};

// // INSERT
// const insertQuery = function (payload) {
// 	const contact = new connectRequest(payload);
// 	const STRICT = payload.strict | false;
// 	return contact.insertMany(payload.data);
// };

// FIND
const findQuery = async function (payload) {
	// set data
	const dataModel = selectModel(payload.database, payload.collection,);

	let QUERY;
	switch (payload.type) {
		case "findOne":
			QUERY = dataModel.findOne(payload.query);
			break;
		case "findOneandDelete":
			QUERY = dataModel.findOneandDelete(payload.query);
			break;
		case "findOneandRemove":
			QUERY = dataModel.findOneandRemove(payload.query);
			break;
		case "findOneAndReplace":
			QUERY = dataModel.findOneAndReplace(payload.query);
			break;
		case "findOneAndUpdate":
			QUERY = dataModel.findOneAndUpdate(payload.query);
			break;
		default:
			QUERY = dataModel.find(payload.query);
	}

	// 	queryBuilder
	QUERY = queryBuilder(QUERY, payload);
	// await QUERY.exec().then(result => {
	// 	console.log("hundredMiles");
	// 	return result;
	// })

	return QUERY.exec();
}

const deleteQuery = function (payload) {
	// set data
	const dataModel = selectModel(payload.database, payload.collection);

	let QUERY = dataModel.deleteOne(payload.query);

	// 	queryBuilder
	QUERY = queryBuilder(QUERY, payload)

	return QUERY.exec();
}

const updateQuery = function (payload) {
	// set data
	const dataModel = selectModel(payload.database, payload.collection);

	let QUERY = dataModel.updateOne(payload.query);

	// 	queryBuilder
	QUERY = queryBuilder(QUERY, payload)

	return QUERY.exec();
}

module.exports = {
	saveQuery,
	// insertQuery,
	findQuery,
	deleteQuery,
	updateQuery
};