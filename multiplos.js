"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var numero = rls.questionInt("ingrese un numero: ");
var numero2 = rls.questionInt("ingrese otro numero: ");
for (var i = numero; i < numero2; i++) {
    var mult = numero * i;
    console.log("".concat(numero, " x ").concat(i, " = ").concat(mult, " "));
}
