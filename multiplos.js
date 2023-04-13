function esMultiplos(num1, num2) {
    if (num1 % num2 === 0) {
        return ("es multiplo");
    }
    else {
        return "no es multiplo";
    }
}
console.log(esMultiplos(6, 8));
