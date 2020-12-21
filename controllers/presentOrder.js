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