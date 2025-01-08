const readLine = require("readline-sync");

const input = readLine.question('Dime un año aleatorio: ');

const num = parseInt (input);

const añoBisiesto = (num % 4 === 0) && (num % 100 !== 0 || num % 400 === 0);

if (isNaN(num) || num < 0) {
    console.log('Tiene que ser un numero en formato numero y positivo'); 
} else {
    console.log (añoBisiesto ? 'El año es bisiesto' : 'El año no es bisiesto');
}