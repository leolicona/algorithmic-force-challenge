/* 8. El ranking de los pilotos (Ordenar lista de números) */
let array = [1,13,5,10,7,12,26,19,0]

for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) { // Intercambiamos los elementos si no están en orden
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }    
}
console.log(array);
