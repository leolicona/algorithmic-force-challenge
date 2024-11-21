/* 2. El destino del droide (Par o impar) */

function numEntero(a) {
   let resultdo = a % 2;
    if (resultdo === 0) {
        console.log("par : " + a);   
    } else{
        console.log("impar: " + a); 
    }
}
(numEntero(3));

