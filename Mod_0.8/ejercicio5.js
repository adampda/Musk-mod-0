const rl = require('readline-sync');

function invertirOrden (palabra) {
    const palabraAcomodada = palabra.split('');
    const palabraSeparada = [];
    let palabraInvertida = [];
    
    for (let i = 0; i < palabraAcomodada.length; i++) {
        palabraSeparada.push(palabraAcomodada[i])
    }
    for (let j = palabraSeparada.length - 1; j >= 0; j--) {
        palabraInvertida.push(palabraSeparada.pop());
    }
    
    return palabraInvertida.join('');
}

const input = rl.question('Introduce una palabra: ');

const resultado = invertirOrden(input);

console.log('La palabra, al invertirla, queda así: ', resultado);