const express = require("express");
const router = express.Router();
const sequelize = require("../connection");
const Models = require("../models");

// Home page route.
router.get("/", function (req, res) {
  res.render("List timesheet page", { layout: "index", test: "abc" });
});

// Time page route.
router.post("/add", async (req, res) => {
  const body = req.body;
  const week = await Models.WorkWeek.create({
    week_num: body.week_num,
    hours_worked: body.hours_worked,
    year: body.year,
    personId: body.personId,
  });
  res.json(week);
});

module.exports = router;

