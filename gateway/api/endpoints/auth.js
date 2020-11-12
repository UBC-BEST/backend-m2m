/**
 * Example helper function with no arguments.
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
 * Example helper function with no arguments.
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
 * Example helper function with no arguments.
 * @return {String} 'Sign up!'.
 */
const logoutFunction = () => "Sign up!";

/**
 * Logout handler for handling logout.
 * @param {Request} req Request received by the server.
 * @param {Response} res Response to be sent to the user.
 * @return {undefined}
 */
const logoutHandler = async (req, res) => {
  res.status(200).send(logoutHandler());
};

module.exports = {
  signUpHandler,
  signUpFunction,
  signInHandler, 
  signInFunction, 
  logoutHandler, 
  logoutFunction
};
