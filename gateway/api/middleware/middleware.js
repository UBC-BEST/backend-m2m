const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

const isAuthenticated = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-i5uose3b.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://m2m-gateway.herokuapp.com/test",
  issuer: "https://dev-i5uose3b.us.auth0.com/",
  algorithms: ["RS256"],
});

module.exports = {
  isAuthenticated,
};
