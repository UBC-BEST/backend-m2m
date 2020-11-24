const express = require("express");
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

const { declareTestRoutes } = require("./api/declareRoutes");
const { declareAuthRoutes } = require("./api/declareAuthRoutes");
const { declareGameRoutes } = require("./api/declareGameRoutes");
const { declareUserRoutes } = require("./api/declareUserRoutes");

const app = express();

app.promiseListen = function promiseListen(port, host) {
  return new Promise((resolve, reject) =>
    this.listen(port, host, (err) => (!err ? resolve() : reject(err)))
  );
};

const runServer = async () => {
  // declare routes
  declareAuthRoutes(app);
  declareTestRoutes(app);
  declareGameRoutes(app);
  declareUserRoutes(app);

  // start server
  await app.promiseListen(PORT, HOST);
  console.log(`[Server Startup] Running on http://${HOST}:${PORT}`);
};

module.exports = {
  app,
  runServer,
};
