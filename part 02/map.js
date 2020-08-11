const numbers=[3,4,5,6,7,8];
const output =[];
for(let i=0; i<numbers.length ; i++){
    const element =  numbers[i];
    const result = element * element;
    output.push (result);
}
numbers.map(function(element,index,array){
    console.log(element,index, array);
    console.log(element * element);
})
  const result1 = numbers.map(function(element){
      return element * element;
  })
  console.log(result1);
  const square = numbers.map(x => x*x);
  console.log(square);


// Filter

const bigger = numbers.filter ( x=> x<=5);
console.log(bigger);

// find
 const isThere = numbers.find(x => x > 5);
 console.log(isThere);