const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const PresentOrder = mongoose.model(
  "PresentOrder",
  new mongoose.Schema({
    userID: String,
    userEmail: String,
    username: String,
    name: String,
    phoneNumber: String,
    receiverName: String,
    receiverAddress: String,
    receiverPhoneNumber: String,
    presentID: String,
    presentName: String,
    presentImage: String,
    presentAddress: String,
    bookingAt: String,
    status: String,
  })
);

module.exports = PresentOrder;