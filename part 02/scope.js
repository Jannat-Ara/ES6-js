let bonus= 20;
function sum( first, second){
    let result= first+second+bonus;
    console.log(result);
    if(result>9){
        const mood="happy";
        console.log(mood);
        var mood1="funky";
        console.log("For var:",mood1);
    }
    console.log(mood1);
    return result;
}
const output = sum(3,7);
console.log( output);
console.log(bonus);//global scope
