const rl = require('readline-sync');

function elementosUnicos (array) {
    let elementos = array.split(',').map(elemento => elemento.trim());
    let elementosRepetidos = [];
    let elementosVistos = [];
    for (let i = 0; i < elementos.length; i++) {
        if (elementosVistos.includes(elementos[i])) {
            if (!elementosRepetidos.includes(elementos[i])) {
                elementosRepetidos.push(elementos[i]);
            }
        } else {
            elementosVistos.push(elementos[i]);
        }
    }
    return elementosRepetidos.toString();
}

const arrayElementos = rl.question('Introduce una lista de elementos (palabras, numeros, etc...) separados por comas: ');

const resultado = elementosUnicos(arrayElementos);

if (resultado.length === 0) {
    console.log('No hay elementos repetidos')
} else {
    console.log('Los elementos repetidos son: ', resultado);
}