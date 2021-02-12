function prime(low,high) {
    for(i=low;i<high;i++)
    {   let flag=0;
        for(j=2;j<i;j++)
        {
            if(i%j==0)
            {
                flag=1;
                break;
            }
               
            
        }
        if(flag==0)
        {
            console.log(i);
        }
    }
    
}
prime(1,10);