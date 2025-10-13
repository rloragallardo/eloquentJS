// * la funciones se declaran de la siguiente manera 

const suma = function (a,b){
    return a+b;
}

/*
    *Es una manera estandar de crearlas 
    *Los valores a,b encerrados entre parentesis se llaman parametros
    *Dichos paramatros se pasan cuando se llama a la funcion 
    *Estos mismos nos ayudaran con calculos dentro de la misma funcion, ya que el alcance es solo dentro de la funcion
    *Cualquier variable que se declare dentro de la funcion solo tendra el alcance local
 */

// * existen aun dos formas mas de declarar una funcion 

// * 2da forma 

function cuadrado(x){
    return x*x;
}

// * 3ra forma -- FUNCION FLECHA

const resta = (n1,n2)=>{
    return n2-n1;
}

// ! si la lista de paremetros incluye solo uno, se puede omitir los parentesis, y si el cuerpo de la funcion solo consta de una expresion se puede omitir las llaves



const corto = y => n2-n1

