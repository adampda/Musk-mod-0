const rl = require('readline-sync');

function palindromo (frase) {
    let fraseAcomodada = '';
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] !== ' ') {
            fraseAcomodada += frase[i].toLowerCase();
        }
    }
    let fraseAlReves = '';
    for (let i = fraseAcomodada.length - 1; i >= 0; i--) {
        fraseAlReves += fraseAcomodada[i];
    }
    return fraseAcomodada === fraseAlReves;
}

const frase = rl.question('Introduce una frase o palabra: ');

const resultado = palindromo(frase);

if (resultado) {
    console.log('Es una palabra o frase palíndroma');
} else {
    console.log('No es una palabra o frase palíndroma');
}