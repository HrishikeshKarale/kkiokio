/* eslint-disable @typescript-eslint/no-var-requires */
//Import the mongoose module
const mongoose = require('mongoose');
const MongoDBurl = process.env.MONGO_DB_URL;

// const OPTIONS = {
// 	useMongoClient: true,
// 	autoIndex: false,
// 	autoReconnect: true,
// 	promiseLibrary: global.Promise
// };

//Set up default mongoose connection
// var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(MongoDBurl, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;