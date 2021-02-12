var arr= [10,11,12,13,14]
sum=0;
// for(i=0;i<arr.length;i++)
// {
//     sum=sum+arr[i];
// }

for(let num of arr)
{
    sum+=num;
}
console.log(sum);