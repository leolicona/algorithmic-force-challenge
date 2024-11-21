/* 1. Secuencia de Midi-chlorianos (Fibonacci)*/

function numentero(num) {
    if (num <= 1) {
        return 1
    }
    return num * numentero (num - 1);
}
console.log(numentero(20));
