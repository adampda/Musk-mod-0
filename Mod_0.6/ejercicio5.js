const readLine = require("readline-sync");

const input = readLine.question('Introduce una frase: ');

const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

let contadorVocales = 0;

for (let voc of input) {
    if (vocales.includes(voc)) {
        contadorVocales++;
    }
}

console.log('En la frase ' + '"' + input + '"' + ' hay ' + contadorVocales + ' vocales.');

/* Recurri en este caso a contenido gratuito online sobre el bucle for para descubirir el for of*/