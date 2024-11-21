/* 3. El Mayor Caballero Jedi */
const numeros = [9,30,20]

function numeroMayor(numeros) {
    let numMayor = numeros[0];/* iniciamos con la primera pocicion del array */
    for (let i = 1 ; i < numeros.length; i++){ 
        if (numeros [i] > numMayor ) {// Comparamos el elemento actual con el mayor
            numMayor = numeros[i] // Si es mayor, actualizamos el valor de 'mayor'
        }
    }
    return numMayor
}
let resultado = numeroMayor(numeros)
console.log(resultado);

 