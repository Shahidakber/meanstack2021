var clk=document.querySelector("#clk")
clk.addEventListener("click",()=>{clk.style.color="red"
clk.textContent="clicked"
})

var dbclk=document.querySelector("#dbclk")
dbclk.addEventListener("dblclick",()=>{dbclk.style.color="green"
dbclk.textContent="Double clicked"
})

var over=document.querySelector("#over")
over.addEventListener("mouseover",()=>{over.style.color="blue"
over.textContent="HELLO"
})

over.addEventListener("mouseout",()=>{over.style.color="green"
over.textContent="Hai"
})