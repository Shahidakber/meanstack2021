var arr1=[10,11,13,14,15]
var arr2=[8,9,10,11,16]

// for(var i=0,j=0;i<arr1.length,j<arr2.length;)
// {
//     if(arr1[i]==arr2[i])
//     {
//         console.log(arr1[i]);
//         i++;
//     }
//     else if(arr1[i]>arr2[j])
//     {
//         j+=1;
//     }
//     else
//         i+=1;
// }



var p1=0
var p2=0

while((p1<arr1.length) & (p2<arr2.length))

{
    if(arr1[p1]==arr2[p2])
    {
        console.log(arr1[p1]);
        p1++;
    }
    else if(arr1[p1]>arr2[p2])
    {
        p2+=1;
    }
    else
        p1+=1;
}