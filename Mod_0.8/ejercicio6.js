function bubbleSort (array) {
    let cambiado;
    do {
        cambiado = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let guardado = array[i];
                array[i] = array[i + 1];
                array[i + 1] = guardado;
                cambiado = true;
            }
        }
    } while (cambiado)
    }
    
    const arrayAleatorio = Array.from({length: 100000}, () => Math.random());
    
    console.time('Para ordenar los 100 000 elementos ha tardado');
    bubbleSort(arrayAleatorio);
    console.timeEnd('Para ordenar los 100 000 elementos ha tardado')