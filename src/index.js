import "./styles.css";
import { todos , todo,reload } from "./todo.js"
reload();
let current="home";
import { rendertoday } from "./today.js";
import { renderweek }  from "./week.js"
const week = document.querySelector(".week");
const today = document.querySelector(".today");
today.addEventListener("click",()=>{
    if(current!="today"){
        current="today";
        rendertoday();
    }
})
week.addEventListener("click",()=>{
    if(current!="week"){
        current="week";
        renderweek();
    }
})


let content = document.querySelector(".content");
let projectadd = document.querySelector(".add-project")
const navadd = document.querySelector(".add");
const overlay = document.querySelector(".overlay");
const overlaytwo = document.querySelector(".overlay-two");
const form = document.querySelector("#form");
navadd.addEventListener("click",()=>{
    overlay.style.display="block";
})
projectadd.addEventListener("click",()=>{
    overlaytwo.style.display="block";
})



form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let title = document.querySelector("#title").value;
    let description = document.querySelector("#description").value;
    let duedate = document.querySelector("#duedate").value;
    let priority = document.querySelector("#priority").value;
    let notes = document.querySelector("#notes").value;
    let project = document.querySelector("#project").value;
    todos[todos.length] = todo(title, description, duedate,priority,notes, project);
    localStorage.setItem("todos", JSON.stringify(todos));
    overlay.style.display="none";
    form.reset();
    if(current=="today"){
        rendertoday();
    }
    if(current=="week"){
        renderweek();
    }
})
