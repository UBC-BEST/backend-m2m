const exampleHandler = async (req, res) => {
  res.status(200).send(exampleFunction());
};

const exampleFunction = () => "Hello world!"

module.exports = {
  exampleHandler,
  exampleFunction,
};
