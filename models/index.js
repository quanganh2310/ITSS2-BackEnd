const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.order = require("./order")
db.user = require("./user");
db.role = require("./role");
db.presentOrder = require("./presentOrder");
db.comboOrder = require("./comboOrder");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;