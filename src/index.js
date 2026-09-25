import "./styles.css";
import { todos , todo,reload } from "./todo.js"
import { projects, project ,projectreload ,projectrender} from "./projects.js"
let projectform = document.querySelector("#project-for");
import { renderhome } from "./home.js";
reload();
projectreload();
projectrender();
renderhome();
let current="home";

import { rendertoday } from "./today.js";
import { renderweek }  from "./week.js"
const home = document.querySelector(".home");
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
home.addEventListener("click",()=>{
    if(current!="home"){
        current="home";
        renderhome();
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

projectform.addEventListener("submit",(event)=>{
    event.preventDefault();
    let title = document.querySelector("#project-title").value;
    projects[projects.length] = project(title);
    localStorage.setItem("projects", JSON.stringify(projects));
    overlaytwo.style.display="none";
    const select = document.querySelector("#project");
    const option = document.createElement("option");
    option.value = title;
    option.textContent = title;
    option.classList.add(projects[projects.length-1].id);
    select.appendChild(option);
    projectform.reset();
    projectrender();
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
