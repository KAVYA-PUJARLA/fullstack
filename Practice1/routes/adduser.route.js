const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const approuter = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

var User = require("../models/adduser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// approuter.get('/',function(req,res){
//     res.send("hi");
// });

approuter.post("/signin", function(req, res) {
  var newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  });
  console.log(newUser);
  // Attempt to save the user
  newUser.save(function(err) {
    if (err) {
      return res.json({ success: false, message: `${err}` });
    }
    res.json({ success: true, message: "Successfully created new user." });
  });
});
approuter.post("/login", function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  User.findOne({ email: email, password: password }, function(err, user) {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    if (!user) {
      console.log(email + "  " + password);
      return res.status(404).send();
    }
    return res.status(200).send(user);
    // console.log("login user"+"  "+res.json(user));
    // return res.json(user);
  });
});
approuter.get("/allusers", function(req, res) {
  User.find(function(err, users) {
    if (err) {
      res.status(500).send();
    } else {
      return res.json(users);
    }
  });
});
approuter.post(
  "/upload",
  multer({ dest: "./uploads/" }).array("uploads", 12),
  function(req, res) {
    console.log("Hiiii");
    res.send(req.files);
  }
);
module.exports = approuter;
