const nameInput = document.getElementById('task-name');
const categoryInput = document.getElementById('task-category');
const deadlineInput = document.getElementById('task-deadline');
const statusInput = document.getElementById('task-status');
const addTaskBtn = document.getElementById('add-task');
const deleteBtn = document.getElementById('delete-last');
const taskBody = document.getElementById('tasksBody');
const setStatus = document.getElementById('change-status');
//Filters
const allStatus = document.getElementById('list-all');
const pendingStatus = document.getElementById('list-pending');
const inprogressStatus = document.getElementById('list-inprogress');
const completedStatus = document.getElementById('list-completed');
const overdueStatus = document.getElementById('list-overdue');
const workStatus = document.getElementById('list-work');
const personalStatus = document.getElementById('list-personal');

// DB
let tasks = [];
let selectFilter = 'All'


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
     tasks.pop()
}

function renderTask(){
    let today = new Date()
    if(tasks.length === 0){
    taskBody.innerHTML = '<li colspan="5" class="center muted">No tasks match the current filters.</li>'
    }else{
        taskBody.innerHTML=''
        let filterOption = tasks.filter((task)=> {
           switch( selectFilter ){
            case "Pending":
                return task.status === 'Pending'
            case "In Progress":
                 return task.status === 'In Progress';
            case 'Completed':
                return task.status === 'Completed';
            case 'Overdue':
                return task.status === 'Overdue';
            case 'Work':
                return task.status === 'Work';
            case 'Personal':
                return task.status === 'Personal';
            default:
                return 'All'
           }
           
        })
        console.log(selectFilter);
        filterOption.forEach((task) =>{
            if (task.status !== 'Completed' && new Date(task.deadline) < today) {
            task.status = 'Overdue';
            }   
            let list = document.createElement('li')
            document.createElement('select')
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
    renderTask()
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
    statusInput.value="noSelection"
}

allStatus.addEventListener('click',()=>{
    selectFilter = 'All'
    renderTask()
})
pendingStatus.addEventListener('click',()=>{
    selectFilter='Pending'
    renderTask()
})
inprogressStatus.addEventListener('click',()=>{
      selectFilter='In Progress'
    renderTask()
})
completedStatus.addEventListener('click',()=>{
      selectFilter='Completed'
    renderTask()
})
overdueStatus.addEventListener('click',()=>{
      selectFilter='Overdue'
    renderTask()
})
workStatus.addEventListener('click',()=>{  
    selectFilter='Work'
    renderTask()
})
personalStatus.addEventListener('click',()=>{  
    selectFilter='Personal'
    renderTask()
})
