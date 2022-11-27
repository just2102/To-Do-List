import { taskArray } from "./taskArray";
import { Tasks } from "./taskConstructor";



function addTask() {
    let inputTitle = document.getElementById('title').value;
    let inputDescription = document.getElementById('description').value;
    let inputDueDate = new Date(document.getElementById('dueDate').value);

    let inputButtonGroup = document.getElementsByName('priority');
    let inputPriority = '';
    for (let i = 0; i<inputButtonGroup.length; i++) {
        if (inputButtonGroup[i].checked) {
            inputPriority = inputButtonGroup[i].value;
        }
    }

    let newTask = new Tasks(inputTitle,inputDescription,inputDueDate,inputPriority);
    taskArray.push(newTask)
    
}

export {addTask}