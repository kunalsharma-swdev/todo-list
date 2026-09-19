const content = document.querySelector(".content");
const week = document.querySelector(".week");
import { todos } from "./todo.js";
import "./week.css"
function renderweek(){
    let today = new Date();
    content.innerHTML = "";
    let day = today.getDay();
    let difference = day === 0 ? -6 : 1 - day;

    let startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() + difference);
    let endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    let startDate =
    startOfWeek.getFullYear() + "-" +
    String(startOfWeek.getMonth() + 1).padStart(2, "0") + "-" +
    String(startOfWeek.getDate()).padStart(2, "0");

    let endDate =
        endOfWeek.getFullYear() + "-" +
        String(endOfWeek.getMonth() + 1).padStart(2, "0") + "-" +
        String(endOfWeek.getDate()).padStart(2, "0");

    for (let i = 0; i < todos.length; i++) {

        if(todos[i].duedate >= startDate && todos[i].duedate <= endDate){
            let todoDiv = document.createElement("div");
            todoDiv.classList.add("todo");
            todoDiv.classList.add(todos[i].id);
            let title = document.createElement("div");
            title.classList.add("title");
            title.textContent = todos[i].title;
            let priority = document.createElement("div");
            priority.textContent = todos[i].priority;
            priority.classList.add("priority");
            if(priority.textContent=="low"){
                priority.style.color = "green";
            }
            if(priority.textContent=="medium"){
                priority.style.color = "yellow";
            }
            if(priority.textContent == "high"){
                priority.style.color = "red";
            }
            let date = document.createElement("div");
            date.classList.add("date");
            date.textContent = todos[i].duedate;
            let deletee = document.createElement("button");
            deletee.classList.add("delete");
            deletee.textContent = "delete todo";
            deletee.addEventListener("click", (event) => {
                
                let parent = event.target.parentElement;

                let classname = [...parent.classList]
                    .find(classname => classname !== "todo");

                deletetodo(classname);
                renderweek();

            });
            let form = document.createElement("form");
            let checkbox = document.createElement("input");
            checkbox.classList.add("checkbox");
            checkbox.type="checkbox";
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