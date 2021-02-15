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

console.log(dic);