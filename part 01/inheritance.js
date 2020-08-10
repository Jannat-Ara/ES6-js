class Parent{
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
       return  this.name +" "+this.fatherName;
    }
}

const baby = new Child("Arnold");
console.log( baby);
const baby1 = new Child("Tom");
console.log( baby1);
console.log(baby.getFullName());
console.log(baby1.getFullName());