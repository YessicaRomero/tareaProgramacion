import * as rls from "readline-sync";



function esMultiplos(num1: number, num2: number) {
  if (num1 % num2===0) {
    return ("es multiplo");
  } else {
    return "no es multiplo";
  }
}

function cantidadDeDivisores(numero:number){
  let suma = 0;
for(let i = 1 ;i<=numero/2;i++){
  if (numero% i===0){
  
   suma++
  }
 
     
  }  return suma +1
}
console.log(cantidadDeDivisores(12))