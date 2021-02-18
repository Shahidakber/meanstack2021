class Employee
{
    constructor(id,name,design,salary){
    this.id=id
    this.name=name
    this.design=design
    this.salary=salary
    
    }
}

var obj=new Employee(100,"ajay","developer",25000)
var obj1=new Employee(101,"ram","developer",26000)
var obj2=new Employee(102,"raj","qa",26000)
var obj3=new Employee(103,"ramu","qa",27000)

var employee=[]
employee.push(obj)
employee.push(obj1)
employee.push(obj2)
employee.push(obj3)

var ename=employee.map(emp=>emp.name.toUpperCase())
console.log(ename);
var devops=employee.filter(emp=>emp.design=="developer").forEach(o=>console.log(o.name))

var max=employee.map(emp=>emp.salary).reduce((o1,o2)=>o1>o2?o1:o2);
console.log(max);
