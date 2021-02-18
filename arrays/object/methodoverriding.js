class Parent
{
    phone()
    {
        console.log("have nokia phone");
    }
}
class Child extends Parent
{
   phone()
    {
        super.phone()  // super keyword is used to call parent class method
        console.log("have iphone");
        
    }
}

var obj=new Child
obj.phone()