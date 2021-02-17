var employees=[
    {id:100,name:"ram",design:"developer",join:1989,resign:2005},
    {id:101,name:"raju",design:"developer",join:1990,resign:2005},
    {id:102,name:"ravi",design:"hr",join:1991,resign:2000},
    {id:103,name:"amit",design:"hr",join:1995,resign:2005}
]

//find all employees design=developer
//find all employees who worked in 1990
//experince>10
for(let emp of employees)
{
    if(emp["design"]=="developer")
      {
        console.log(emp["name"]);
      }  

}

