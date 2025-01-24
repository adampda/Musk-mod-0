const readLine = require("readline-sync");

function positivo (num) {
    return num >= 0;
}
function par (num) {
    return num % 2 === 0;
}

const input = readLine.question ('Introduce un numero: ');
const num = parseInt (input);

const resultadoPositivo = positivo(num);
const resultadoPar = par(num);

if (isNaN(num)) {
    console.log('El numero no es real o no está en formato número')
} else {
    console.log(`El numero es ${resultadoPar ? ' par ' : ' impar '} y también ${resultadoPositivo ? ' positivo.' : ' negativo.'}`)
}