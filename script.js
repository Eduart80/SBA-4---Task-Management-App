const nameInput = document.getElementById('task-name');
const categoryInput = document.getElementById('task-category');
const deadlineInput = document.getElementById('task-deadline');
const addTaskBtn = document.getElementById('add-task');

// DB
let tasks = [];
let idCount = 0

// Add new 
function addTask(){
    const inName = nameInput.value
    const inCategory = categoryInput.value
    const deadlineEntry = deadlineInput.value
    const inDeadLine = deadlineInput.value

    let newTask = {
        id: idCount++,
        name:inName,
        category: inCategory,
        deadline: inDeadLine,
        status: deadlineEntry
    }
   tasks.push(newTask)
}

addTaskBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    addTask()
    console.log('db: ', tasks[0]);
})
