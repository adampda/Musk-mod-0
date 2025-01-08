const rl = require('readline-sync');

const radio = parseInt(rl.question('Introduce el radio del circulo: '));

function areaYCircunferencia (radio) {
    const area = Math.PI*radio*radio;
    const circunferencia = Math.PI*radio*2;
    return {area, circunferencia};
}

const resultadoDeLaFuncion = areaYCircunferencia(radio);

console.log('El área del círculo es ' + resultadoDeLaFuncion.area + '\nLa circunferencia del círculo es ' + 
            resultadoDeLaFuncion.circunferencia);