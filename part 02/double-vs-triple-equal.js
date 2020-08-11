const first= 2;
const second="2";
if(first == second){
    console.log("condition is true for ==");
}
else
{
    console.log(" condition is false for ==");
}

if(first === second){
    console.log("condition is true for ===");
}
else
{
    console.log("condition is false for===");
}

// here first is 2 which is number type on the other hand second is "2" which is string type. If I use double equal than output will be shown same like 2=="2" here output: " condition is true". If I use triple equal than output will be shown not same like 2==="2" here output: "condition is false".
// double equal compares only value rather than comparing both value and type like triple equal.