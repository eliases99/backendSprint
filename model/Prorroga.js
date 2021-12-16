const mongoose = require("mongoose");

const ProrrogaSchema = mongoose.Schema({
  creador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
  },
  credito: {
    type: String,
    require: true,
    trim: true,
  },
  razon: {
    type: String,
    require: true,
    trim: true,
  },
  cuotas_aplazar: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("Prorroga", ProrrogaSchema);
