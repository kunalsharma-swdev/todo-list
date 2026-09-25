const content = document.querySelector(".content");
const week = document.querySelector(".week");
import { todos } from "./todo.js";
import "./week.css"
function renderweek(){
    let today = new Date();
    content.innerHTML = "";
    let startOfWeek = new Date(today);
    startOfWeek.setHours(0,0,0,0);
    let endOfWeek = new Date(today);
    endOfWeek.setDate(today.getDate() + 6);
    endOfWeek.setHours(23,59,59,999);
    for(let i = 0; i < todos.length; i++){
        let todoDate = new Date(todos[i].duedate + "T00:00:00");
        if(todoDate >= startOfWeek && todoDate <= endOfWeek){
            let todoDiv = document.createElement("div");
            todoDiv.classList.add("todo");
            todoDiv.classList.add(todos[i].id);
            let title = document.createElement("div");
            title.classList.add("title");
            title.textContent = todos[i].title;
            let priority = document.createElement("div");
            priority.textContent = todos[i].priority;
            priority.classList.add("priority");
            if(priority.textContent == "low") priority.style.color = "green";
            if(priority.textContent == "medium") priority.style.color = "yellow";
            if(priority.textContent == "high") priority.style.color = "red";
            let date = document.createElement("div");
            date.classList.add("date");
            date.textContent = todos[i].duedate;
            let deletee = document.createElement("button");
            deletee.classList.add("delete");
            deletee.textContent = "delete todo";
            deletee.addEventListener("click",(event)=>{
                let parent = event.target.parentElement;
                let classname = [...parent.classList].find(classname => classname !== "todo");
                deletetodo(classname);
                renderweek();
            });
            let form = document.createElement("form");
            let checkbox = document.createElement("input");
            checkbox.classList.add("checkbox");
            checkbox.type = "checkbox";
            checkbox.addEventListener("change", () => {
                todos[i].checklist = checkbox.checked;
            });
            todoDiv.appendChild(title);
            todoDiv.appendChild(priority);
            todoDiv.appendChild(date);
            todoDiv.appendChild(deletee);
            todoDiv.appendChild(form);
            form.appendChild(checkbox);
            content.appendChild(todoDiv);
        }
    }
}
import { deletetodo } from "./todo.js";
export { renderweek }