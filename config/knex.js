const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    port: 5432,
    // password: "postgres",
    password: "postgre",
    database: "Tienda",
  },
});

module.exports = knex;
