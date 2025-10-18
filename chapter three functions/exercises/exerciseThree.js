/**
 * Contando frijoles
Puedes obtener el *ésimo carácter, o letra, de una cadena escribiendo [N] después
de la cadena (por ejemplo, cadena[2]). El valor resultante será una
cadena que contiene solo un carácter (por ejemplo, "b"). El primer carácter
tiene la posición 0, lo que hace que el último se encuentre en la posición cadena
.length - 1. En otras palabras, una cadena de dos caracteres tiene longitud
2, y sus caracteres tienen posiciones 0 y 1.
Escribe una función contarBs que tome una cadena como único argumento
y devuelva un número que indique cuántos caracteres B en mayúscula hay en
la cadena.
A continuación, escribe una función llamada contarCaracter que se comporte
como contarBs, excepto que toma un segundo argumento que indica el
carácter que se va a contar (en lugar de contar solo caracteres B en mayúscula).
Reescribe contarBs para hacer uso de esta nueva función.
 */

const contarBs = (string) =>{
    contador = 0;
    for (i = 0; i <= string.length;i++)
    {
        if (string[i] === "B"){
            contador++;
        }
    }
    return contador;
}

const contarCaracter = (string,caracter) => {
    contador = 0;
    for (i = 0; i<= string.length;i++){
        if(string[i] === caracter){
            contador++;
        }
    }
    return contador;
}

