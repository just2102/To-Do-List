import { taskArray } from "./taskArray";


function checkForTasks() {
    // grab all 'list' buttons
    let todayList = document.getElementById('list_today')
    let tomorrowList = document.getElementById('list_tomorrow')
    let lowList = document.getElementById('list_low');
    let mediumList = document.getElementById('list_medium');
    let highList = document.getElementById('list_high');
    //
    // iterate over taskArray and check if any tasks expire today or tomorrow
    let today = new Date();
    let tomorrow =  new Date();
    tomorrow.setDate(today.getDate() + 1)

        for (let i = 0 ; i<taskArray.length; i++) {
            if (today.getFullYear() === taskArray[i].dueDate.getFullYear() &&
            today.getMonth() === taskArray[i].dueDate.getMonth() &&
            today.getDate() === taskArray[i].dueDate.getDate()) 
            {todayList.classList.add('active')}
            else if (today.getFullYear() != taskArray[i].dueDate.getFullYear() &&
            today.getMonth() != taskArray[i].dueDate.getMonth() &&
            today.getDate() != taskArray[i].dueDate.getDate())
            {todayList.classList.remove('active')}
    }
        for (let i = 0 ; i<taskArray.length; i++) {
            if (tomorrow.getFullYear() === taskArray[i].dueDate.getFullYear() &&
            tomorrow.getMonth() === taskArray[i].dueDate.getMonth() &&
            tomorrow.getDate() === taskArray[i].dueDate.getDate())
            {tomorrowList.classList.add('active')}
            else if (tomorrow.getFullYear() != taskArray[i].dueDate.getFullYear() &&
            tomorrow.getMonth() != taskArray[i].dueDate.getMonth() &&
            tomorrow.getDate() != taskArray[i].dueDate.getDate())
            {tomorrowList.classList.remove('active')}
    }

    // iterate and check for priority property of each array element
        for (let i = 0; i<taskArray.length; i++) {
             if (taskArray[i].priority=='Low') {lowList.classList.add('active')}
    }
        for (let i = 0 ; i<taskArray.length; i++) {
            if (taskArray[i].priority=='Medium') {mediumList.classList.add('active')}
    }
        for (let i = 0 ; i<taskArray.length; i++) {
            if (taskArray[i].priority=='High') {highList.classList.add('active')}

    }
    // if at least 1 element of array does not have either low, medium or high priority, remove 'active' class of this list
        for (let i = 0; i<taskArray.length; i++) {
            if (taskArray[i].priority!='Low') {
                lowList.classList.remove('active');
            } else if (taskArray[i].priority!='Medium') {
                mediumList.classList.remove('active')
            } else if (taskArray[i].priority!='High') {
                highList.classList.remove('active');
            }
        }
    // if there are no items in the array, display a message
    if (taskArray.length==0) {
        todayList.classList.remove('active');
        tomorrowList.classList.remove('active');
        lowList.classList.remove('active');
        mediumList.classList.remove('active');
        highList.classList.remove('active');
        alert('No tasks!')
    }
}
export {checkForTasks}