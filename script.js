const nameInput = document.getElementById('task-name');
const categoryInput = document.getElementById('task-category');
const deadlineInput = document.getElementById('task-deadline');
const statusInput = document.getElementById('task-status');
const addTaskBtn = document.getElementById('add-task');
const deleteBtn = document.getElementById('delete-last');

// DB
let tasks = [];
let idCount = 0

// Add new task
function addTask(){
    const inName = nameInput.value
    const inCategory = categoryInput.value
    const inDeadLine = deadlineInput.value
    const instatus = statusInput.value
    idCount++
    
    let newTask = {
        id: tasks.length+1,
        name:inName,
        category: inCategory,
        deadline: inDeadLine,
        status: instatus
    }
   tasks.push(newTask)
}
// Delete a task
function deleteTask() {
    try{
        tasks = tasks.pop()
    }catch{console.log('db: ', tasks);}

}


addTaskBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    addTask()
    console.log('db: ', tasks);
})
deleteBtn.addEventListener('click',()=>{
    deleteTask()
    console.log('db: ', tasks);
})
