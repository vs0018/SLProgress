const express = require("express");
const routes = require("./routes");


const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

//Connect to DB



app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
