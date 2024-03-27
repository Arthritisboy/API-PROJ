const express = require("express");

const router = express.Router();

const { protect } = require("../backend/middleware/authMiddleware");

const {
  registerUser,
  getUser,
  loginUser,
} = require("../backend/controllers/userController");

router.post("/", registerUser);

router.get("/me", protect, getUser);

router.post("/login", loginUser);

module.exports = router;
