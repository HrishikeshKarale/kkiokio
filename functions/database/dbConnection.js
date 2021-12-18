/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose');
require("dotenv").config();
const mongoDBurl = process.env.MONGO_DB_URL;
let db = null;

const mongoDisconnect = async () => {
	if (db) {
		db.disconect();
	}
};

const mongoConnect = async () => {

	// connect to MONGO_DB
	mongoose.connect(mongoDBurl, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});

	//Get the default connection
	db = mongoose.connection;

	//Bind connection to error event (to get notification of connection errors)
	db
		.on('error', console.error.bind(console, 'mongoDB connection error:'))
		.once('open', () => {
			console.log('MongoDB running');
		});
};

module.exports = { mongoConnect, mongoDisconnect };
