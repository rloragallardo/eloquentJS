/*

 */



const myRange = (start,end) => {
    let rangeContainer = [];
    for(let i = start; i <= end; i++){
        rangeContainer.push(i);
    }
    return rangeContainer;
}

const first = myRange(1,10)
console.log(first)

const mySum = (array) =>{
    let sumContainer = 0;
    for(let number of array){
        sumContainer += number;
    }
    return sumContainer;
}

console.log(mySum(first))


// myRangeV2 tiene que funcionar tanto para salto positivos como negativos 
// por ejemplo si introducimos como valor inicial 5 y valor final 2, esto deberia ir en decremento, con su respectivo salto 

const myRangeV2 = (start,end,jumpValue = 1) => {
    let rangeContainer = [];
    if (start < end){
        for(let i = start; i <= end; i+= jumpValue){
                rangeContainer.push(i);
            }
            return rangeContainer;
    }else {
         for(let i = start; i >= end; i+= jumpValue){
                rangeContainer.push(i);
            }
            return rangeContainer;
    }
    
}


const second = myRangeV2(5,3,-1)
console.log(second)