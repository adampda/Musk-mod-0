const rl = require('readline-sync');

function matrizDeString (frase) {
    let arrayFrase = frase.split(' ');
    let matriz = [];
    for (let i = 0; i < arrayFrase.length; i += 5) {
        let fila = arrayFrase.slice(i, i + 5);
        matriz.push(fila);
    }
    return matriz;
}

const frase = rl.question('Introduce una frase: ');

console.log(matrizDeString(frase));