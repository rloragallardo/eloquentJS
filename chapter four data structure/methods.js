// * Las propiedades que contienen funciones generalmente se llaman métodos del valor al que pertenecen

let secuencia = [1,2,3,4];

secuencia.push(5);
secuencia.push(6);
console.log(secuencia) // Array(6) [ 1, 2, 3, 4, 5, 6 ]
console.log(secuencia.pop()) // 6
console.log(secuencia) // [ 1, 2, 3, 4, 5 ]

// ! en este caso push y pop son metodos push agrega valores al final del array mientras que pop elimina el ultimo elemento del array. Se maneja el concepto de PILA    