const { Router } = require("express");
const {
  getAllMessages,
  getMessageDetails,
  newMessageForm,
  createNewMessage,
} = require("../controllers/indexController.js");

const indexRouter = Router();

indexRouter.get("/", getAllMessages);
indexRouter.get("/new", newMessageForm);
indexRouter.get("/open/:text/:user/:added", getMessageDetails);
indexRouter.post("/new", createNewMessage);

module.exports = indexRouter;
