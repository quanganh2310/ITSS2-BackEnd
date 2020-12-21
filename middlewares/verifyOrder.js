const db = require("../models");
const Order = db.order;

checkHaveOrderProcessing = (req, res, next) => {
  // Username
  Order.findOne({
    status: "processing",
    userID: req.body.userID,
    placeID: req.body.placeID,
  }).exec((err, order) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (order) {
      res.status(201).send({ success:0, message: "Failed! You have an order of this place is processing. Please wait until process succesful!" });
      return;
    }

    next();

    // Email
    // User.findOne({
    //   email: req.body.email
    // }).exec((err, user) => {
    //   if (err) {
    //     res.status(500).send({ message: err });
    //     return;
    //   }

    //   if (user) {
    //     res.status(400).send({ message: "Failed! Email is already in use!" });
    //     return;
    //   }

    //   next();
    // });
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

const verifyOrder = {
  checkHaveOrderProcessing
//   checkRolesExisted
};

module.exports = verifyOrder;