const rl = require('readline-sync');

function matrizCuadrada (numero) {
    let matriz = [];
    for (let i = 0; i < numero; i++) {
        let fila = [];
        for (let j = 0; j < numero; j++) {
            let elemento = i * j;
            fila.push(elemento);
        }
        matriz.push(fila);
    }
    return matriz;
}

const numero = rl.question('Introduce un numero: ');

console.log(matrizCuadrada(numero));