import * as rls from "readline-sync";
let contraseñaCorrecta = "eureka";
let intento: number = 0;
let contraseña = rls.question("introdusca la contraseña: ")

while (contraseña !== contraseñaCorrecta && intento < 3  ){
 console.log("Vuelva a ingresar la clave");
  contraseña = rls.question("introdusca la contraseña: ")
  intento = intento + 1;
   
}if(contraseña === contraseñaCorrecta){
  console.log("Bienvenido a su pagina web")
} else {
  console.log("ha superado los intentos")
}
  




   