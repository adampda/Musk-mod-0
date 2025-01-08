function quickSort (array) {
    if (array.length <= 1) {
        return array;
    } 
    const temArray = [...array];
    
    let pivot = temArray.pop();
    let derecha = [];
    let izquierda = [];
    for (let i = 0; i < temArray.length; i++) {
        if (temArray[i] < pivot) {
            izquierda.push(temArray[i]);
        } else {
            derecha.push(temArray[i]);
        }
    }
    // return quickSort(izquierda).concat(pivot).concat(quickSort(derecha));
    return [...quickSort(izquierda), pivot, ...quickSort(derecha)];
}

const array = [];

for (let i = 0; i < 100_000; i++) {
    array.push(Math.floor(Math.random() * 1000))
}

console.time('Ha tardado en ordenar el array: ');
quickSort(array);
console.timeEnd('Ha tardado en ordenar el array: ');
