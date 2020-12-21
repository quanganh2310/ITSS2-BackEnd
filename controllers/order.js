const config = require("../config/auth.config");
const db = require("../models");
const Order = db.order;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.create = (req, res) => {
  const order = new Order({
    userID: req.body.userID,
    userEmail: req.body.userEmail,
    username: req.body.username,
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    time: req.body.time,
    date: req.body.date,
    peopleNumber: req.body.peopleNumber,
    placeID:  req.body.placeID,
    placeName:  req.body.placeName,
    placeImage: req.body.placeImage,
    placeAddress:  req.body.placeAddress,
    bookingAt: req.body.bookingAt,
    status: req.body.status,
  });

  console.log(req.body.placeID);

  order.save((err, order) => {
    if (err) {
      res.status(500).send({ success : 0, message : "Failed! Please try again" });
      return;
    }

    res.status(201).send({success:1, message: "Order was created successfully!" });

    
  });
};

exports.listAll = (req, res) => {
  Order.find({}, (err, orders) => {
    if (err) {
      res.status(500).send({ success : 0, message : "Failed! Please try again" });
      return;
    }

    res.status(201).send({success:1, message: "All orders is listed", orders: orders });
  });
}

exports.editStatus = (req, res) => {
  Order.findById(req.body.orderID, (err, order) => {
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

// exports.signin = (req, res) => {
//   User.findOne({
//     username: req.body.username
//   })
//     .populate("roles", "-__v")
//     .exec((err, user) => {
//       if (err) {
//         res.status(500).send({ message: err });
//         return;
//       }

//       if (!user) {
//         return res.status(404).send({ message: "User Not found." });
//       }

//       var passwordIsValid = bcrypt.compareSync(
//         req.body.password,
//         user.password
//       );

//       if (!passwordIsValid) {
//         return res.status(401).send({
//           accessToken: null,
//           message: "Invalid Password!"
//         });
//       }

//       var token = jwt.sign({ id: user.id }, config.secret, {
//         expiresIn: 86400 // 24 hours
//       });

//       var authorities = [];

//       for (let i = 0; i < user.roles.length; i++) {
//         authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
//       }
//       res.status(200).send({
//         id: user._id,
//         username: user.username,
//         email: user.email,
//         roles: authorities,
//         accessToken: token
//       });
//     });
// };