const { body } = require("express-validator");

const bodyLogin = [
    body("userName", "Introduzca un nombre de usuario valido").trim().notEmpty().escape(),
    body("password", "Introduzca un minimo de 5 caracteres").trim().isLength({ min: 5 }).escape(),
];

const bodyRegister = [
    body("userName", "Enter a valid name!").trim().notEmpty().escape(),
    body("password", "Enter a valid password!").trim().isLength({ min: 5 }).escape(),
    body("email", "Enter a valid email!").trim().isEmail().normalizeEmail(),
];

module.exports = {
    bodyLogin,
    bodyRegister,
}