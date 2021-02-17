//method overloading =>  same method name and diff no.of atributes
//method overriding



class Maths{
    
    add(num1,num2){
        console.log("inside double eparm method");
    }
    add(num){
        console.log("inside single eparm method");
    }

}
var math=new Maths()
math.add(10)
math.add(50,60)
// recently implemented method will be taken