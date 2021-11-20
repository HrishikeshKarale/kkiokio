/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const password = process.env.MONGO_DB_PASSWORD;

const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://kkiokio:${password}@kkiokio.nprdo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
	const collection = client.db("test").collection("devices");
	// perform actions on the collection object
	client.close();
});
