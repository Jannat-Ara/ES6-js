class Student{
    constructor(){
        this.id = 1;
        this.name = "Raya";
    }
}
  const student1 = new Student();
  const student2 = new Student();
  console.log(student1 , student2);

//   second way
class Student1{
    constructor(sId , sName){
        this.id = sId;
        this.name = sName;
        this.schoolName = "Narayanganj Ideal School";
    }
}
const student3 = new Student1 (1,"Raya");
const student4 = new Student1 (2,"Sanjana");
console.log( student3, student4);