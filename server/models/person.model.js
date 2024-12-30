
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../connection");
const Invoice = require("./invoice.model");

const Person = sequelize.define("person", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("Person table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

Person.hasMany(Invoice);

module.exports = Person;
