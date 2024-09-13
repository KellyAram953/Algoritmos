
  
  /**
 * Función para contar cuántas velas tienen la altura más alta.
 * 
 * @param {number[]} arr - Las alturas de las velas.
 * @returns {number} - El número de velas que son las más altas.
 */

function candles(arr) {
  
    let Altura = 0;  
    let contador = 0;   
  
    for (let vela of arr) {
        if (vela > Altura) {
            Altura = vela;   
            contador = 1;        
        } else if (vela === Altura) {
            contador++;          
        }
    }
    
    return contador;
}


  console.log(candles([4, 4, 1, 3])); // 2 
  console.log(candles([1, 1, 1, 1, 1])); // 5 
  console.log(candles([5, 3, 1, 3, 5, 3, 1, 3, 5])); // 3
  console.log(candles([10000, 10001, 10002, 10002, 10000])); // 2
  console.log(candles([999, 1000, 99, 912, 100])); // 1
