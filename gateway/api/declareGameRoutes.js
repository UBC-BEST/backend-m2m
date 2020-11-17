const { Router } = require("express");
const { 
    returnPreviousGameSessionHandler,
    createGameSessionHandler,
    updateGameSessionHandler, } = require("./endpoints/game")
const { checkJwt } = require("./middleware/middleware")

const routerOptions = {
  mergeParams: true,
  strict: true,
};

/**
 * Adds test routes to the provided app.
 * @param  {Express} app  Express app for current server.
 * @return {undefined}
 */
const declareGameRoutes = (app) => {
  const route = "/game";
  const router = Router(routerOptions);

  // TODO: add id param 
  router.get("/", checkJwt, returnPreviousGameSessionHandler)
  router.post("/",checkJwt, createGameSessionHandler)
  router.put("/", checkJwt, updateGameSessionHandler)

  app.use(route, router);

  console.log(`[API] Game routes registered`);
};

module.exports = {
  declareGameRoutes,
};
