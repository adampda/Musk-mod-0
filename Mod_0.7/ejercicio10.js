const rl = require('readline-sync');

function matriz (fila) {
    return fila.split(',').map(Number);   
}

function crearMatrizTraspuesta (matriz) {
    let matrizT = [];
    for (let i = 0; i < matriz.length; i++) {
        let fila = [];
        for (let j = 0; j < matriz[i].length; j++) {
            fila.push(matriz[j][i]);
        }
        matrizT.push(fila);
    }
    return matrizT;
}

const filas = parseInt(rl.question('Cuantas filas quieres que tenga la matriz? '));

let matrizEstandar = [];

for (let i = 0; i < filas; i++) {
    let numeros = rl.question('Dame los elementos de una fila: ');
    matrizEstandar.push(matriz(numeros));
}

console.log('La matriz que introdujiste es: ', matrizEstandar);

console.log('La traspuesta de la misma es: ', crearMatrizTraspuesta(matrizEstandar));