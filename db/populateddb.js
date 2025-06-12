const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  user VARCHAR ( 255 ),
  added TIMESTAMP
);

INSERT INTO messages (message) 
VALUES
  ("Hi there!", "Amando", CURRENT_TIMESTAMP()),
  ("Hi there!", "Charles", CURRENT_TIMESTAMP()),
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    database: process.env.DATABASE,
    host: process.env.host,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
