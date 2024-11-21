/* 7. El canto de los Ewoks (Contador de vocales)
Contexto temático:
Durante una celebración en Endor, los Ewoks cantan una canción de victoria. 
Tu misión es contar cuántas vocales tiene la canción.

Objetivo:
Cuenta el número de vocales en una cadena de texto.

Instrucciones:

La función debe recibir una cadena de texto y devolver cuántas vocales contiene.
Considera las vocales tanto en minúsculas como en mayúsculas.
Pista:
Puedes recorrer la cadena y verificar si cada carácter es una vocal.

*/  /*  if ("aeiou".includes(vocales[i]) ){
            return true 
        } */

function contadorDeVocales(canto) {

    let vocales = "aeiouAEIOU"
    let numVocales = 0
    for (let i = 0; i < canto.length; i++){
     console.log("canto",canto[i]);
        for (let j = 0; j < vocales.length; j++) {
       console.log("vocales",vocales[j]);
            if ( canto[i] === vocales[j] ){
                numVocales = numVocales + 1
       }
     }
    } 
    return numVocales
}

let cancion = "El perro canta bonito"
console.log(contadorDeVocales(cancion))