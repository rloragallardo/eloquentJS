// ! Los valores del tipo object son colecciones arbitrarias de propiedades
// ! Una forma de crear un objeto es usando llaves como una expresion

// ! Dentro de las llaves, se escribe una lista de propiedades separadas por comas. Cada propiedad tiene un nombre seguido por dos puntos y un valor.  

let dia1 = {
    hombreArdilla : false ,
    eventos : ["trabajo", "toco arbol", "pizza", "correr"]
};

console.log(dia1.hombreArdilla)

// ! OPERADOR DELETE (UNARIO)
// ! ELIMINA UNA PROPIEDAD DE UN OBJETO 

delete dia1.hombreArdilla;
console.log(dia1.hombreArdilla)

// ! OPEREADOR IN (BINARIO)

console.log("hombreArdilla" in dia1);
console.log("eventos" in dia1);

// * El operador binario in, cuando se aplica a una cadena y un objeto, te dice si ese objeto tiene una propiedad con ese nombre
/* 
*La diferencia entre establecer
*una propiedad como undefined y realmente borrarla es que, en el primer caso,
*el objeto todavía tiene la propiedad (simplemente no tiene un valor muy interesante),
*mientras que en el segundo caso la propiedad ya no está presente y
*in devolverá false
*/

// ! Una forma para ver las propiedades de los objetos.
console.log(Object.assign(dia1))