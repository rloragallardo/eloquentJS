// la palabra clave para crear un condicional o un flujo de programa que no sea lineal es IF

let elNumero = Number(prompt("Elige un numero"));
if (!Number.isNaN(elNumero)){
    console.log("Tu numero es la raiz cuadrada de " + elNumero * elNumero);
    }

//  las llaves despues de la condicion que esta encerrada entre parentesis se llama
//   bloque de sentencias y se usa para agrupar sentencias 
// pero cuando se trata de una sola se puede omitir 

if (1 + 1 == 2) console.log ("Es verdad")


//else 

let elNumeroElse = Number(prompt("Elegi un numero"));
if (!Number.isNaN(elNumeroElse)){
    console.log("Tu numero es la raiz cuadrada de " + elNumeroElse * elNumeroElse);
}else {
    console.log("Oye por que no me diste un numero");
}

// si tienes multiples caminos en tu flujo, puedes anidar condicionales

let num = Number(prompt("Escoge un numero"));
if(num < 10) console.log("Pequeño")
else if(num < 100) console.log("Mediano")
else console.log("Grande")

// BUCLES
// WHILE 