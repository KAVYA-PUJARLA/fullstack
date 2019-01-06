const express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  config = require("./config/DB");
const app = express();
app.use(cors());

const adduserRoute = require("./routes/adduser.route");

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => {
    console.log("Database is connected");
  },
  err => {
    console.log("Can not connect to the database" + err);
  }
);

app.use(bodyParser.json());

app.use("/", adduserRoute);

const port = 4088;

const server = app.listen(port, function() {
  console.log("listening on port " + port);
});
