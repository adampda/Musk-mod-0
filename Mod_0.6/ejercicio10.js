const readLine = require('readline-sync');

let num;

const randomNumber = Math.floor(Math.random()*10)+1;

console.log('Estoy pensando un numero del 1 al 10.');

let contadorFallos = 0;

do {
    const input = readLine.question('Adivinalo: ');
    num = parseInt(input);
    
    if (isNaN(num)) {
        console.log('Debe ser un numero entre 1 y 10 en formato number');
    } else if (num !== randomNumber) {
        console.log('Fallaste');
    } contadorFallos++;
    
} while (num !== randomNumber);


console.log('Adivinaste, el numero es: ' + randomNumber + ' ,despues de ' + contadorFallos + ' intentos.');