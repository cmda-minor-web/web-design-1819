// const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const request = require("request");
const ejsLint = require("ejs-lint");
const compression = require("compression");
const minifyHTML = require("express-minify-html");


const baseDir = "static/";
// app.use((req, res, next) => {
//   res.append("Access-Control-Allow-Origin", ["*"]);
//   res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   res.append("Access-Control-Allow-Headers", "Content-Type");
//   res.append("Cache-Control", "max-age=" + 365 * 24 * 60 * 60);
//   next();
// });

// app.use(
//   minifyHTML({
//     override: true,
//     exception_url: false,
//     htmlMinifier: {
//       removeComments: true,
//       collapseWhitespace: true,
//       collapseBooleanAttributes: true,
//       removeAttributeQuotes: true,
//       removeEmptyAttributes: true,
//       minifyJS: true
//     }
//   })
// );

app.use(compression());
app.set("view engine", "ejs");
app.use(express.static("static"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Eye tracker"
  });
});
