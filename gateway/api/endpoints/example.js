/**
 * Example helper function with no arguments.
 * @return {String} 'Hello world!'.
 */
const exampleFunction = () => ["walk the dog", "feed fish", "pet the cat"];

/**
 * Example handler for handling a given function.
 * @param {Request} req Request received by the server.
 * @param {Response} res Response to be sent to the user.
 * @return {undefined}
 */
const exampleHandler = async (req, res) => {
  res.status(200).send(exampleFunction());
};

/**
 * Example helper function with no arguments.
 * @return {String} 'Hello world!'.
 */
const examplePrivateFunction = () => "Private!";

/**
 * Example handler for handling a given function.
 * @param {Request} req Request received by the server.
 * @param {Response} res Response to be sent to the user.
 * @return {undefined}
 */
const examplePrivateHandler = async (req, res) => {
  res.status(200).send(examplePrivateFunction());
};

module.exports = {
  exampleHandler,
  exampleFunction,
  examplePrivateHandler,
  examplePrivateFunction
};
