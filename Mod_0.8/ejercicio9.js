const rl = require('readline-sync');

function parentesisBalanceados (frase) {
    let pilaParentesis = [];
    let pares = {
        ')' : '(',
    }

    for (let elemento of frase) {
        if (['('].includes(elemento)) {
            pilaParentesis.push(elemento)
        } else if ([')'].includes(elemento)) {
            if (pilaParentesis.pop() !== pares[elemento]) {
                return false;
            }
        }
    }
    return pilaParentesis.length === 0;
}

const frase = rl.question('Introduce una frase con varios parentesis: ');

const resultado = parentesisBalanceados(frase);

if (resultado) {
    console.log('Están balanceados (los parentesis que se abren también se cierran)');
} else {
    console.log('No están balanceados (de los parentesis que se abren, no todos se cierran)');
} 