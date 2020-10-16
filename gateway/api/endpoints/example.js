/**
 * Example helper function with no arguments.
 * @return {String} 'Hello world!'.
 */
const exampleFunction = () => "Hello world!";

/**
 * Example handler for handling a given function.
 * @param {Request} req Request received by the server.
 * @param {Response} res Response to be sent to the user.
 * @return {undefined}
 */
const exampleHandler = async (req, res) => {
  res.status(200).send(exampleFunction());
};

module.exports = {
  exampleHandler,
  exampleFunction,
};
