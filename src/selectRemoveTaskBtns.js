import { findTaskTitleToRemove } from "./findTaskTitleToRemove"

let removeTaskButton = document.querySelectorAll('.remove_task_button')

// Selects all 'Remove task' buttons inside the 'content' section after user chooses 'today' or 'tomorrow' lists
// and starts the findTaskTitleToRemove function
function selectRemoveTaskBtns() {
    removeTaskButton = document.querySelectorAll('.remove_task_button')
    console.log(removeTaskButton)
    findTaskTitleToRemove()
}
export {removeTaskButton, selectRemoveTaskBtns}