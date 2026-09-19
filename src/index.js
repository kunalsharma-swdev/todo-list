import "./styles.css";
import { todos , todo } from "./todo.js"
let content = document.querySelector(".content");
const navadd = document.querySelector(".add");
const overlay = document.querySelector(".overlay");
const form = document.querySelector("#form");
navadd.addEventListener("click",()=>{
    overlay.style.display="block";
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
    overlay.style.display="none";
})