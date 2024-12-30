const express = require("express");
const router = express.Router();
const Models = require("../models");

// Home page route.
router.get("/:personId?", async (req, res) => {
  const person = await Models.Person.findAll({
    where: {
      id: req.query.personId,
    },
    include: [
      {
        model: Models.Invoice,
      },
    ],
    raw: true,
    nest: true,
  });
  console.log(req.query.personId);
  console.log(person);
  res.render("invoice", { layout: "index", test: "abc", person: person });
});

// Add invoice page route.
router.post("/add", async (req, res) => {
  const body = req.body;
  const invoice = await Models.Invoice.create({
    rate: body.rate,
    personId: body.personId,
  });
  res.redirect("/invoice?personId=" + body.personId);
});

module.exports = router;

