"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var tirarDados = rls.questionInt("ingrese la cantidad de dados: ");
var probabilidad = Math.pow(6, tirarDados);
console.log("1 / " + probabilidad);
