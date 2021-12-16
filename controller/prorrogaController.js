const Credito = require("../model/Credito");
const Prorroga = require("../model/Prorroga");
async function obtenerCredito(req, res) {
  try {
    const prorroga = await Credito.find({ propietario: req.usuario.id });
    console.log(prorroga);
    // Comprobar que los creditos sean del usuario para realizar la prorroga
    if (prorroga.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No autorizado" });
    }
    res.json({ prorroga });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo Un Error ");
  }
}

async function insertarProrroga(req, res) {
  try {
    const prorroga = await new Prorroga(req.body);
    prorroga.creador = req.usuario.id;
    await prorroga.save();
    res.status(200).json({ msg: "Solicitud enviada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).send("Hubo un error");
  }
}

module.exports = {
  obtenerCredito,
  insertarProrroga,
};
