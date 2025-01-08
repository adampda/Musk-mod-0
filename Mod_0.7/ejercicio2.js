const rl = require('readline-sync');

const radio = parseInt(rl.question('Introduce el radio: '));

function calcularArea (radio) {
    return Math.PI * radio * radio;
}

console.log('El área es de ' + calcularArea(radio));