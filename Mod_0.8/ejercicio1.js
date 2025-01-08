const rl = require('readline-sync');

function elementosRepetidos (frase) {
    let fraseAcomodada = frase.toLowerCase().split(' ');
    let palabrasRepetidas = new Set();
    let palabrasVistas = new Set();
    for (let i = 0; i < fraseAcomodada.length; i++) {
        for (let palabra of fraseAcomodada) {
            if (palabrasVistas[palabra]) {
                palabrasRepetidas.add(palabra);
            } else {
                palabrasVistas[palabra] = true;
            }
        }
        return [...palabrasRepetidas].join(', ');
    }
}

const frase = rl.question('Introduce una frase: ');

const resultado = elementosRepetidos(frase);

console.log('Los palabras que se repiten en la frase son: ', resultado);