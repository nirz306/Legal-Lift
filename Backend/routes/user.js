// contains user routings
const express = require("express");
const { handleUserSignup, handleUserLogin,handleUserScore } = require("../controllers/user");

const router = express.Router();

router.post("/signup", handleUserSignup);
router.post("/login", handleUserLogin);
router.post("/score",handleUserScore)

module.exports = router;