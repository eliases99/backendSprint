const jwt = require("jsonwebtoken");

function validar(req, res, next) {
  // Leer el token del header

  const token = req.header("x-auth-token");
  console.log(token);
  //   revisar si no hay token
  if (!token) {
    return res.status(401).json({ msg: "No Hay Token,permiso no valido" });
  }
  // Validar el token
  try {
    const cifrado = jwt.verify(token, process.env.SECRETA);
    req.usuario = cifrado.usuario;
    // Se va a la siguiente funcion
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token no valido" });
  }
}

module.exports = {
  validar,
};
