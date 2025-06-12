const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR(255),
  name VARCHAR(255),
  added TIMESTAMP
);

INSERT INTO messages (text, name, added) 
VALUES
  ('Hi there!', 'Amando', now()),
  ('Hi there!', 'Charles', now());
`;
async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
