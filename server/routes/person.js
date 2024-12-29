const express = require("express");
const router = express.Router();
const sequelize = require("../connection");
const Models = require("../models");

// Home page route.
router.get("/:id?", async (req, res) => {
  const id = req.params.id;
  if (!id) {
    const all = await Models.Person.findAll({
      include: [
        {
          model: Models.WorkWeek,
        },
      ],
    });
    res.json(all);
  } else {
    const all = await Models.Person.findAll({
      where: {
        id: id,
      },
      include: [
        {
          model: Models.WorkWeek,
        },
      ],
    });
    res.json(all);
  }
});

// Add person page route.
router.post("/add", async (req, res) => {
  const body = req.body;
  let person;
  console.log("Person table created successfully!");
  person = await Models.Person.create({
    name: body.name,
    date: new Date(),
  });
  const week = await Models.WorkWeek.create({
    week_num: body.week_num,
    hours_worked: body.hours_worked,
    year: body.year,
  });
  person.addWork_week(week);
  res.json(person);
});

module.exports = router;

