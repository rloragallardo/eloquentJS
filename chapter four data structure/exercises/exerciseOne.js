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

const myRangeV2 = (start,end,jumpValue = 1) => {
    let rangeContainer = [];
    for(let i = start; i <= end; i+= jumpValue){
        rangeContainer.push(i);
    }
    return rangeContainer;
}


const second = myRangeV2(5,2,-1)
console.log(second)