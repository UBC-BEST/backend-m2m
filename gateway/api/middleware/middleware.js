
var express = require('express');
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

var checkJwt = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://dev-i5uose3b.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://m2m-gateway.herokuapp.com/test',
    issuer: 'https://dev-i5uose3b.us.auth0.com/',
    algorithms: ['RS256']
});

module.exports = {
    checkJwt
}