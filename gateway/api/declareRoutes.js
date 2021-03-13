const { Router } = require("express");
const {
  exampleHandler,
  examplePrivateHandler,
} = require("./endpoints/example");
const {
  retrieveUserHandler,
  deleteUserHandler,
  updateUserHandler,
  persistUserHandler,
} = require("./endpoints/user");

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

/**
 * Adds user routes to the provided app.
 * @param  {Express} app  Express app for current server.
 * @return {undefined}
 */
const declareUserRoutes = (app) => {
  const route = "/user";
  const router = Router(routerOptions);

  router.get("/", isAuthenticated, retrieveUserHandler);
  router.post("/", isAuthenticated, persistUserHandler);
  router.delete("/", isAuthenticated, deleteUserHandler);
  router.put("/", isAuthenticated, updateUserHandler);
  app.use(route, router);

  console.log(`[API] User routes registered`);
};

module.exports = {
  declareTestRoutes,
  declareUserRoutes,
};
