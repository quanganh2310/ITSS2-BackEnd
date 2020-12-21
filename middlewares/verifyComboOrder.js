const db = require("../models");
const ComboOrder = db.comboOrder;

checkHaveOrderProcessing = (req, res, next) => {
  // Username
  ComboOrder.findOne({
    status: "processing",
    userID: req.body.userID,
    comboID: req.body.comboID,
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
});
};

const verifyComboOrder = {
  checkHaveOrderProcessing
};

module.exports = verifyComboOrder;