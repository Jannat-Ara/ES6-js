//#1 nothing is assigned to the variable.
let pakhi;
console.log(1,"",pakhi); //output:undefined.


//#2 when we don't return anything in the return statement
function add(num1,num2){
    num1+num2;
    return ;
}
const result = add(10,13);
console.log(2,"",result);

//#3  when parameter is not passed
function add1(num3, num4){
    return num4;
}
const result1= add1(13);
console.log(3,"",result1);

//#4 regarding object parameter
const variable= { name: "Ray" , phone:"017********"};
console.log(4,"",variable.bf);


//#5 call that element from an array which not assigned
let ages=[10, 11, 12];
console.log(5,"",ages[6]);