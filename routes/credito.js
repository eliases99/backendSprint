const express = require("express");
const creditoController = require("../controller/creditoController");
const auth = require("../middleware/auth");
const router = express.Router();

// api/credito
router.post("/", auth.validar, creditoController.crearCredito);
router.get("/", auth.validar, creditoController.crearCredito);

module.exports = router;
