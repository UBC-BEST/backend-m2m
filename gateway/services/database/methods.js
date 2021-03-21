const {MongoClient, ObjectId} = require('mongodb');

async function createUser(client, newUser){
    const result = await client.db("app").collection("User").insertOne(newUser);
    console.log(`New user created with the following id: ${result.insertedId}`);
}

async function listUsers(client){
    const result = await client.db("app").collection("User").find({}).toArray();
    console.log(result);
}

async function listUserInfo(client, id){
    const result = await client.db("app").collection("User").findOne({_id: ObjectId(id)});
    console.log(result);
}

async function updateUser(client, user){
    const result = await client.db("app").collection("User").updateOne(
        {
            "_id": ObjectId(user._id),
        },
        {"$set": {
            "msScore": user.msScore,
        }},
    );
    console.log(`User info updated for the following id: ${user._id}`);
}

async function deleteUser(client, id){
    const result = await client.db("app").collection("User").deleteOne({_id: ObjectId(id)});
    console.log("Deleted User");
}

async function addGame(client, id, game){
    const result = await client.db("app").collection("User").updateOne(
        {"_id": ObjectId(id)},
        {"$push": {"games": game}},
    );
    console.log(`New game ${game.name} added to the following id: ${id}`);
}

async function updateGame(client, id, game){
    const result = await client.db("app").collection("User").updateOne(
        {
            "_id": ObjectId(id),
            "games.name": game.name
        },
        {"$set": {
            "games.$.gameData.level": game.gameData.level,
            "games.$.gameData.score": game.gameData.score
        }},
    );
    console.log(`${game.name} updated for the following id: ${id}`);
}

async function deleteGame(client, id, game_name){
    const result = await client.db("app").collection("User").findOneAndUpdate(
        {_id: ObjectId(id)},
        {$pull: {"games": {name: game_name}}}
    );
    console.log(result);
}

module.exports = {
    createUser,
    listUsers,
    listUserInfo,
    updateUser,
    deleteUser,
    addGame,
    updateGame,
    deleteGame,
};