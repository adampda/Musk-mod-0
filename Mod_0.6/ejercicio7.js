const readLine = require("readline-sync");

const input = readLine.question('Introduce un numero: ');

const num = parseInt (input);

if (isNaN(num)) {
    console.log('No has introducido un numero');
} else {
    for (let asterisco = 1; asterisco <= num * 2 - 1; asterisco += 2) {
        let espacios = (num * 2 - 1 - asterisco) / 2;
        console.log(' '.repeat(espacios) + '*'.repeat(asterisco));
    }
}
