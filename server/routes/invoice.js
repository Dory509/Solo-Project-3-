const express = require("express");
const router = express.Router();

// Home page route.
router.get("/", function (req, res) {
  res.send("list invoice home page");
});

// Add invoice page route.
router.post("/add", function (req, res) {
  res.send("add invoices page");
});

module.exports = router;

