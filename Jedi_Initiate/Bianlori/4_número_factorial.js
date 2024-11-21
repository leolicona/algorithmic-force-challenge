/* 4. El poder de la Fuerza (Número factorial)*/

 function factorial (numEntero) {
    let factorialNumeroEntero = 1;
    let i = 1;
    while (i <= numEntero) {
        factorialNumeroEntero *= i;
        i++;
    }

    return factorialNumeroEntero;
    
}
console.log(factorial(4));




