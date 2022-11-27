import { addTask } from './addTask';
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

pageLoad(userName,userAvatar)
// debug
let taskContainer = document.getElementById('content')
let task1 = new Tasks('test1','descrip',new Date(),'High')
taskArray.push(task1)

let task2 = new Tasks('test2','description',new Date(),'Low')
task2.dueDate.setDate(27);
taskArray.push(task2);


task1.removeTask();
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

