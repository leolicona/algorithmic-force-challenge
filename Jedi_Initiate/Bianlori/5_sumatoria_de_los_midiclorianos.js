/* 5. Sumatoria de los midiclorianos (Sumatoria de un rango)*/


function sumando(numUsuario) {
    let suma = 0
        for (let i = 1; i <= numUsuario; i++ ){
        suma = suma + i; /* toma el valor actual de suma y agrégale el valor de i */
        } 
    return suma
}
console.log("la suma de los primeros 100 numeros es : " + sumando(6) );
