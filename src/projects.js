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

function deleteproject(idd){
    projects = JSON.parse(localStorage.getItem("projects")) || [];
    projects = projects.filter(projects => projects.id !== idd);
    localStorage.setItem("projects", JSON.stringify(projects));
}

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
            deleteproject(classname);
            projectrender();
        });
        projectDiv.appendChild(deletee);
    }
}


export{ projects, project, projectreload ,projectrender}