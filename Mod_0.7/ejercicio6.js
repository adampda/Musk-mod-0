const rl = require('readline-sync');

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

const parametro = parseInt(rl.question('Introduce un número: '));

console.log(crearMatriz(parametro)); 