const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../connection");
const TimeSheet = require("./timesheet.model");

const Invoice = sequelize.define("invoice", {
  rate: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("Invoice table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

Invoice.hasMany(TimeSheet);

module.exports = Invoice;
