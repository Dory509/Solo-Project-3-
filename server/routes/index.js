const timesheet = require("./timesheet");
const invoices = require("./invoice");
const person = require("./person");
const express = require("express");
const router = express.Router();

module.exports.appRoutes = (app) => {
  router.use("/timesheet", timesheet);
  router.use("/invoice", invoices);
  router.use("/person", person);

  app.use("/", router);
};

