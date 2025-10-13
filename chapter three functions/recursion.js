function power(base, exponent){
    if (exponent==0){
        return 1;
    } else {
        return base* power(base,exponent-1);
    }
}

console.log(power(2,3));

 // ! La recursion es una metodologia que en algunos casos busca simplificar  caminos de bucles, las diferencia es que es mas lento que un bucle.

 // * El programa que definimos en su primera llamada a la funcion tendra los siguientes valores 
 /**
  * base = 2
  * retornara 2 * power(2,2)
  * * Segunda llamada 
  * base = 2 
  * retornara 2 * power(2,1)
  * * tercera llamada 
  * base = 2
  * retornara 1 CASO BASE
  * 
  * 
  * 
  */