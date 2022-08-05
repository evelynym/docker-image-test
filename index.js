const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello! min");
});

app.get("/money", function (req, res) {
  res.send("You dont have moeny.");
});
app.get("/cat", function (req, res) {
  res.send("Ops. you dont have cat.");
});
app.listen(3003, () => {
  console.log("Listening on port 3003");
});
