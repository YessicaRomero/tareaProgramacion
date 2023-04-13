"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var contraseñaCorrecta = "eureka";
var intento = 0;
var contraseña = rls.question("introdusca la contraseña: ");
while (contraseña !== contraseñaCorrecta && intento < 3) {
    console.log("Vuelva a ingresar la clave");
    contraseña = rls.question("introdusca la contraseña: ");
    intento = intento + 1;
}
if (contraseña === contraseñaCorrecta) {
    console.log("Bienvenido a su pagina web");
}
else {
    console.log("ha superado los intentos");
}
