const { Router } = require("express");
const { check } = require("prettier");
const { returnUserInfoHandler, addUserInfoHandler, updateUserInfoHandler, } = require("./endpoints/user")
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
const declareUserRoutes = (app) => {
  const route = "/user";
  const router = Router(routerOptions);
  
  // TODO: add id param
  router.get("/", checkJwt, returnUserInfoHandler)
  router.post("/", checkJwt, addUserInfoHandler)
  router.put("/", checkJwt, updateUserInfoHandler)

  app.use(route, router);

  console.log(`[API] User routes registered`);
};

module.exports = {
  declareUserRoutes,
};
