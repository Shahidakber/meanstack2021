var text="hai hello hai hello hello";

var words=text.split(" ");
console.log(words)

var dic={}


for(let wd of words)
{
    if (wd in dic) {

        dic[wd]+=1;

    }
    else{
        dic[wd]=1;
    }
}
elements=[];
console.log(dic);
for(let key in dic)
{
    elements.push([dic[key],key]);
}
console.log(elements);
elements.sort((o1,o2)=>o1<o2?1:-1);
console.log(elements);
console.log(elements[0]);


