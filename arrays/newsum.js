var arr=[1,2,3,4];
num=7;   //num=7

for (let i = 0; i < arr.length; i++) {
 for(let j=i+1;j<arr.length;j++)
 {
     if(arr[i]+arr[j]==num)
     {
         console.log(arr[i],arr[j]);
         break;
     }
 }
}