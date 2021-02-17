class Parent{
    m1()
    {
        console.log("inside parent m1 method");
    }
}
class Child extends Parent{
    m2()
    {
        console.log("inside parent m2 method");
    }
}
class subChild extends Child{
     m3()
    {
        console.log("inside parent m3 method");
    }
    

}

var sb=new subChild();
sb.m3();
sb.m2();
sb.m1();
