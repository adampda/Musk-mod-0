const rl = require('readline-sync');

const numero = rl.question('Introduce un numero: ');

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

console.log(matrizCuadrada(numero));