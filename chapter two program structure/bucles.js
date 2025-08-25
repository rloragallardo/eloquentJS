// BUCLES 
// WHILE 
let numero = 0;

while (numero <= 12){
    console.log(numero);
    numero = numero + 2;
}

// para una potencia 

let resultado = 1
let contador = 0
while (contador < 10) {
    resultado = resultado * 2;
    contador = contador + 1;
}
console.log(resultado)


// DO WHILE 
// a diferencia de while do while ejecuta su bloque de sentencias al menos una vez antes de entrar en estado de bucle 

let tuNombre;
console.log(typeof tuNombre);
do {
    tuNombre = prompt("Ingresa tu nombre")
}
while (!tuNombre);
console.log("Hola " + tuNombre);

// NOTA : Los bucles while y do while, siempre necesitaran inicializar un contador para hacer el seguimiento al bucle 
// debido a que esta estructura (contador, condicion) de los bucles, la mayoria de los lenguajes incluyen un nuevo
// bucle llamado FOR que es mas completo y mas corto

// FOR 

//ejemplo del while con for
for (let numeroFor = 0; numeroFor <= 12; numeroFor = numeroFor + 2){
    console.log(numeroFor);
}

// ejemplo de la potencia con for 
let multiplo = 1;
for (let potenciaFor = 0; potenciaFor < 10;potenciaFor = potenciaFor + 1){
    multiplo = multiplo * 2;
}
console.log(multiplo);

// SALIENDO DE UN BUCLE 

/* 
    *No solo se puede salir de un bucle forzando un estado booleano FALSE, tambien existe 
    *la palabra clave BREAK
*/

// ! Programa que encuentre el primer numero mayor o igual a 20, y que sea divisible entre 7

for (let actual = 20; ;actual = actual +1){
    if (actual % 7 == 0){
        console.log(actual);
        break;
    }
}

// ! Si break no cortaria el flujo del programa, estariamos en un bucle infinito 

// ! El uso de la palabra clave CONTINUE es similar al de break, con la diferencia de que BREAK corta el flujo 
// ! definitivamente mientras que el de CONTINUE corta el flujo en una iteracion, siendo que la iteracion siguiente
// ! a esa siga estando dentro del flujo del programa 

// * Actualizacion concisa de enlaces
// * Generalmente cuando usamos bucles, tenemos un contador, el cual indicara el estado de nuestro bucle
// * Es necesario actualizar este contador para que el bucle termine cuando deseamos

// ! Las maneras cortas de hacerlo 

// * En los ejemplos anteriores siempre actualizamos el iterador de forma contador = contador + 1
// * pero hay una forma mas corta de hacerlo 


counter = 1

counter = counter + 1

counter += 1;

counter++

counter -= 1;
counter--;
counter *=2
