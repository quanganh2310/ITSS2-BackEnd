const config = require("../config/auth.config");
const db = require("../models");
const PresentOrder = db.presentOrder;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.create = (req, res) => {
  const presentOrder = new PresentOrder({
    userID: req.body.userID,
    userEmail: req.body.userEmail,
    username: req.body.username,
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    receiverName: req.body.receiverName,
    receiverAddress: req.body.receiverAddress,
    receiverPhoneNumber: req.body.receiverPhoneNumber,
    presentID:  req.body.presentID,
    presentName:  req.body.presentName,
    presentImage: req.body.presentImage,
    presentAddress:  req.body.presentAddress,
    bookingAt: req.body.bookingAt,
    status: req.body.status,
  });

  console.log(req.body.placeID);

  presentOrder.save((err, presentOrder) => {
    if (err) {
      res.status(500).send({ success : 0, message : "err" });
      return;
    }

    res.status(201).send({success:1, message: "Order was created successfully!" });

    
  });
};

exports.listAll = (req, res) => {
  PresentOrder.find({}, (err, orders) => {
    if (err) {
      res.status(500).send({ success : 0, message : "Failed! Please try again" });
      return;
    }

    res.status(201).send({success:1, message: "All orders is listed", orders: orders });
  });
}

exports.editStatus = (req, res) => {
  PresentOrder.findById(req.body.orderID, (err, order) => {
      if (err) {
        res.status(500).send({ success : 0, message : "Failed! Please try again" });
        return;
      }
      if (order.status === "processing") {
        order.status= "successful"
      }
      else {
        order.status = "processing"
      }
      order.save().then(result => {
        res.status(201).send({success:1, message: "successfully!", result: result });
      })
  })
}