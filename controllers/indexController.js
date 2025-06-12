const db = require("../db/queries");

async function getAllMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", {
    title: "MiniMessageBoard",
    messages: messages,
  });
}

async function getMessageDetails(req, res) {
  res.render("open", {
    text: req.params.text,
    name: req.params.name,
    added: req.params.added,
  });
}

async function createNewMessage(req, res) {
  const { messageContent, userName } = req.body;
  await db.createMessage({ messageContent, userName });
  res.redirect("/");
}

async function newMessageForm(req, res) {
  res.render("form", {
    title: "New Message Form",
  });
}

module.exports = {
  getAllMessages,
  getMessageDetails,
  createNewMessage,
  newMessageForm,
};
