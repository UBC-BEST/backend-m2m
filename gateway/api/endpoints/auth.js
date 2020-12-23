/**
 * TODO
 * @return {String} 'Sign up!'.
 */
const registerFunction = () => "Sign up!";

/**
 * Sign up handler for handling first time sign up.
 * @param {Request} req Request received by the server.
 * @param {Response} res Response to be sent to the user.
 * @return {undefined}
 */
const registerHandler = async (req, res) => {
  res.status(200).send(registerFunction());
};

/**
 * TODO
 * @return {String} 'Sign in!'.
 */
const loginFunction = () => "Sign in!";

/**
 * Sign in handler for handling sign in.
 * @param {Request} req Request received by the server.
 * @param {Response} res Response to be sent to the user.
 * @return {undefined}
 */
const loginHandler = async (req, res) => {
  res.status(200).send(loginFunction());
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

/**
 * TODO
 * @return {String} 'Sign out!'.
 */
const refeshFunction = () => "Refresh!";

/**
 * Logout handler for handling logout.
 * @param {Request} req Request received by the server.
 * @param {Response} res Response to be sent to the user.
 * @return {undefined}
 */
const refreshHandler = async (req, res) => {
  res.status(200).send(refeshFunction());
};


module.exports = {
  refreshHandler,
  refeshFunction,
  loginHandler,
  loginFunction,
  registerHandler, 
  registerFunction, 
  signOutHandler, 
  signOutFunction
};
