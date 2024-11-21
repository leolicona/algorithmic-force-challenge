/* 3. El mayor Jedi de Naboo (Máximo de tres números)*/

console.log("sirve");


let numeros = [8, 9, 12]

    if (numeros[0] >= numeros[1] && numeros[0] >= numeros[2]  ){
        console.log(`${numeros[0]} es mayor`);
    } else if ( numeros [1] >= numeros[2]){
        console.log(`${numeros[1]} es mayor`);
    }else {
        console.log(`${numeros[2]} es mayor`);
    }
