const readLine = require("readline-sync");

const input = readLine.question('Dame un numero: ');

const num = parseInt (input);

if (isNaN(num)) {
    console.log('No me diste un numero');
} else {
    for (let i = 1; i <= 10; i++) {
        console.log (num + ' x ' + i + ' = ' + num*i);
    }
}