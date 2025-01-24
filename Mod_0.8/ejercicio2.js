const rl = require('readline-sync');

function compararArrays (array1, array2) {
    let diferentes = [];
    for (let num of array1) {
        if (!array2.includes(num)) {
            diferentes.push(num);
        }
    }
    return diferentes;
}

function diferenciaDeArrays (array1, array2) {
    let resultado = compararArrays(array1, array2).concat(compararArrays(array2, array1));
    return resultado;
}

const input = rl.question('Dame una cadena de numeros (separalos en comas): ').split(',').map(Number);
const input2 = rl.question('Dame otra cadena de la misma forma para compararlas: ').split(',').map(Number);

const resultado = diferenciaDeArrays(input, input2);

console.log('Los numeros que no se repiten son: ', resultado);