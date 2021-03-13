const { getMongoDb } = require("./database");

/**
 * Collection handlers for MongoDB.
 * @return {import("mongodb").Collection}
 */
const userCollection = () => getMongoDb().collection("user");
const gameCollection = () => getMongoDb().collection("game");

module.exports = {
  userCollection,
  gameCollection,
};
