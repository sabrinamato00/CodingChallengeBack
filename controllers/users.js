const knex = require("../config/knex");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const TOKEN_SECRET = "ClaveToken";

exports.register = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const contraseña = await bcrypt.hash(req.body.contraseña, salt);
  const newUser = {
    Nombre: req.body.nombre,
    Tipo: req.body.tipo,
    Contraseña: contraseña,
  };
  knex("Usuarios")
    .insert(newUser)
    .then(() => {
      res.status(200).json({ success: true, newUser: newUser });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.login = async (req, res) => {
  const { nombre, contraseña } = req.body;
  await knex("Usuarios")
    .where("Nombre", nombre)
    .then(async (usuarioDB) => {
      let usuario = usuarioDB[0];
      console.log(usuario);
      const validPassword = await bcrypt.compare(
        contraseña,
        usuario.Contraseña
      );
      if (!validPassword) {
        return res.status(400).json({ error: "Contraseña no valida" });
      }
      const token = jwt.sign(
        {
          usuario: usuario.Nombre,
          id: usuario.Id,
        },
        TOKEN_SECRET
      );
      res.json({ error: null, data: "Login exitoso", token });
    });
};
