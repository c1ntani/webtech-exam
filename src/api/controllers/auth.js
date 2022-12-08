const BigPromise = require("../middleware/BigPromise");
const cookieToken = require("../util/cookieToken");
const { validateEmail } = require("../services/validation");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.loginUser = BigPromise(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new Error("please provide email and password"));
  }

  if (!validateEmail(email)) {
    return next(new Error("email is not valid"));
  }

  // Save Cards in the database
  User.getUserUsingEmail(email, async (err, userdata) => {
    if (err)
      return next(
        new Error(err.message || "Some error occurred while getting the user.")
      );
    else if (userdata.length == 0) {
      return next(new Error("User not found"));
    }

    if (!(await bcrypt.compare(password, userdata[0].Password))) {
      return next(new Error("Email or password does not match or exist", 400));
    }

    cookieToken(userdata[0], res);
  });
});

exports.createFreeUser = BigPromise(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(new Error("please provide name, email and password"));
  }

  if (!validateEmail(email)) {
    return next(new Error("email is not valid"));
  }

  // Create a User
  const user = {
    Name: name,
    Email: email,
    Password: password,
    UserType: "free",
  };

  User.createUser(user, async (err, userdata) => {
    if (err)
      return next(
        new Error(err.message || "Some error occurred while creating the free user.")
      );

      res.status(200).send(userdata);
  });
});

exports.createPremiumUser = BigPromise(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(new Error("please provide name, email and password"));
  }

  if (!validateEmail(email)) {
    return next(new Error("email is not valid"));
  }

  // Create a User
  const user = {
    Name: name,
    Email: email,
    Password: password,
    UserType: "premium",
  };

  User.createUser(user, async (err, userdata) => {
    if (err)
      return next(
        new Error(err.message || "Some error occurred while creating the free user.")
      );

      res.status(200).send(userdata);
  });
});
