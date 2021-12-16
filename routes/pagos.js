const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const pagoController = require("../controller/pagoController");
// api/pagos
router.post("/", auth.validar, pagoController.pagar);

module.exports = router;
