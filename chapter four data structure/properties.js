// ! Casi todos los valores en JS tienen propiedades, en casos anteriores estuvimos accediendo a las propiedades del objeto Math con Math.max y a las propiedades de las cadenas con cadena.length

// ! Existen dos formas de acceder a una propiedad

let miCadena = "Es una prueba";

// * Primera forma 

console.log(miCadena.length);

// * Segunda forma 

const i = "length"
console.log(miCadena[i]);

// Para la segunda forma, el valor que se pasa entre corchetes JS lo interpreta como una cadena, por lo cual si pasamos una variable deberiamos definir su valor antes.
