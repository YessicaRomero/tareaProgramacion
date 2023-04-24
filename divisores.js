var num1 = 0;
var num2 = 0;
var suma = 0;
function esMultiplo(num1, num2) {
    if (num1 % num2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
function cantidadDeDivisores(numero) {
    var suma = 0;
    for (var i = 1; i <= numero; i++) {
        if (esMultiplo(numero, i)) {
            suma++;
        }
    }
    return suma;
}
console.log(cantidadDeDivisores(16));
