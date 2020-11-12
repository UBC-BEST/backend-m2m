const { Router } = require("express");
const { exampleHandler } = require("./endpoints/example");
const { signUpHandler, signInHandler, logoutHandler, signOutHandler, } = require("./endpoints/auth")

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
  
  router.get("/signup", signUpHandler)
  router.get("/signin", signInHandler)
  router.get("/signout", signOutHandler)

  app.use(route, router);

  console.log(`[API] Test routes registered`);
};

module.exports = {
  declareTestRoutes,
};
