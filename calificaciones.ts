import * as rls from "readline-sync";


let nombre : string = rls.question("Ingrese su nombre: ")
 while(nombre.length > 0){
    
     let nota1: number = rls.questionInt("Ingrese Nota de practica: ");
    let nota2: number = rls.questionInt("Ingrese Nota de problemas: ");
    let nota3: number = rls.questionInt("Ingrese Nota de teorico: ");
    let resultado: number = ((nota1 * 0.10) + (nota2 * 0.50) + (nota3 * 0.40));
    
    
if(resultado>0 && resultado<10){
   console.log(resultado) 
} else {
    console.log("error");
} 
nombre = rls.question("Ingrese su nombre: ")
}   