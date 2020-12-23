const { Router } = require("express");
const { registerHandler, loginHandler, signOutHandler, refreshHandler } = require("./endpoints/auth")
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
const declareAuthRoutes = (app) => {
  const route = "/auth";
  const router = Router(routerOptions);
  
  router.get("/register", registerHandler)
  router.get("/login", loginHandler)
  router.get("/refresh", checkJwt, refreshHandler)
  router.get("/signout", signOutHandler)

  app.use(route, router);

  console.log(`[API] Auth routes registered`);
};

module.exports = {
    declareAuthRoutes,
};
