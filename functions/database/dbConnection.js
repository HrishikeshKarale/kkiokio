/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const MongoDBurl = process.env.MONGO_DB_URL;

const { MongoClient } = require('mongodb');
const uri = MongoDBurl;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
	const collection = client.db("test").collection("devices");
	// perform actions on the collection object
	client.close();
});
