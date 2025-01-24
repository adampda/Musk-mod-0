const readLine = require('readline-sync');

let num;

do {
    const input = readLine.question('Dime un numero del 0 al 10: ');
    num = parseInt(input);

    if (isNaN(num) || num < 0 || num > 10) {
        console.log('Debe ser un numero y debe estar entre 0 y 10');
    }
} while (isNaN(num) || num < 0 || num > 10);

let numerosEnLetras = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez'];

console.log('Elegiste el numero ' + numerosEnLetras[num])