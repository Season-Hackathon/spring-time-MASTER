"use strict";
<<<<<<< HEAD

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

=======

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");

const User = require("./User");
const Plan = require("./Plan");

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

const db = {};

let sequelize;
if (config) {
    sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        config
    );
}

>>>>>>> 24b5572e695770c19f039f34554ffa41e9bb4a42
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.Plan = Plan;

User.init(sequelize);
Plan.init(sequelize);


Plan.associate(db);
User.associate(db);


module.exports = db;
