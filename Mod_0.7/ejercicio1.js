const rl = require('readline-sync');

function calcularCircunferencia (radio) {
    return 2 * Math.PI * radio;
}

const radio = parseInt(rl.question('Introduce el radio: '));

console.log('La circunferencia es de ' + calcularCircunferencia(radio));