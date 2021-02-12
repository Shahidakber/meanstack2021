var arr=[10,11,12,13,14]
var even=[];
var odd=[];

for(let num of arr)
  {
      if(num%2==0)
      {
          even.push(num);
      }
      else
      {
          odd.push(num)
      }
  }
  for(let ev of even)
  {
      console.log(ev);
  }
  console.log(" ");
  for(let od of odd)
  {
      console.log(od);
  }

  console.log(even);
  console.log(odd);