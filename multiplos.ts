import * as rls from "readline-sync";

let numero: number = rls.questionInt("ingrese un numero: ");
let numero2: number = rls.questionInt("ingrese otro numero: ");

for(let i =  numero ; i<numero2 ; i++){
  
     let mult: number =  numero * i;
     
        console.log( `${numero} x ${i} = ${mult} `); 
}
