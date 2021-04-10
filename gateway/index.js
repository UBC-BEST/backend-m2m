const express = require("express");

if (process.env.NODE_ENV !== "prod") {
  // eslint-disable-next-line global-require
  require("dotenv").config();
}

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

const { declareTestRoutes, declareUserRoutes } = require("./api/declareRoutes");
const { connectMongo } = require("./services/database/database");

const app = express();

app.promiseListen = function promiseListen(port, host) {
  return new Promise((resolve, reject) =>
    this.listen(port, host, (err) => (!err ? resolve() : reject(err)))
  );
};

const runServer = async () => {
  // connect to MongoDB
  await connectMongo("gateway");

  // declare routes
  declareTestRoutes(app);
  declareUserRoutes(app);

  // start server
  await app.promiseListen(PORT, HOST);
  console.log(`[Server Startup] Running on http://${HOST}:${PORT}`);
};

module.exports = {
  app,
  runServer,
};
