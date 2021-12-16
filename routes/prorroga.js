const express = require("express");
const prorroga = require("../controller/prorrogaController");
const auth = require("../middleware/auth");
const router = express.Router();
// api/prorroga
router.get("/", auth.validar, prorroga.obtenerCredito);
router.post("/", auth.validar, prorroga.insertarProrroga);

module.exports = router;
