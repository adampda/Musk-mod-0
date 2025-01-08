const readLine = require("readline-sync");

const altura = readLine.question('Introduce la altura del rectangulo: ');
const base = readLine.question('Introduce el ancho de la base: ');

const num = (parseInt(altura));
const num2 = (parseInt(base));

if (isNaN(num) || isNaN(num2)) {
    console.log('Alguno de los valores no es valido');
} else {
    for (let asterisco = 0; asterisco < num; asterisco++){
        if (asterisco === 0 || asterisco === num - 1) {
            console.log('*'.repeat(num2));
        } else {
            console.log('*' + ' '.repeat(num2 - 2) + '*');
        }
    }
}

/* en este caso logre despues de pensar el como hacer los espacios huecos con el '*' + ' ' + '*' pero el codigo que probe no 
funcionaba por lo que utilice chat gpt para que me ayudase con la primera y ultima fila de asteriscos*/