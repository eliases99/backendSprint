const Usuario = require("../model/Usuario");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function crearUsuario(req, res) {
  console.log(req.body);

  const { identificacion, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ identificacion });
    if (usuario) {
      return res.status(400).json({ msg: "ya existe esta identificacion" });
    }
    // Crea el nuevo usuario
    usuario = new Usuario(req.body);
    // Hasear el password
    const salt = await bcryptjs.genSalt(10);
    usuario.password = await bcryptjs.hash(password, salt);
    // Guardar el nuevo Usuario
    await usuario.save();

    // Crear y firmar el token
    const payload = {
      usuario: {
        id: usuario._id,
      },
    };
    // Firmar el token
    jwt.sign(
      payload,
      process.env.SECRETA,
      {
        expiresIn: 3600, // 1 hora
      },
      (err, token) => {
        if (err) {
          throw err;
        } else {
          // Mensaje de confirmacion
          res.json({ token });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  crearUsuario,
};
