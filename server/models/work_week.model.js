const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../connection");

const WorkWeek = sequelize.define("work_week", {
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
    console.log("Work_week table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = WorkWeek;
