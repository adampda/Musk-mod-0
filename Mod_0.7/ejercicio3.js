const rl = require('readline-sync');

function areaYCircunferencia (radio) {
    const area = Math.PI*radio*radio;
    const circunferencia = Math.PI*radio*2;
    return {area, circunferencia};
}

const radio = parseInt(rl.question('Introduce el radio del circulo: '));

const resultadoDeLaFuncion = areaYCircunferencia(radio);

console.log('El área del círculo es ' + resultadoDeLaFuncion.area + '\nLa circunferencia del círculo es ' + 
            resultadoDeLaFuncion.circunferencia);