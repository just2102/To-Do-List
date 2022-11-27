import { removeTaskButton, selectRemoveTaskBtns } from "./selectRemoveTaskBtns";
import { taskArray } from "./taskArray"

function getTomorrowTasks() {
    let content = document.getElementById('content')
    // First, if content is not empty, remove everything inside task container (so that there is no infinite duplication of 'today' tasks)
    let allTasks = document.querySelectorAll('.task_container');
    allTasks.forEach((elem) => elem.remove());
    // Check for objects inside the 'taskArray' array that have 'dueDate' tomorrow
    let today = new Date();
    let tomorrow =  new Date()
    tomorrow.setDate(today.getDate() + 1)
    for (let i = 0 ; i<taskArray.length; i++) {
        if (
            tomorrow.getFullYear() === taskArray[i].dueDate.getFullYear() &&
            tomorrow.getMonth() === taskArray[i].dueDate.getMonth() &&
            tomorrow.getDate() === taskArray[i].dueDate.getDate()
        ) 
        {
            taskArray[i].appendTask(content)
        }
    }
    // Selects all remove task buttons inside the 'content' section after user chooses this list
    selectRemoveTaskBtns()
}

export {getTomorrowTasks, removeTaskButton}