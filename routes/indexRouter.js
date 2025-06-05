const { Router } = require("express");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hi there!",
    user: "Charles",
    added: new Date(),
  },
];

const indexRouter = Router();

indexRouter.get("/", (req, res) =>
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  }),
);

indexRouter.get("/new", (req, res) =>
  res.render("form", {
    title: "New Message Form",
  }),
);

indexRouter.get("/open/:text/:user/:added", (req, res) => {
  res.render("open", {
    text: req.params.text,
    user: req.params.user,
    added: req.params.added,
  });
});

indexRouter.post("/messages", (req, res) => {
  console.log(req.params);
  open = {
    text: req.body.messageContent,
    user: req.body.userName,
    added: req.body.added,
  };
  res.redirect("/messages");
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.messageContent,
    user: req.body.userName,
    added: new Date(),
  });
  res.redirect("/");
});
module.exports = indexRouter;
