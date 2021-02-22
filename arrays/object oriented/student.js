class Student
{
    static college="luminar"
    constructor(rol,name,course)
    {
        this.rol=rol
        this.name=name
        this.course=course
    }
    printStudent()
    {
        console.log(this.rol+","+this.name+","+this.course+","+Student.college);
    }
}
var stud=new Student(100,"ram","bca")
stud.printStudent()

var stud2=new Student(101,"raju","mca")
stud2.printStudent()
console.log(Student.college);