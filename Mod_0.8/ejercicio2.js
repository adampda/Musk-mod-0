const rl = require('readline-sync');

function diferenciaDeArrays (array1, array2) {
   let numerosDiferentes = [];
   for (let num of array1) {
    if (!array2.includes(num)) {
        numerosDiferentes.push(num);  
    }
}
for (let num of array2) {
    if (!array1.includes(num)) {
        numerosDiferentes.push(num);  
    } 
}
return numerosDiferentes;
}

const input = rl.question('Dame una cadena de numeros (separalos en comas): ').split(',').map(Number);
const input2 = rl.question('Dame otra cadena de la misma forma para compararlas: ').split(',').map(Number);

const resultado = diferenciaDeArrays(input, input2);

console.log('Los numeros que no se repiten son: ', resultado);