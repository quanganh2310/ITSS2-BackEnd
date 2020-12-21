const config = require("../config/auth.config");
const db = require("../models");
const ComboOrder = db.comboOrder;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.create = (req, res) => {
  const comboOrder = new ComboOrder({
    userID: req.body.userID,
    userEmail: req.body.userEmail,
    username: req.body.username,
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    peopleNumber: req.body.peopleNumber,
    comboID:  req.body.comboID,
    bookingAt: req.body.bookingAt,
    status: req.body.status,
  });
  console.log(req.body.comboID)

  comboOrder.save((err, comboOrder) => {
    if (err) {
      res.status(500).send({ success : 0, message : "err" });
      return;
    }

    res.status(201).send({success:1, message: "Order was created successfully!" });

    
  });
};

exports.listAll = (req, res) => {
    ComboOrder.find({}, (err, orders) => {
      if (err) {
        res.status(500).send({ success : 0, message : "Failed! Please try again" });
        return;
      }
  
      res.status(201).send({success:1, message: "All orders is listed", orders: orders });
    });
  }
  
  exports.editStatus = (req, res) => {
    ComboOrder.findById(req.body.orderID, (err, order) => {
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