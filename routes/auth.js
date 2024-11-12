const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const knex = require("../db/db");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username) {
    return res.status(400).send("no user");
  } else if (!email) {
    return res.status(400).send("no email");
  } else if (!password) {
    return res.status(400).send("no pass");
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await knex("users").insert({ username, email, password: hashedPassword });
    res.status(201).send("User registered successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("came to login");
  try {
    console.log("came to login");
    const user = await knex("users").where({ email }).first();
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.json({ token });
    } else {
      res.status(400).send("Invalid credentials");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
