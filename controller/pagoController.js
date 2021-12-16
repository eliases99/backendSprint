const Pago = require("../model/PagoCredito");
const bcryptjs = require("bcryptjs");
async function pagar(req, res) {
  const { num_tarjeta } = req.body;
  try {
    const pagos = await new Pago(req.body);
    pagos.usuario = req.usuario.id;
    const salt = await bcryptjs.genSalt(10);
    pagos.num_tarjeta = await bcryptjs.hash(num_tarjeta, salt);
    await pagos.save();
    res.status(200).json({ msg: "pago exitoso" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Hubo un error" });
  }
}

module.exports = {
  pagar,
};
