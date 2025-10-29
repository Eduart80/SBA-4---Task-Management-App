const nameInput = document.getElementById('task-name');
const categoryInput = document.getElementById('task-category');
const deadlineInput = document.getElementById('task-deadline');
// DB
let tasks = [];

// Add new 
function addTask(){
    const inName = nameInput.value
    const inCategory = categoryInput.value
    const deadlineEntry = deadlineInput.value

    let taskAdd = {
        name:inName,
        category: inCategory,
        status:deadlineEntry
    }
}