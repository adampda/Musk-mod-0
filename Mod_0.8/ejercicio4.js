const rl = require('readline-sync');

function palabrasAnagramas (palabra1, palabra2) {
   
    let palabraAnagrama = new Map();
    
    const palabra1Minuscula = palabra1.toLowerCase();
    const palabra2Minuscula = palabra2.toLowerCase();

    if (palabra1Minuscula.length !== palabra2Minuscula.length) {
        return false;
    }
   
    for (let letra of palabra1Minuscula) {
        if (palabraAnagrama.has(letra)) {
            palabraAnagrama.set(letra, palabraAnagrama.get(letra) + 1);
        } else {
            palabraAnagrama.set(letra, 1)
        }
    }
   
    for (let letra of palabra2Minuscula) {
        if (!palabraAnagrama.has(letra)) {
           return false;
        } else {
            palabraAnagrama.set(letra, palabraAnagrama.get(letra) - 1);
        }
        if (palabraAnagrama.get(letra) === 0) {
            palabraAnagrama.delete(letra);
        }
    }
    return palabraAnagrama.size === 0;
}

const palabra1 = rl.question('Dime una palabra: ');
const palabra2 = rl.question('Dame otra palabra: ');

const resultado = palabrasAnagramas(palabra1, palabra2);

if (resultado) {
    console.log('Las palabras son anagramas')
} else {
    console.log('Las palabras no son anagramas')
}