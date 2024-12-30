const express = require("express");
const router = express.Router();
const sequelize = require("../connection");
const Models = require("../models");

// Home page route.
router.get("/:id?", async (req, res) => {
  const id = req.params.id;
  if (!id) {
    const all = await Models.Person.findAll({
      raw: true,
      nest: true,
    });
    return res.render("person", { layout: "index", all: all });
  } else {
    const all = await Models.Person.findAll({
      where: {
        id: id,
      },
      raw: true,
      nest: true,
    });
    return res.render("person", { layout: "index", all: all });
  }
});

// Add person page route.
router.post("/add", async (req, res) => {
  const body = req.body;
  let person;
  person = await Models.Person.create({
    name: body.name,
    date: new Date(),
  });
  res.redirect("/person");
});

module.exports = router;
