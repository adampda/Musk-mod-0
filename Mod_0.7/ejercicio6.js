const rl = require('readline-sync');

const parametro = parseInt(rl.question('Introduce un número: '));

function crearMatriz (numero) {
    let matriz = [];
    let numerosDeLaMatriz = 1;
    for (let i = 0; i < numero; i++) {
        let fila = [];
        for (let j = 0; j < numero; j++) {
            fila.push(numerosDeLaMatriz);
            numerosDeLaMatriz++;
        }
        matriz.push(fila);
    }
    return matriz;
}

console.log(crearMatriz(parametro)); 