import { addTask } from './addTask';
import { checkForTasks } from './checkForTasks';
import { closeForm } from './closeForm';
import { getHighTasks } from './getHighTasks';
import { getLowTasks } from './getLowTasks';
import { getMediumTasks } from './getMediumTasks';
import { getTodayTasks } from './getTodayTasks';
import { getTomorrowTasks } from './getTomorrowTasks';
import { userName, userAvatar } from './getUserNameAvatar';
import { pageLoad } from './pageLoad';
import { showForm } from './showForm';
import './style.css';
import { taskArray } from './taskArray';
import { Tasks } from './taskConstructor';
import { validateForm } from './validateForm';

pageLoad(userName,userAvatar)

// debug
let taskContainer = document.getElementById('content')

console.log(taskArray)

//

// task lists
let listTodayButton = document.getElementById('list_today')
listTodayButton.addEventListener('click',getTodayTasks)

let listTomorrowButton = document.getElementById('list_tomorrow')
listTomorrowButton.addEventListener('click',getTomorrowTasks)

let listLowButton = document.getElementById('list_low');
listLowButton.addEventListener('click',getLowTasks)

let listMediumButton = document.getElementById('list_medium');
listMediumButton.addEventListener('click',getMediumTasks)

let listHighButton = document.getElementById('list_high');
listHighButton.addEventListener('click',getHighTasks)

//
let showFormButton = document.getElementById('show_form_button')
showFormButton.addEventListener('click', showForm)

let closeFormButton = document.getElementById('close_modal_button');
closeFormButton.addEventListener('click',closeForm)

let addTaskButton = document.getElementById('add_task_button')
addTaskButton.addEventListener('click',function(event) {
    event.preventDefault()
})

addTaskButton.addEventListener('click', addTask)



let allInputs = Array.from(document.getElementsByTagName('input'))
allInputs.forEach(element => {
    element.addEventListener('change',validateForm)
});