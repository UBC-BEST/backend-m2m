const { Router } = require("express");
const { exampleHandler } = require("./endpoints/example");

const routerOptions = {
  mergeParams: true,
  strict: true,
};

const declareTestRoutes = (app) => {
  const route = "/test";
  const router = Router(routerOptions);

  router.get("/", exampleHandler);

  app.use(route, router);

  console.log(`[API] Test routes registered`);
};

module.exports = {
  declareTestRoutes,
};
