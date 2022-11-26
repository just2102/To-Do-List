import { closeForm } from './closeForm';
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
let task1 = new Tasks('test1','descrip',new Date(),'high')
taskArray.push(task1)

let task2 = new Tasks('test2','description',new Date(),'high')
task2.dueDate.setDate(27);
taskArray.push(task2);
console.log(taskArray);
//
let listTodayButton = document.getElementById('list_today')
listTodayButton.addEventListener('click',getTodayTasks)

let listTomorrowButton = document.getElementById('list_tomorrow')
listTomorrowButton.addEventListener('click',getTomorrowTasks)

let showFormButton = document.getElementById('show_form_button')
showFormButton.addEventListener('click', showForm)

let closeFormButton = document.getElementById('close_modal_button');
closeFormButton.addEventListener('click',closeForm)