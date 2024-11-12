const express = require("express");
const bcrypt = require("bcryptjs");
const knex = require("../db/db");
const verifyToken = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/me", verifyToken, async (req, res) => {
  console.log("it came to profile fetch");
  const user = await knex("users").where({ id: req.user.id }).first();
  res.json(user);
});

router.put("/me", verifyToken, async (req, res) => {
  const { username, email, password } = req.body;
  const updates = { username, email };

  if (password) {
    updates.password = await bcrypt.hash(password, 10);
  }

  try {
    await knex("users").where({ id: req.user.id }).update(updates);
    res.send("Profile updated");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/me", verifyToken, async (req, res) => {
  try {
    await knex("users").where({ id: req.user.id }).del();
    res.send("Account deleted");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
