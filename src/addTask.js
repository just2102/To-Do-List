import { checkForTasks } from "./checkForTasks";
import { closeForm } from "./closeForm";
import { selectRemoveTaskBtns } from "./selectRemoveTaskBtns";
import { taskArray } from "./taskArray";
import { Tasks } from "./taskConstructor";
import { validateForm } from "./validateForm";




function addTask() {
    let inputTitle = document.getElementById('title').value;
    let titleErrorMessage = document.getElementById('title_error')

    let inputDescription = document.getElementById('description').value;
    let inputDueDate = new Date(document.getElementById('dueDate').value);
    // format date


    let dateErrorMessage = document.getElementById('date_error')

    let inputPriorityButtonGroup = document.getElementsByName('priority');
    let inputPriority = '';
    for (let i = 0; i<inputPriorityButtonGroup.length; i++) {
        if (inputPriorityButtonGroup[i].checked) {
            inputPriority = inputPriorityButtonGroup[i].value;
        }
    }
    // Watch for any changes in title or date inputs and immediately validate form if anything changes
    document.getElementsByTagName('form').onchange = validateForm


    //check for duplicates in array
    function findDuplicates() {
        let result = ''
        for (let i = 0; i<taskArray.length; i++) {
            if (taskArray[i].title==inputTitle) {
                result = true;
            } else {
                result = false
            }
        }
        if (result==true) {
            return true
        } else {
            return false;
        }
    }    
    
    validateForm();
    findDuplicates();

    if (validateForm()==true && findDuplicates()==false) {
        let newTask = new Tasks(inputTitle,inputDescription,inputDueDate,inputPriority);
        taskArray.push(newTask)
        console.log(taskArray)
        console.log('type of date: ' + typeof newTask.dueDate)
        console.log('date: ' +newTask.dueDate)
    
        let content = document.getElementById('content');
        newTask.appendTask(content)        
        

        closeForm()
        selectRemoveTaskBtns();

    } else if (validateForm()==true && findDuplicates()==true) {
        alert('Task with this title already exists! Please choose a different one')
    }

    checkForTasks()

}

export {addTask}