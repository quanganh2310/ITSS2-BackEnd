const  verifyComment  = require("../middlewares/verifyComment.js");
const controller = require("../controllers/presentComment");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/presentComment/create",
    [
    //   verifyOrder.checkHaveOrderProcessing
      // verifySignUp.checkRolesExisted
    ],
    controller.create
  );

  app.get(
    "/api/presentComment/getAllCommentOfPresent/:id",
    controller.listAllCmtOfPresent
  );

  app.put(
    "/api/presentComment/delete/:id",
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
