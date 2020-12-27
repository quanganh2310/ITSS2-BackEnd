const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const Comment = mongoose.model(
  "Comment",
  new mongoose.Schema({
    userID: String,
    userEmail: String,
    username: String,
    placeID: String,
    avatar: String,
    createdAt: String,
    content: String,
  })
);

module.exports = Comment;