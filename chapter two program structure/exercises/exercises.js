/*
* Haciendo un triángulo con bucles
Escribe un bucle que realice siete llamadas a console.log para mostrar el
siguiente triángulo:
#
##
###
####
#####
######
#######
Puede ser útil saber que puedes encontrar la longitud de una cadena escribiendo
.length después de ella.
let abc = "abc";
console.log(abc.length); 
 */

// * Mi solucion
let almohadilla = "#";
for(let contador = 0; contador < 7; contador++){
    console.log(almohadilla)
    almohadilla += " #";
}

// ! Solucion alternativa y corta 
// for (let line = "#"; line.length < 8; line += "#") console.log(line);

/*
* FizzBuzz
Escribe un programa que use console.log para imprimir todos los números
del 1 al 100, con dos excepciones. Para los números divisibles por 3, imprime
"Fizz" en lugar del número, y para los números divisibles por 5 (y no por 3),
imprime "Buzz" en su lugar.
Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz
" para los números que son divisibles por 3 y 5 (y sigue imprimiendo "Fizz" o
"Buzz" para los números que son divisibles solo por uno de esos).
(Esto es en realidad una pregunta de entrevista que se ha afirmado que
elimina a un porcentaje significativo de candidatos a programadores. Entonces,
si lo resolviste, tu valor en el mercado laboral acaba de aumentar.) 
 */

// * Mi solucion

for(let contador = 1; contador <= 100; contador++){
    if(contador % 3 ==0 && contador % 5 == 0 ) console.log("FizzBuzz " + contador);
    else if (contador % 3 == 0) console.log("Fizz " + contador);
    else if (contador % 5 ==0) console.log("Buzz " + contador);
    else {
        console.log(contador)
    }
}

// ! Solucion alternativa y corta 

// for (let n = 1; n <= 100; n++) {
//   let output = "";
//   if (n % 3 == 0) output += "Fizz";
//   if (n % 5 == 0) output += "Buzz";
//   console.log(output || n);
// }



/*
* Tablero de ajedrez
Escribe un programa que cree una cadena que represente un tablero de 8x8,
usando caracteres de salto de línea para separar las líneas. En cada posición
del tablero hay un carácter de espacio o un carácter "#". Los caracteres deben
formar un tablero de ajedrez.
Al pasar esta cadena a console.log debería mostrar algo como esto:
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
Cuando tengas un programa que genere este patrón, define una variable size
= 8 y cambia el programa para que funcione para cualquier size, generando
un tablero con el ancho y alto dados.
 */

let size = 8;

let board = "";

for (let y = 0; y < size; y++) 
{
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);