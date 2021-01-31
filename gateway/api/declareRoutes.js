const { Router } = require("express");
const {
  exampleHandler,
  examplePrivateHandler,
} = require("./endpoints/example");
const { isAuthenticated } = require("./middleware/middleware");

const routerOptions = {
  mergeParams: true,
  strict: true,
};

/**
 * Adds test routes to the provided app.
 * @param  {Express} app  Express app for current server.
 * @return {undefined}
 */
const declareTestRoutes = (app) => {
  const route = "/test";
  const router = Router(routerOptions);

  router.get("/", exampleHandler);
  router.get("/private", isAuthenticated, examplePrivateHandler);

  app.use(route, router);

  console.log(`[API] Test routes registered`);
};

module.exports = {
  declareTestRoutes,
};
