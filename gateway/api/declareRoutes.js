
const { Router } = require("express");
const { exampleHandler, privateHandler} = require("./endpoints/example");
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
const declareTestRoutes = (app) => {
  const route = "/test";
  const router = Router(routerOptions);

  router.get("/", exampleHandler);
  router.post("/private", checkJwt, privateHandler);

  app.use(route, router);

  console.log(`[API] Test routes registered`);
};

module.exports = {
  declareTestRoutes,
};
