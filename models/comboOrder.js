const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const ComboOrder = mongoose.model(
  "ComboOrder",
  new mongoose.Schema({
    userID: String,
    userEmail: String,
    username: String,
    name: String,
    phoneNumber: String,
    peopleNumber: Number,
    comboID: String,
    bookingAt: String,
    status: String,
  })
);

module.exports = ComboOrder;