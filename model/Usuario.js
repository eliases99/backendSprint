const mongoose = require("mongoose");

const UsuariosSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  apellidos: { type: String, required: true, trim: true },
  identificacion: { type: Number, required: true, trim: true, unique: true },
  tipo_doc: { type: String, required: true, trim: true },
  fecha_nac: { type: Date, required: true, trim: true },
  fecha_exp: { type: Date, required: true, trim: true },
  valor_ing: { type: Number, required: true, trim: true },
  valor_eg: { type: Number, required: true, trim: true },
  password: { type: String, required: true, trim: true },
});

module.exports = mongoose.model("Usuario", UsuariosSchema);
