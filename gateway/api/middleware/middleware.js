const express = require("express");
const app = express();
const jwt = require('express-jwt');
const jwtAuthz = require("express-jwt-authz");
const jwksRsa = require("jwks-rsa");

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true, 
        rateLimit: true, 
        jwksRequestsPerMinute: 5,
        jwksUri: `https://dev-i5uose3b.us.auth0.com/.well-known/jwks.json`
    }),
    audience: 'https://dev-i5uose3b.us.auth0.com/api/v2/',
    issuer: `https://dev-i5uose3b.us.auth0.com/`,
    algorithms: ['RS256']
  })

module.exports = {
    checkJwt
}