require('dotenv').config({ path: '.env.local' });

module.exports = {
  "development": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASS,
    "database": process.env.MYSQL_DBNAME,
    "host": process.env.MYSQL_HOST,
    "resourceServer": {
      "oidc": {
        "issuer": `${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`
      },
      "assertClaims": {
        "aud": "api://default",
        "cid": process.env.REACT_APP_OKTA_CLIENT_ID
      }
    },
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
