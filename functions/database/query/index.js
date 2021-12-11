/* eslint-disable @typescript-eslint/no-var-requires */
// import a model
const contactRequest = require("../schemas/contact/index");
const users = require("../schemas/user/index");
// import queryBuilder
const queryBuilder = require("../queryBuilder/index")

// SET MODEL
const selectModel = (modelName, payload = false) => {
	let dataModel;

	switch (modelName) {
		case "user":
			if (payload) {
				dataModel = new users(payload);
			} else {
				dataModel = users;
			}
			break;
		case "contactForm":
			if (payload) {
				dataModel = new contactRequest(payload);
			} else {
				dataModel = contactRequest;
			}
			break;
	}

	return dataModel;
}
const saveQuery = function (payload) {
	// set data
	const dataModel = selectModel(payload.target, payload);

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
const findQuery = function (payload) {
	// set data
	const dataModel = selectModel(payload.target);

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

	return QUERY.exec();
}

const deleteQuery = function (payload) {
	// set data
	const dataModel = selectModel(payload.target);

	let QUERY = dataModel.deleteOne(payload.query);

	// 	queryBuilder
	QUERY = queryBuilder(QUERY, payload)

	return QUERY.exec();
}

const updateQuery = function (payload) {
	// set data
	const dataModel = selectModel(payload.target);

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