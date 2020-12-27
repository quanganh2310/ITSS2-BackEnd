const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/presentOrder");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/presentOrder/create",
    // [
    //   verifySignUp.checkDuplicateUsernameOrEmail,
    //   verifySignUp.checkRolesExisted
    // ],
    controller.create
  );

  app.get(
    "/api/presentOrder/getAll",
    controller.listAll
  );

  app.get(
    "/api/presentOrder/getAllOrderOfUser/:id",
    controller.listAllOrderOfUser
  );

  app.put(
    "/api/presentOrder/updateStatus",
    controller.editStatus
  );

  app.put(
    "/api/presentOrder/delete",
    controller.deleteOrder
  );

//   app.post("/api/auth/signin", controller.signin);
};
