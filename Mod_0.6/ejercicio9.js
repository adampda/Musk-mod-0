const readLine = require('readline-sync');

let num;

do {
    const input = readLine.question('Dime un numero del 0 al 10: ');
    num = parseInt(input);

    if (isNaN(num) || num < 0 || num > 10) {
        console.log('Debe ser un numero y debe estar entre 0 y 10');
    }
} while (isNaN(num) || num < 0 || num > 10);

switch (num) {
    case 0:
        console.log('cero');
        break;          
    case 1:
        console.log('uno');
        break;          
    case 2:
        console.log('dos');
        break;          
    case 3:
        console.log('tres');
        break;          
    case 4:
        console.log('cuatro');
        break;          
    case 5:
        console.log('cinco');
        break;          
    case 6:
        console.log('seis');
        break;          
    case 7:
        console.log('siete');
        break;          
    case 8:
        console.log('ocho');
        break;          
    case 9:
        console.log('nueve');
        break;          
    case 10:
        console.log('diez');
        break;          
}

/* en este caso utilice ayuda de IA para saber como estructurar el problema, sabia que debia usar un bucle
y que luego tocaría utilizar una condicional, pero no sabía como plantear el num ni el do while*/