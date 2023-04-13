"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var base = rls.questionInt("ingrese la base: ");
var exponente = rls.questionInt("ingrese el exponente: ");
var cantidadDeExpo = (Math.pow(base, exponente));
function potencias(base, exponente) {
    return cantidadDeExpo;
}
console.log(base, cantidadDeExpo);
