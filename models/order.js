const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const Order = mongoose.model(
  "Order",
  new mongoose.Schema({
    userID: String,
    userEmail: String,
    username: String,
    name: String,
    phoneNumber: String,
    time: String,
    date: String,
    peopleNumber: Number,
    placeID: String,
    placeName: String,
    placeImage: String,
    placeAddress: String,
    bookingAt: String,
    status: String,
  })
);

module.exports = Order;