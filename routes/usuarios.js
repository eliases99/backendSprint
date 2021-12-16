const express = require("express");
const usuarioController = require("../controller/usuarioController");
const router = express.Router();
// api/usuarios
router.post("/", usuarioController.crearUsuario);

module.exports = router;
