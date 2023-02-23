"use strict";

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

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.Plan = Plan;

User.init(sequelize);
Plan.init(sequelize);


Plan.associate(db);
User.associate(db);


module.exports = db;
