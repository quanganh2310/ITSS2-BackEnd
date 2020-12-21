const  verifyComboOrder  = require("../middlewares/verifyComboOrder.js");
const controller = require("../controllers/comboOrder");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/comboOrder/create",
    [
      verifyComboOrder.checkHaveOrderProcessing
      // verifySignUp.checkRolesExisted
    ],
    controller.create
  );

  app.get(
    "/api/comboOrder/getAll",
    controller.listAll
  );

  app.put(
    "/api/comboOrder/updateStatus",
    controller.editStatus
  );

//   app.post("/api/auth/signin", controller.signin);
};
