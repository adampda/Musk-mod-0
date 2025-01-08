const readLine = require("readline-sync");

const input = readLine.question('Dame un numero: ');

const num = parseInt (input);

if (isNaN(num)) {
    console.log('No me diste un numero');
} else {
    let multi = 1;
    while (multi <= 10) {
        console.log (num + ' x ' + multi + ' = ' + num*multi);
        multi++;
    }
}