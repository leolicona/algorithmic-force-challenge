/* 4. El Misterio del Código Jedi (Suma de dígitos)
Contexto temático:
Mace Windu encuentra un número antiguo grabado en las paredes del Templo Jedi.
 Para descifrar el significado, necesita sumar los dígitos del número.

Objetivo:
Suma los dígitos de un número entero.

Instrucciones:

Escribe una función que reciba un número entero y calcule la suma de sus dígitos.
No se permiten funciones integradas que conviertan el número a cadena de texto.
Pista:
Puedes obtener el último dígito de un número utilizando el operador módulo (%). */
let numero = 1233
function num(numEntero) {
    let residuo = numEntero % 2
    return residuo
}
let resultado = num(numero)
console.log(resultado);
