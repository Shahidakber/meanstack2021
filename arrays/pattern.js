var arr=[3,4,5];
 var arr2=[ ]  //[9,8,7]
var sum=0;
for(let num of arr)
{
  sum=sum+num;
  
  
}
for(let num of arr)
{
    arr2.push(sum-num);
}

console.log(arr2);