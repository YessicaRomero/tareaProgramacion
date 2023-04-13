import * as rls from "readline-sync";


function calcularAreaTriangulo(){
let base : number =  rls.questionInt("ingrese la base: ");
let altura: number = rls.questionInt("ingrese la altura: ");
 var area = ((base * altura)/2)

return area;
 

} 
console.log(calcularAreaTriangulo())