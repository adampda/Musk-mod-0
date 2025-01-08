const readLine = require("readline-sync");

const input = readLine.question ('Introduce un numero: ');

const num = parseInt (input);
 
if (isNaN(num)) {
    console.log('No has introducido un numero');
} else {
    if (num >= 0 && num % 2 == 0) {
        console.log('El numero es positivo y par');    
    } else if (num < 0 && num % 2 != 0) {
        console.log('El numero es negativo e impar');
    } else if (num >= 0 && num % 2 != 0) {
        console.log ('El numero es positivo e impar')
    } else if (num < 0 && num % 2 == 0) {
        console.log ('El numero es negativo y par')
    } 
}