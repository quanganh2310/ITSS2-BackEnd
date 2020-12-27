// const { verifyComment } = require(".");
const db = require("../models");
const Comment = db.comment;

checkCommentIsMine = (req, res, next) => {
  // Username
  Comment.findOne({
    _id: req.params.id
  }).exec((err, comment) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (comment.userID != req.body.userID) {
      res.status(500).send({ success:0, message: "Failed! You have an order of this place is processing. Please wait until process succesful!" });
      return;
    }

    next();
  });
};

// checkRolesExisted = (req, res, next) => {
//   if (req.body.roles) {
//     for (let i = 0; i < req.body.roles.length; i++) {
//       if (!ROLES.includes(req.body.roles[i])) {
//         res.status(400).send({
//           message: `Failed! Role ${req.body.roles[i]} does not exist!`
//         });
//         return;
//       }
//     }
//   }

//   next();
// };

const verifyComment = {
  checkCommentIsMine
//   checkRolesExisted
};

module.exports = verifyComment;