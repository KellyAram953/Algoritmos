function Palindromo(x) {
    let valor = x;   
    let invertido = 0;  
    let digito;

    while (x > 0) {
        digito = x % 10;                        
        invertido = invertido * 10 + digito;    
        x = Math.floor(x / 10);                 
    }

    if (invertido === valor) {
        return true;   
    } else {
        return false;  
    }
}
