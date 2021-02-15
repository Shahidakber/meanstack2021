var arr=[1,2,5,20,11]
arr.sort((o1,o2)=>o1<o2?-1:1)   //arr.sort((o1,o2)=>o1-o2
console.log(arr);

element=11;
var flag=0;
var low=0,upp=arr.length-1;
while (low<upp)
{
    let mid=Math.floor((low+upp)/2);
    if (element>arr[mid])
    {
        low=mid+1;
    }
      
    else if(element<arr[mid])
    {
        upp=mid-1;
    }
        
    else if (element==arr[mid])
    {
        flag=1;
        break

    }
         
}
if (flag==1)
  console.log("element Found");
else
  console.log("Not Found");