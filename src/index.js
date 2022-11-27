import { closeForm } from './closeForm';
import { findTaskTitleToRemove } from './findTaskTitleToRemove';
import { getTodayTasks } from './getTodayTasks';
import { getTomorrowTasks } from './getTomorrowTasks';
import { userName, userAvatar } from './getUserNameAvatar';
import { pageLoad } from './pageLoad';
import { removeTaskButton, selectRemoveTaskBtns } from './selectRemoveTaskBtns';
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


task1.removeTask();
console.log(taskArray)

let task3 = new Tasks('teswqoejwq','description',new Date(),'high')
taskArray.push(task3);

let task4 = new Tasks('testsdfjsdkfl','description',new Date(),'high')
taskArray.push(task4);

let task5 = new Tasks('ewfkjwelfjwe','description',new Date(),'medium')
taskArray.push(task5)

let task6 = new Tasks('FJWEOPRJWEOP','description',new Date(),'low')
taskArray.push(task6);
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



