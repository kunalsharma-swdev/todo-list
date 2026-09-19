
let content = document.querySelector(".content");
let todos = [];
function todo(title1, description1, duedate1,priority1, notes1,projects1){
    let today = new Date();
    return {
        id: crypto.randomUUID(),
        title: title1,
        description: description1,
        duedate: duedate1,
        priority: priority1,
        notes: notes1,
        checklist: false,
        project: projects1,
        dateadded: today.toLocaleDateString(),
        datecompleted: null
    };
}

function reload(){
    todos = JSON.parse(localStorage.getItem("todos")) || [];
}

function deletetodo(idd){
    todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos = todos.filter(todo => todo.id !== idd);
    localStorage.setItem("todos", JSON.stringify(todos));
}

export { todos,todo,reload , deletetodo}