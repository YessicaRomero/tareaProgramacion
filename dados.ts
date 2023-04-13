import * as rls from "readline-sync";

let tirarDados : number = rls.questionInt("ingrese la cantidad de dados: ")
let probabilidad = 6 ** tirarDados;
console.log("1 / " + probabilidad);
