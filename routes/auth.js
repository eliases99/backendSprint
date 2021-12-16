const express = require("express");
const authController = require("../controller/authController");
const router = express.Router();

router.post("/", authController.autenticarUsuario);

module.exports = router;
