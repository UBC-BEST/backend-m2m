const { MongoClient } = require("mongodb");

let database;
const connectMongo = async (dbName) => {
  try {
    uri = process.env.MONGO_DB.replace(
      "username:password",
      `${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}`
    );
    const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
    database = client.db(dbName);
    console.log("[Server Startup] Successfully connected to MongoDB Atlas");
  } catch (e) {
    console.log("[Server Startup] Failed to connect to MongoDB Atlas\n" + e);
  }
};

const getMongoDb = () => database;

module.exports = {
  connectMongo,
  getMongoDb,
};
