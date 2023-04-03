"use strict";
/*Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo
*/
exports.__esModule = true;
var rls = require("readline-sync");
var numero = rls.questionInt("Introduzca un numero positivo o negativo: ");
var maximo = -Infinity;
while (numero !== 0) {
    numero = rls.questionInt("Introduzca un numero positivo o negativo: ");
    if (numero > maximo) {
        maximo = numero;
    }
}
console.log(maximo);
