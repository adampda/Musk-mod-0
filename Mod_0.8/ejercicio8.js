const rl = require('readline-sync');

function numeroPrimo (numero) {

    if (numero <= 1 || numero % 2 === 0) return false;
    if (numero === 2) return true;
        
    let raizCuadrada = Math.sqrt(numero);
        
    for (let j = 3; j <= raizCuadrada; j += 2) {
        if (numero % j === 0) return false;
    }
    return true;
}

const numero = parseInt(rl.question('Dame un numero: '));

const resultado = numeroPrimo(numero);

resultado ? console.log(numero, 'es un numero primo') : console.log(numero, 'no es un numero primo');