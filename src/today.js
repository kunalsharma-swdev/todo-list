const content = document.querySelector(".content");
const today = document.querySelector(".today");
import { todos } from "./todo.js";
import "./today.css";



function rendertoday(){
    let today = new Date();
    content.innerHTML = "";
    if(todos.length==0){
        let p = document.createElement("p");
        p.textContent="Pretty empty, add todos to start your work!";
        content.appendChild(p);
    }
    let todayDate =
        today.getFullYear() + "-" +
        String(today.getMonth() + 1).padStart(2, "0") + "-" +
        String(today.getDate()).padStart(2, "0");
    for (let i = 0; i < todos.length; i++) {
        if(todos[i].duedate==todayDate){
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
                rendertoday();

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



export { rendertoday }


