const express = require("express");
const indexRouter = require("./routes/indexRouter");
const app = express();
const path = require("node:path");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express Listening on PORT: ${PORT}`);
});
