function busquedaBinaria(A, elem, inicio, fin) {
   
    if (inicio > fin) {
        return -1;  
    }

    const medio = Math.floor((inicio + fin) / 2);

    
    if (A[medio] === elem) {
        return medio;  
    }

    if (elem < A[medio]) {
        return busquedaBinaria(A, elem, inicio, medio - 1);
    } else {
        return busquedaBinaria(A, elem, medio + 1, fin);
    }
}
