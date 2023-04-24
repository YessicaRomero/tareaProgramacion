
let num1:number=0;
let num2:number=0;
let suma:number = 0;




function esMultiplo(num1: number, num2: number) {
  if (num1 % num2 === 0) {
    return true
  } else {
    return false
  }
}


function cantidadDeDivisores(numero: number) {
  let suma = 0;
  for (let i = 1; i <= numero; i++){
    if(esMultiplo(numero, i)){
      suma++
    }
  }
  return suma;
}

console.log(cantidadDeDivisores(16));

