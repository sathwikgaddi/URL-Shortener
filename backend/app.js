const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// const postsRoutes = require("./routes/posts");
const Routes = require("./url-routes");

const app = express();
mongoose
.connect(
  "mongodb+srv://zyx:PiHUACaVmfoc0BZ2@cluster0-wm8j3.mongodb.net/url-shortener?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
    }
)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});
//add_header 'Access-Control-Allow-Origin' 'http://localhost:4200' always;
// app.use("/api/posts", postsRoutes);
app.use( Routes);

module.exports = app;
