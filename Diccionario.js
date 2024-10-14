
function fibonacci(n, dict = {}) {
   
    if (n === 0 || n === 1) {
        return n;
    }
   
    if (dict[n]) {
        return dict[n];
    }
  
    dict[n] = fibonacci(n - 1, dict) + fibonacci(n - 2, dict);
    return dict[n];
}


let numero = 10;
console.log(fibonacci(numero)); // Salida: 55 (el término 10 de Fibonacci)
