const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const PresentComment = mongoose.model(
  "PresentComment",
  new mongoose.Schema({
    userID: String,
    userEmail: String,
    username: String,
    presentID: String,
    avatar: String,
    createdAt: String,
    content: String,
  })
);

module.exports = PresentComment;