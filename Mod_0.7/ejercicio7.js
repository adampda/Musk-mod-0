const rl = require('readline-sync');

const frase = rl.question('Introduce una frase: ');

function matrizDeString (frase) {
    let arrayFrase = frase.split(' ');
    let matriz = [];
    for (let i = 0; i < arrayFrase.length; i += 5) {
        let fila = arrayFrase.slice(i, i + 5);
        matriz.push(fila);
    }
    return matriz;
}

console.log(matrizDeString(frase));