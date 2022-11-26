import { taskArray } from "./taskArray"

function getTodayTasks() {
    let content = document.getElementById('content');
    // First, if content is not empty, remove everything inside task container (so that there is no infinite duplication of 'today' tasks)
    let allTasks = document.querySelectorAll('.task_container');
    allTasks.forEach((elem) => elem.remove());
    // Check for objects inside the 'taskArray' array that have 'dueDate' today
    let today = new Date();
    for (let i = 0 ; i<taskArray.length; i++) {
        if (
            today.getFullYear() === taskArray[i].dueDate.getFullYear() &&
            today.getMonth() === taskArray[i].dueDate.getMonth() &&
            today.getDate() === taskArray[i].dueDate.getDate()
        ) 
        {
            taskArray[i].appendTask(content)
        }
    }
}

export {getTodayTasks}