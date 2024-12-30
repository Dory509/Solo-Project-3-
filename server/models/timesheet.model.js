const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../connection");

const TimeSheet = sequelize.define("timesheet", {
  week_num: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  year: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  hours_worked: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("Timesheet table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = TimeSheet;
