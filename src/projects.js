let projects = [];
import { todos } from "./todo.js";
let container = document.querySelector(".Projects");
function project(name){
    return{
        id: crypto.randomUUID(),
        projectname : name
    }
}

function projectreload(){
    projects = JSON.parse(localStorage.getItem("projects")) || [];
}

function projectrender(){
    for(let i=0;i<projects.length;i++){
        let projectDiv = document.createElement("div");
        projectDiv.classList.add(projects[i].id);
        projectDiv.textContent=projects[i].title;
        container.appendChild(projectDiv);
    }
}
export{ projects, project, projectreload ,projectrender}