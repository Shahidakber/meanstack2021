var num=153;
rem=0
sum=0;
a=num;
while(num>0)
{

rem=num%10;

sum=sum+(rem*rem*rem);
num=Math.floor(num/10);
}
console.log(sum);

if(a==sum)
{
    console.log("armstrong");
}
else
{
    console.log("not armstrong");
}