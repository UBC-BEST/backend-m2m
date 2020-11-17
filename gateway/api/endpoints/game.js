/**
 * Returns user's previous game stats.
 * TODO
 * @return {String} 'Return previous game session!'.
 */
const returnPreviousGameSessionFunction = () => "Return previous game session!";

/**
 * Handler for returning user's previous game stats.
 * @param {Request} req Request received by the server.
 * @param {Response} res Response to be sent to the user.
 * @return {undefined}
 */
const returnPreviousGameSessionHandler = async (req, res) => {
  res.status(200).send(returnPreviousGameSessionFunction());
};

/**
 * Create's new game session for user.
 * TODO
 * @return {String} 'Create game session!'.
 */
const createGameSessionFunction = () => "Create game session!";

/**
 * Handler for creating new game session for a user.
 * @param {Request} req Request received by the server.
 * @param {Response} res Response to be sent to the user.
 * @return {undefined}
 */
const createGameSessionHandler = async (req, res) => {
  res.status(200).send(createGameSessionFunction());
};

/**
 * Updates a user's game stats for a certain game. 
 * TODO
 * @return {String} 'Update Game session!'.
 */
const updateGameSessionFunction = () => "Update Game session!";

/**
 * Handler for updating a user's gameplay stats.
 * @param {Request} req Request received by the server.
 * @param {Response} res Response to be sent to the user.
 * @return {undefined}
 */
const updateGameSessionHandler = async (req, res) => {
  res.status(200).send(updateGameSessionFunction());
};


module.exports = {
    returnPreviousGameSessionHandler,
    returnPreviousGameSessionFunction,
    createGameSessionHandler,
    createGameSessionFunction,
    updateGameSessionHandler,
    updateGameSessionFunction,
};
