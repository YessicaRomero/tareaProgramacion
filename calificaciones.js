"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var nombre = rls.question("Ingrese su nombre: ");
while (nombre.length > 0) {
    var nota1 = rls.questionInt("Ingrese Nota de practica: ");
    var nota2 = rls.questionInt("Ingrese Nota de problemas: ");
    var nota3 = rls.questionInt("Ingrese Nota de teorico: ");
    var resultado = ((nota1 * 0.10) + (nota2 * 0.50) + (nota3 * 0.40));
    if (resultado > 0 && resultado < 10) {
        console.log(resultado);
    }
    else {
        console.log("error");
    }
    nombre = rls.question("Ingrese su nombre: ");
}
