/* 2. El Lado Oscuro de las Cadenas (Invertir una cadena)
Contexto temático:
Count Dooku ha escondido un mensaje codificado en la base de datos de los Separatistas. 
Obi-Wan Kenobi debe invertir el código para descifrar su verdadero significado.

Objetivo:
Invierte una cadena de texto.

Instrucciones:

Escribe una función que reciba una cadena y devuelva la cadena invertida.
No utilices funciones integradas de inversión de cadenas.
Pista:
Puedes recorrer la cadena de atrás hacia adelante o utilizar un enfoque recursivo. */
/* 
let numeritos = 0

    while (numeritos  < 10){
        console.log(numeritos)
        numeritos ++
    }
 */
/* 
    function recursiva (numerito) {
        console.log(numerito);
        if(numerito < 5 ){
            return recursiva (numerito + 1)
        }
        else{
            return 5 
        }
    }

 recursiva(1)

 const numeritos = [91,52,33,4,35,6,7,8,91,21,3,1314,1,51,61,5]
 let numerito = 0
 for (let index = 0; index < numeritos.length; index ++){
    numerito = numeritos[index] /* que  umerito sea igual a la posicion de mi lista de numeritos con la que tenga el index  */
    /* console.log({index, numerito}); *//* imprimimos index y numerito pero como un objeto */
    

/*  const numeritos = ["el perro"]
 function recursiva (numberArray){
    if(numberArray.length != 0){
        const firstNumber = numberArray[0];
        console.log(firstNumber);
        numberArray.shift();
        recursiva (numberArray)
    }
 }
 recursiva(numeritos)
 */

let cadenaTexto = "El perro canta"

 
 function invertitCadena(cadena) {
    let cadenaInvertida = "";    
    for (let i = cadena.length -1 ; i >= 0 ; i --){  
       cadenaInvertida  = cadenaInvertida + cadena[i] /*  */
       
    }
    return cadenaInvertida
 }
console.log(invertitCadena(cadenaTexto));
 