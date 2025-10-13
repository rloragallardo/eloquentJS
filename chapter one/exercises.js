// Escribe usando operador ternario:
let edad = 20;


// if (edad >= 18) {
//     puedeVotar = "Sí";
// } else {
//     puedeVotar = "No";
// }

// ! solucion 

let puedeVotar = edad>=18 ? "Si" : "No";
console.log (puedeVotar)

let a = 5, b = 10;

console.log(a == 5);    // ¿true o false?
console.log(b !== 10);  // ¿true o false?
console.log(a > b);     // ¿true o false?
console.log(a <= 5);    // ¿true o false?


// ! operador ternario con multiples condiciones
let temperatura = 28;
let estadoClima;

// Si temperatura > 30: "Caluroso"
// Si temperatura entre 20-30: "Agradable"  
// Si temperatura < 20: "Frío"
// (Usa operador ternario)


// ! solucion

estadoClima = temperatura > 30 ? "Caluroso" : 
                temperatura >= 20 ? "Agradable" : "Frio";

                
let tieneEntrada = true;
let esMiembro = false;

console.log(tieneEntrada || esMiembro);  // ¿Puede entrar?  true
console.log(!tieneEntrada);              // ¿No tiene entrada? false
console.log(!esMiembro && tieneEntrada); // ¿? true 


let numero = 7;

// Usa operador ternario para:
// Si número es par Y mayor que 5: "Cumple"
// Sino: "No cumple"

numero = numero % 2 == 0 && numero > 5 ? "Cumple" : "No cumple";


// ! nivel avanzado 


let puntuacion = 85;
let calificacion;

// Si puntuación >= 90: "A"
// Si puntuación >= 80: "B" 
// Si puntuación >= 70: "C"
// Sino: "D"
// (Usa ternarios anidados)

calificacion =  puntuacion >= 90 ? "A" : 
                puntuacion >= 80 ? "B" : 
                puntuacion >= 70 ? "C" : "D";
calificacion


