const knex = require("../config/knex");

exports.productos = (req, res) => {
  knex("Productos")
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
