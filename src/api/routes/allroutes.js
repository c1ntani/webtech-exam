const express = require("express");

const {
  loginUser
} = require("../controllers/auth");

const router = express.Router();
router.route("/login").post(loginUser); // login user

module.exports = router;