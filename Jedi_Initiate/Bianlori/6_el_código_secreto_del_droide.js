/* 6. El código secreto del droide (Números primos)
Contexto temático:
R2-D2 ha encontrado un código que solo puede ser descifrado si
 Anakin es capaz de determinar si un número es primo o no.

Objetivo:
Escribe un programa que verifique si un número es primo.

Instrucciones:

La función debe recibir un número entero y determinar si es primo.
Un número primo es aquel que solo es divisible por 1 y por sí mismo.
Pista:
Comprueba si el número es divisible por algún otro número que no sea 1 o él mismo. */
function validarNum(num){
    let resultado =  num % 2
    
    if (resultado === 1){
       console.log(num + " soy impar " + resultado  );
    }
    else{
        console.log(num + " soy par " + resultado );
    }
  return resultado
}
(validarNum(2));
 
