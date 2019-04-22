require('dotenv').config({ path: '.env.local' });
const express = require("express");
const routes = require("./routes");
const cors = require('cors');
const bodyParser = require('body-parser');
const OktaJwtVerifier = require('@okta/jwt-verifier');
var db = require("./models");

// Define middleware here
const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: `${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`,
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
  assertClaims: {
    aud: 'api://default',
  },
});

/**
 * A simple middleware that asserts valid access tokens and sends 401 responses
 * if the token is not present or fails validation.  If the token is valid its
 * contents are attached to req.jwt
 */
function authenticationRequired(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    return res.status(401).end();
  }

  const accessToken = match[1];

  return oktaJwtVerifier.verifyAccessToken(accessToken)
    .then((jwt) => {
      req.jwt = jwt;
      next();
    })
    .catch((err) => {
      res.status(401).send(err.message);
    });
}

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API
app.use(authenticationRequired);
app.use(routes);

const PORT = process.env.PORT || 3001;

//removed {force: true} to prevent seeds from being erased each time
db.sequelize.sync().then(() => {
  app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});