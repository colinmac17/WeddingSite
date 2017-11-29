const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const http = require('http');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

setInterval(function() {
  http.get("http://colinandkelsey.herokuapp.com");
}, 300000); // every 5 minutes (300000)

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
