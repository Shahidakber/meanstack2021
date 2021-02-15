//ABABAC=>A

var pattern="ABABAC"
var dict={}

for(let ch of pattern)
{
    
    if(ch in dict)
    {
        console.log("recursive"+ch);
        break
    }
    else
        dict[ch]=1;
}