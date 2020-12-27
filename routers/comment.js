const  verifyComment  = require("../middlewares/verifyComment.js");
const controller = require("../controllers/comment");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/comment/create",
    [
    //   verifyOrder.checkHaveOrderProcessing
      // verifySignUp.checkRolesExisted
    ],
    controller.create
  );

  app.get(
    "/api/comment/getAllCommentOfPlace/:id",
    controller.listAllCmtOfPlace
  );

  app.put(
    "/api/comment/delete/:id",
    [
        verifyComment.checkCommentIsMine
    ],
    controller.deleteCmt
  );

//   app.put(
//     "/api/order/updateStatus",
//     controller.editStatus
//   );

//   app.post("/api/auth/signin", controller.signin);
};
