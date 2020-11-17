/**
 * TODO
 * @return {String} 'Sign up!'.
 */
const signUpFunction = () => "Sign up!";

/**
 * Sign up handler for handling first time sign up.
 * @param {Request} req Request received by the server.
 * @param {Response} res Response to be sent to the user.
 * @return {undefined}
 */
const signUpHandler = async (req, res) => {
  res.status(200).send(signUpFunction());
};

/**
 * TODO
 * @return {String} 'Sign in!'.
 */
const signInFunction = () => "Sign in!";

/**
 * Sign in handler for handling sign in.
 * @param {Request} req Request received by the server.
 * @param {Response} res Response to be sent to the user.
 * @return {undefined}
 */
const signInHandler = async (req, res) => {
  res.status(200).send(signInFunction());
};

/**
 * TODO
 * @return {String} 'Sign out!'.
 */
const signOutFunction = () => "Sign out!";

/**
 * Logout handler for handling logout.
 * @param {Request} req Request received by the server.
 * @param {Response} res Response to be sent to the user.
 * @return {undefined}
 */
const signOutHandler = async (req, res) => {
  res.status(200).send(signOutFunction());
};

module.exports = {
  signUpHandler,
  signUpFunction,
  signInHandler, 
  signInFunction, 
  signOutHandler, 
  signOutFunction
};
