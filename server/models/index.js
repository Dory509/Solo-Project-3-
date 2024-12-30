const Person = require("./person.model");
const Timesheet = require("./timesheet.model");
const Invoice = require("./invoice.model");

const Models = {};
Models.Person = Person;
Models.Timesheet = Timesheet;
Models.Invoice = Invoice;
module.exports = Models;
