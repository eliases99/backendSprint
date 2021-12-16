// Importo las rutas necesarias
const usuarios = require("./routes/usuarios");
const credito = require("./routes/credito");
const auth = require("./routes/auth");
const prorroga = require("./routes/prorroga");
const pagos = require("./routes/pagos");
const express = require("express");
const cors = require("cors");
const conexion = require("./config/db");

const app = express();
// puerto de la app
const PORT = process.env.PORT || 4000;
conexion();
app.use(cors());
// Habilitar express.json
app.use(express.json({ extended: true }));

// Importar las rutas
app.use("/api/usuarios", usuarios);
app.use("/api/credito", credito);
app.use("/api/auth", auth);
app.use("/api/prorroga", prorroga);
app.use("/api/pagos", pagos);
app.get("/", (req, res) => {
  res.send("Hola Mundo  ");
});

app.listen(PORT, () => {
  console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});
