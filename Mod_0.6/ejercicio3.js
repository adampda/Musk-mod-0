const readLine = require("readline-sync");

function factorial (num) {
    let resultado = num;
    for (let i = num - 1; i > 0; i--) {
        resultado *= i;
    }
    return resultado;
}

const input = 6;
const num = parseInt (input);

const resultado = factorial(num);

if (isNaN(num) || num < 0) {
    console.log('El numero o su formato no es válido')
} else {
    console.log('El factorial es: ' + resultado)
}