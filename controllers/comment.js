const config = require("../config/auth.config");
const db = require("../models");
const Comment = db.comment;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.create = (req, res) => {
  const comment = new Comment({
    userID: req.body.userID,
    userEmail: req.body.userEmail,
    username: req.body.username,
    placeID:  req.body.placeID,
    avatar: req.body.avatar,
    createdAt: req.body.bookingAt,
    content: req.body.content,
  });

  console.log(req.body.content);

  comment.save((err, comment) => {
    if (err) {
      res.status(500).send({ success : 0, message : "Failed! Please try again" });
      return;
    }

    res.status(201).send({success:1, message: "Comment was created successfully!" });

    
  });
};

exports.listAllCmtOfPlace = (req, res) => {
  Comment.find({
    placeID: req.params.id
  }, (err, comments) => {
    if (err) {
      res.status(500).send({ success : 0, message : "Failed! Please try again" });
      return;
    }

    res.status(201).send({success:1, message: "All comments is listed", comments: comments });
  });
}

exports.deleteCmt = (req, res) => {
  Comment.findOneAndRemove({
    _id: req.params.id
  }, (err, comment) => {
    if (err) {
      res.status(500).send({ success : 0, message : "Failed! Please try again" });
      return;
    }

    res.status(201).send({success:1, message: "Comment has been deleted" });
  });
}

exports.editStatus = (req, res) => {
  Comment.findById(req.body.orderID, (err, comment) => {
      if (err) {
        res.status(500).send({ success : 0, message : "Failed! Please try again" });
        return;
      }
      if (comment.status === "processing") {
        comment.status= "successful"
      }
      else {
        comment.status = "processing"
      }
      comment.save().then(result => {
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