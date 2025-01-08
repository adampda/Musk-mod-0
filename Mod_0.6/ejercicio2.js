const readLine = require("readline-sync");

const input = readLine.question ('Introduce un numero: ');
const input2 = readLine.question ('Introduce otro numero: ');
const input3 = readLine.question ('Introduce otro numero: ');

const num = parseInt(input);
const num2 = parseInt(input2);
const num3 = parseInt(input3);

if (isNaN(num) || isNaN(num2) || isNaN(num3)) { 
    console.log('No me has dado 3 numeros');
} else if (num % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
    console.log('Alguno de los valores es par')
} else {
    console.log('No hay ningun valor par')
}