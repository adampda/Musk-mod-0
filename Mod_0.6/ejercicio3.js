const readLine = require("readline-sync");

const input = readLine.question('Introduce un numero: ');

const num = parseInt (input);

if (isNaN(num)) {
    console.log('No me diste ningun numero');
} else if (num < 0) {
    console.log('No puedo calcularlo a un numero negativo');
} else {
    let factorial = 1;
    for (let facto = 1; facto <= num; facto++) {
        factorial *= facto;
    }
    console.log('El factorial de ', num, ' es ', factorial);
}

/*En este ejercicio utilice a chatgpt para encontrar errores en el codigo que originalmente hice
además me quede bastante atascado con que bucle utilizar y no procesaba que debía crear una variable para 
ir guardando el resultado*/