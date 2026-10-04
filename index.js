const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("app is running");
});
app.use(express.static("public"));
app.get("/test", (req, res) => {
  res.render("index.ejs");
});
app.get("/about", (req, res) => {
  res.render("about.ejs");
});
