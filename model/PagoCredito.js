const mongoose = require("mongoose");

const PagoCreditoSchema = mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
  },
  serv_pagar: {
    type: String,
    trim: true,
    require: true,
  },
  num_tarjeta: {
    type: String,
    require: true,
    trim: true,
  },
  num_doucumento: {
    type: Number,
    require: true,
    trim: true,
  },
  valor_pago: {
    type: Number,
    require: true,
    trim: true,
  },
  comentario: {
    type: String,
    trim: true,
  },
  fecha_pago: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("PagoCredito", PagoCreditoSchema);
