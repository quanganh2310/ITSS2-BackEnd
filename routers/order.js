const  verifyOrder  = require("../middlewares/verifyOrder.js");
const controller = require("../controllers/order");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/order/create",
    [
      verifyOrder.checkHaveOrderProcessing
      // verifySignUp.checkRolesExisted
    ],
    controller.create
  );

  app.get(
    "/api/order/getAll",
    controller.listAll
  );

  app.get(
    "/api/order/getAllOrderOfUser/:id",
    controller.listAllOrderOfUser
  );

  app.put(
    "/api/order/updateStatus",
    controller.editStatus
  );

  app.put(
    "/api/order/delete",
    controller.deleteOrder
  );

//   app.post("/api/auth/signin", controller.signin);
};
