const { userCollection } = require("../../services/database/collections");

const persistUserHandler = async (req, res) => {
  try {
    const user = req.body;
    const savedUser = await userCollection().insertOne(user);

    console.log(`Successfully persisted user to database ${savedUser.ops}`);
    res.json(savedUser);
  } catch (err) {
    console.error(`Error saving user to database: ${err}`);
    res.status(504).send();
  }
};

const retrieveUserHandler = async (req, res) => {
  try {
    const user = await userCollection().findOne({ id: req.params.id });
    res.json(user);
  } catch (err) {
    console.error(`Error retrieving user from database: ${err}`);
    res.status(504).send();
  }
};

const deleteUserHandler = async (req, res) => {
  try {
    await userCollection().deleteOne({ id: req.params.id });
    console.log(
      `Successfully deleted user with id ${req.params.id} from database`
    );

    res.status(204).send();
  } catch (err) {
    console.error(`Error deleted user from database: ${err}`);
    res.status(504).send();
  }
};

const updateUserHandler = async (req, res) => {
  try {
    const user = req.body;
    const savedUser = await userCollection().updateOne(
      { id: req.params.id },
      user
    );
    console.log(`Successfully updated user in database ${savedUser.ops}`);
    res.json(savedUser);
  } catch (err) {
    console.error(`Error update user in database: ${err}`);
    res.status(504).send();
  }
};

module.exports = {
  persistUserHandler,
  retrieveUserHandler,
  deleteUserHandler,
  updateUserHandler,
};
