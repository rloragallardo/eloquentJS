const reverseArray = (array) => {
  let invertArray = [];
  for (let element of array) {
    invertArray.unshift(element);
  }
  return invertArray;
};

console.log(reverseArray([1,2,3,4]))



let numeros = [1,2,3,4,5,6,7]
console.log(numeros.length)

  
console.log(reverseArrayInPlace(numeros));

function reverseArrayInPlace(array) { 
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

