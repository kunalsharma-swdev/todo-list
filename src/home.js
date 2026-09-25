import { todos,reload } from "./todo.js";
import { project,projectreload } from "./projects.js";
import "./home.css"
const content = document.querySelector(".content");

reload();
projectreload();
function renderhome(){
    content.innerHTML="";
    let container = document.createElement("div");
    content.appendChild(container);
    let todaycontainer = document.createElement("div");
    let weekcontainer = document.createElement("div");
    let projectcontainer = document.createElement("div");
    container.appendChild(todaycontainer);
    container.appendChild(weekcontainer);
    container.appendChild(projectcontainer);
    let totaltoday=0;
    let finishedtoday=0;
    let remainingtoday=0;
    let today = new Date(); 
    let todayDate =
    today.getFullYear() + "-" +
    String(today.getMonth() + 1).padStart(2, "0") + "-" +
    String(today.getDate()).padStart(2, "0");
    for (let i = 0; i < todos.length; i++) {
        if(todos[i].duedate==todayDate){
            totaltoday++;
            if(todos[i].checklist==true){
                finishedtoday++;
            }
            else{
                remainingtoday++;
            }
        }
    }
    let totaltodaydiv = document.createElement("div");
    let finishedtodaydiv = document.createElement("div");
    let remainingtodaydiv = document.createElement("div");
    totaltodaydiv.textContent = `Total todos today: ${totaltoday}`;
    finishedtodaydiv.textContent = `Finished todos today: ${finishedtoday}`;
    remainingtodaydiv.textContent = `Remaining todos today: ${remainingtoday}`
    todaycontainer.appendChild(totaltodaydiv);
    todaycontainer.appendChild(finishedtodaydiv);
    todaycontainer.appendChild(remainingtodaydiv);
}

export {renderhome}