const express = require("express");
const router = express.Router();
const sequelize = require("../connection");
const Models = require("../models");

// Home page route.
router.get("/:invoiceId?", async (req, res) => {
  const invoice = await Models.Invoice.findAll({
    where: {
      id: req.query.invoiceId,
    },
    include: [
      {
        model: Models.Timesheet,
      },
    ],
    raw: true,
    nest: true,
  });

  let total = 0;
  invoice.forEach((inv) => {
    total += inv.timesheets.hours_worked * inv.rate;
  });
  let taxes = 0.25;
  let final_total = total - total * taxes;
  res.render("timesheet", {
    layout: "index",
    test: "abc",
    invoice: invoice,
    total: total,
    taxes: taxes * total,
    final_total: final_total,
  });
});
// Time page route.
router.post("/add", async (req, res) => {
  const body = req.body;
  const timesheet = await Models.Timesheet.create({
    week_num: body.week_num,
    hours_worked: body.hours_worked,
    year: body.year,
    invoiceId: body.invoiceId,
  });
  res.redirect("/timesheet?invoiceId=" + body.invoiceId);
});

module.exports = router;
