const rl = require('readline-sync');

function secuenciaCorrecta (frase) {
   let pilaDePares = [];
   let pares = {
    '}' : '{',
    ']' : '[',
    ')' : '(',
   }

   for (let elemento of frase) {
    if (['{', '[', '('].includes(elemento)) {
        pilaDePares.push(elemento);
    } else if (['}', ']', ')'].includes(elemento)) {
        if (pilaDePares.pop() !== pares[elemento]) {
            return false;
        }
    }
   }
   return pilaDePares.length === 0;
}

const frase = rl.question('Introduce una sucesion de llaves, corchetes y parentesis: ');

const resultado = secuenciaCorrecta(frase);

if (resultado) {
    console.log('La secuencia es correcta');
} else {
    console.log('La secuencia no esta completa o es incorrecta');
}