const rl = require('readline-sync');

function sumaYMedia (array) {
    let arrayEnNumeros = array.split(',').map(Number);
    let suma = 0;
    for (let i = 0; i < arrayEnNumeros.length; i ++) {
        suma = suma + arrayEnNumeros[i];
    }
    let media = suma / arrayEnNumeros.length;
    return {suma, media};
}

const arrayNumeros = rl.question('Introduce una serie de números (separados por comas): ');

const resultados = sumaYMedia(arrayNumeros);

console.log('La suma de los números es ' + resultados.suma + ' y la media es ' + resultados.media);
