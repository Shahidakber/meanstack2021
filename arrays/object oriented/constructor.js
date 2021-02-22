class Person{
    constructor(name,age,gender)  //construcor keyword is used to initiliaze constructor
    {
        this.name=name;
        this.age=age;
        this.gender=gender;
    
    }
    printPerson()
        {
            console.log(this.name);
            console.log(this.age);
            console.log(this.gender);

        }
    

}
var obj=new Person("ram",25,"male")  //constructor 
console.log(obj);