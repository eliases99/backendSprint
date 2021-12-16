const Usuario = require("../model/Usuario");
const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function autenticarUsuario(req, res) {
  // revisar los errores

  // Extraer la identificacion y el password
  const { identificacion, password } = req.body;

  try {
    //   Revisar si hay un usuario registrado
    let usuario = await Usuario.findOne({ identificacion });
    if (!usuario) {
      return res.status(400).json({ msg: "El usuario no existe" });
    }

    // revisar el password
    const passCorrecto = await bcryptjs.compare(password, usuario.password);
    if (!passCorrecto) {
      return res.status(400).json({ msg: "Password Incorrecto" });
    }
    // Si todo es correcto
    // Crear y firmar el token
    const payload = {
      usuario: {
        id: usuario.id,
      },
    };
    // firmar el token
    jwt.sign(
      payload,
      process.env.SECRETA,
      {
        expiresIn: 3600, // 1 hora
      },
      (error, token) => {
        if (error) {
          throw error;
        }
        // Mensaje de confirmacion
        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  autenticarUsuario,
};
