let projects = [];
import { todos } from "./todo.js";
import { deletetodo } from "./todo.js";
let container = document.querySelector(".Projects");
const content = document.querySelector(".content");
function project(name){
    return{
        id: crypto.randomUUID(),
        projectname : name
    }
}

function projectreload(){
    projects = JSON.parse(localStorage.getItem("projects")) || [];
}

function deleteproject(idd){
    projects = JSON.parse(localStorage.getItem("projects")) || [];
    projects = projects.filter(projects => projects.id !== idd);
    localStorage.setItem("projects", JSON.stringify(projects));
}

function specificprojectrender(titlee){
    content.innerHTML="";
    for (let i = 0; i < todos.length; i++) {
        if(todos[i].project==titlee){
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
                specificprojectrender(titlee);

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
}}

let current = null;

function projectrender(){
    container.innerHTML="";
    for(let i=0;i<projects.length;i++){
        let projectDiv = document.createElement("div");
        projectDiv.classList.add(projects[i].id);
        projectDiv.style.display="flex";
        container.appendChild(projectDiv);
        let title = document.createElement("div");
        title.textContent=projects[i].projectname;
        projectDiv.appendChild(title);
        let deletee = document.createElement("button");
        deletee.classList.add("delete");
        deletee.textContent = "delete Project";
        deletee.addEventListener("click", (event) => {
            let parent = event.target.parentElement;
            let classname = parent.className;
            const select = document.querySelector("#project");
            const child =  select.getElementsByClassName(classname)[0];
            if (child) {
                child.remove();
            }
            deleteproject(classname);
            projectrender();
        });
        projectDiv.appendChild(deletee);
        title.addEventListener("click",()=>{
            if(current!=title){
                current=title;
                projectrender();
                specificprojectrender(title.textContent);
            }
        })
    }
}


export{ projects, project, projectreload ,projectrender}