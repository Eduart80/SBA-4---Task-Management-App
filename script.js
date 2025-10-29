const nameInput = document.getElementById('task-name');
const categoryInput = document.getElementById('task-category');
const deadlineInput = document.getElementById('task-deadline');
const addTaskBtn = document.getElementById('add-task');
const deleteBtn = document.getElementById('delete-last');

// DB
let tasks = [];
let idCount = 0

// Add new task
function addTask(){
    const inName = nameInput.value
    const inCategory = categoryInput.value
    const deadlineEntry = deadlineInput.value
    const inDeadLine = deadlineInput.value
    idCount= tasks.length+1
    
    let newTask = {
        id: idCount,
        name:inName,
        category: inCategory,
        deadline: inDeadLine,
        status: deadlineEntry
    }
   tasks.push(newTask)
}
// Delete a task
function deleteTask() {
  tasks = tasks.pop()
}


addTaskBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    addTask()
    console.log('db: ', tasks[0]);
})
deleteBtn.addEventListener('click',()=>{
    deleteTask()
})
