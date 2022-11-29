import { checkForTasks } from "./checkForTasks";
import { removeTaskButton } from "./selectRemoveTaskBtns";
import { taskArray } from "./taskArray";
let title = '';
function findTaskTitleToRemove() {
    removeTaskButton.forEach(button => {
        button.addEventListener('click', function handleClick(event) {
            title = button.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;

            // removes task from taskArray
            removeTaskByTitle(title)
            // removes the parent DOM element associated with current 'remove task' button
            button.parentElement.remove();    

        })
    })
}
function removeTaskByTitle (title) {
    let currentTaskIndex = taskArray.findIndex((i) => {
        return i.title === title;
    })
    taskArray.splice(currentTaskIndex,1);
    console.log(taskArray);
    checkForTasks();
}


export {title, findTaskTitleToRemove}