const input = document.querySelector("#todo")
const  Btn = document.querySelector("#Btn")
const listCon = document.querySelector("#list-con")




function addTask(){
    if(input.value === ""){
       alert("you have to enter any task")
    }else{
        const li = document.createElement("li");
        li.innerHTML = input.value;
        listCon.appendChild(li)
        const span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }

    input.value =""
}
Btn.addEventListener("click",()=>{
    addTask()
}) 


listCon.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
})