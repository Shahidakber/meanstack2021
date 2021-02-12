var data=[10,20,50,30,100];

data.push(500);

for(let i=0;i<data.length;i++)
{
    console.log(data[i]);
}
//second method
for(let num of data)
{
    console.log(num);
}