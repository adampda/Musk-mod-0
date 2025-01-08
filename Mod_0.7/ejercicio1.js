const rl = require('readline-sync');

const radio = parseInt(rl.question('Introduce el radio: '));

function calcularCircunferencia (radio) {
    return 2 * Math.PI * radio;
}

console.log('La circunferencia es de ' + calcularCircunferencia(radio));