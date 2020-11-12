const { Router } = require("express");
const { signUpHandler, signInHandler, signOutHandler, } = require("./endpoints/auth")

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
  
  router.get("/signup", signUpHandler)
  router.get("/signin", signInHandler)
  router.get("/signout", signOutHandler)

  app.use(route, router);

  console.log(`[API] Auth routes registered`);
};

module.exports = {
    declareAuthRoutes,
};
