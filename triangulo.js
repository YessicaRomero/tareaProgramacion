"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
function calcularAreaTriangulo() {
    var base = rls.questionInt("ingrese la base: ");
    var altura = rls.questionInt("ingrese la altura: ");
    var area = ((base * altura) / 2);
    return area;
}
console.log(calcularAreaTriangulo());
