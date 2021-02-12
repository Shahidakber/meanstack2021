var i=1
while(i<50)
{
    if(i%15==0)
    {
        console.log("Fizzbuzz");
    }
    else if(i%3==0)
    {
        console.log("fizz");

    }
    else if(i%5==0)
    {
        console.log("buzz");
        
    }
    else
    {
        console.log(i);
    }
    i++;
}