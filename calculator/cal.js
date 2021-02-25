   function clearBox() {
       document.querySelector("#input").value=""

   }
   function displayBox(num) 
   {
       document.querySelector("#input").value+=num;
       
   }
   function res() {
       let data=document.querySelector("#input").value;
       let res=eval(data)
       document.querySelector("#input").value=res;
       
   }
   function back() {
    let data=document.querySelector("#input").value;
    let res=data.slice(0,-1)
    document.querySelector("#input").value=res;
    
}

   
   
