
//when the function has one parameter
const doubleIt= num=> num*2 ;
console.log(doubleIt(5));

// when the function has no parameters

const give5 = () =>5;
console.log(give5());
//when the function has multi lines
const bisal = (x,y) =>{
    const sum = x+y;
    const diff = x-y;
    const result = sum * diff;
    return result;
}
console.log( bisal(12, 15));