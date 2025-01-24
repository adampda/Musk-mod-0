const rl = require('readline-sync');

function invertirOrden (palabra) {
    const palabraAcomodada = palabra.split('');

    let palabraInvertida = '';

    for (let i = palabraAcomodada.length - 1; i >= 0; i--) {
        palabraInvertida += palabraAcomodada[i];
    }

    return palabraInvertida;
}

const input = rl.question('Introduce una palabra: ');

const resultado = invertirOrden(input);

console.log('La palabra, al invertirla, queda así: ', resultado);