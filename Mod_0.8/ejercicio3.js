const rl = require('readline-sync');

function frecuenciaLetras (frase) {
    const mapaDeFrecuencias = new Map();
    for (let letra of frase) {
        if(mapaDeFrecuencias.has(letra)) {
            mapaDeFrecuencias.set(letra, mapaDeFrecuencias.get(letra) + 1);
        } else {
            mapaDeFrecuencias.set(letra, 1)
        }
    }
    return mapaDeFrecuencias;
}

const input = rl.question('Introduce un texto: ');

console.log('El mapa de frecuencias es: \n', frecuenciaLetras(input));