const express = require("express");
const sequelize = require("./connection");
const app = express();
const Models = require("./models");
const routes = require("./routes");
const handlebars = require("express-handlebars");

// parse application/json
app.use(express.json());
routes.appRoutes(app);
app.set("views", "./views/partials");
app.set("view engine", "handlebars");

app.engine(
  "handlebars",
  handlebars.engine({
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
  })
);

app.use(express.static(__dirname + "/public"));

app.get("/", async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    //console.log(Object.keys(Models.Person.prototype));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  res.render("main", { layout: "index" });
});

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});

