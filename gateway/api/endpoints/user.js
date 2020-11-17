/**
 * Returns user's info.
 * @return {String} 'Return user info!'.
 */
const returnUserInfoFunction = () => "Return user info!";

/**
 * Handler for returning user's info.
 * @param {Request} req Request received by the server.
 * @param {Response} res Response to be sent to the user.
 * @return {undefined}
 */
const returnUserInfoHandler = async (req, res) => {
  res.status(200).send(returnUserInfoFunction());
};

/**
 * Add new user info.
 * @return {String} 'Create new user info!'.
 */
const addUserInfoFunction = () => "Create new user info!";

/**
 * Handler for adding new user info.
 * @param {Request} req Request received by the server.
 * @param {Response} res Response to be sent to the user.
 * @return {undefined}
 */
const addUserInfoHandler = async (req, res) => {
  res.status(200).send(addUserInfoFunction());
};

/**
 * Updates user's info.
 * @return {String} 'Update user info!'.
 */
const updateUserInfoFunction = () => "Update user info!";

/**
 * Handler for updating a user's info.
 * @param {Request} req Request received by the server.
 * @param {Response} res Response to be sent to the user.
 * @return {undefined}
 */
const updateUserInfoHandler = async (req, res) => {
  res.status(200).send(updateUserInfoFunction());
};


module.exports = {
    returnUserInfoHandler,
    returnUserInfoFunction,
    addUserInfoHandler, 
    addUserInfoFunction, 
    updateUserInfoHandler, 
    updateUserInfoFunction
};
