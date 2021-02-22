class Bank
{
   constructor(accno,name,minbal)// constructor
    {
        this.accno=accno;   //this.accno  instance variables of class
        this.name=name;
        this.bal=minbal;
        
    }
    deposit(amount)
    {
        this.bal+=amount;
        console.log(amount+"credited to account"+"balance is :"+this.bal);

    }
    withdraw(amount)
    {
        if(amount>this.bal)
        {
            console.log("insufficient fund");
        }
        else
        { 
            this.bal-=amount;
            console.log(amount+"debited from account"+"balance"+this.bal);
        }
    }
}
var obj1=new Bank(1,"akhil",3000)
obj1.withdraw(1500)
