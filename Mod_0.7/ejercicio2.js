const rl = require('readline-sync');

function calcularArea (radio) {
    return Math.PI * radio * radio;
}

const radio = parseInt(rl.question('Introduce el radio: '));

console.log('El área es de ' + calcularArea(radio));