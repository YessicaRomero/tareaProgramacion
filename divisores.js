"use strict";
exports.__esModule = true;
function esMultiplos(num1, num2) {
    if (num1 % num2 === 0) {
        return ("es multiplo");
    }
    else {
        return "no es multiplo";
    }
}
function cantidadDeDivisores(numero) {
    var suma = 0;
    for (var i = 1; i <= numero / 2; i++) {
        if (numero % i === 0) {
            suma++;
        }
    }
    return suma + 1;
}
console.log(cantidadDeDivisores(12));
