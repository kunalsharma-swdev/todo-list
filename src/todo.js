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

export { todos, todo }