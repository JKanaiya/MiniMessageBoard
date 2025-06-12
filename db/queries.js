const pool = require("./pool");

const getAllMessages = async function () {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

const createMessage = async function (message) {
  await pool.query("INSERT INTO messages (message) VALUES ($1, $2, $3)", [
    message.messageContent,
    message.user,
    Date.now(),
  ]);
};

module.exports = {
  getAllMessages,
  createMessage,
};
