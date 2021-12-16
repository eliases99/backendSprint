const mongoose = require("mongoose");

const CreditoSchema = mongoose.Schema({
  valor: {
    type: Number,
    require: true,
    trim: true,
  },
  propietario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
  },
  temp_meses: {
    type: Number,
    require: true,
    trim: true,
  },
  nombre_soli: {
    type: String,
    require: true,
    trim: true,
  },
});

module.exports = mongoose.model("Credito", CreditoSchema);
