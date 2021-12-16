const Credito = require("../model/Credito");

async function crearCredito(req, res) {
  // Crear un nuevo credito
  console.log(req);
  try {
    const credito = new Credito(req.body);
    credito.propietario = req.usuario.id;
    credito.save();
    res.json({ msg: "Solicitud enviada Con exito" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un Error");
  }
}

module.exports = {
  crearCredito,
};
