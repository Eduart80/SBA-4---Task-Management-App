const nameInput = document.getElementById('task-name');
const categoryInput = document.getElementById('task-category');
const deadlineInput = document.getElementById('task-deadline');
const statusInput = document.getElementById('task-status');
const addTaskBtn = document.getElementById('add-task');
const deleteBtn = document.getElementById('delete-last');
const taskBody = document.getElementById('tasksBody');
const setStatus = document.getElementById('change-status');

// DB
let tasks = [];

// Add new task
function addTask(){
    const inName = nameInput.value
    const inCategory = categoryInput.value
    const inDeadLine = deadlineInput.value
    const instatus = statusInput.value
    
    let newTask = {
        id: tasks.length+1,
        name:inName,
        category: inCategory,
        deadline: inDeadLine,
        status: instatus
    }
    tasks.push(newTask)
    cleanAfter()
   
}
// Delete a task
function deleteTask() {
    try{
        tasks = tasks.pop()
    }catch{console.log('db: ', tasks);}

}

function renderTask(){
    let today = new Date()
    if(tasks.length === 0){
    taskBody.innerHTML = '<li colspan="5" class="center muted">No tasks match the current filters.</li>'
    }else{
        taskBody.innerHTML=''
        
        tasks.forEach((task) =>{
            if (task.status !== 'Completed' && new Date(task.deadline) < today) {
            task.status = 'Overdue';
            }   
            let list = document.createElement('li')
            let statusChange = document.createElement('select')
            list.textContent = `${task.name}, ${task.category}, ${task.deadline}, ${task.status} `
            taskBody.appendChild(list);
        })
    }
}
renderTask()

addTaskBtn.addEventListener('click', (e)=>{
   // e.preventDefault();
    addTask()
    renderTask()
})
deleteBtn.addEventListener('click',()=>{
    deleteTask()
    console.log('db: ', tasks);
})
setStatus.addEventListener('click',()=>{
    const inName = nameInput.value
    const instatus = statusInput.value
    tasks.forEach((task) => {
        if (task.name === inName) {
            task.status = instatus;
        }
    });
    renderTask();
    cleanAfter()
})

function cleanAfter(){
    nameInput.value=''
    categoryInput.value=''
    deadlineInput.value=''
    statusInput.value=''
}