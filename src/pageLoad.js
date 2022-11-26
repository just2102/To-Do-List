import { taskArray } from "./taskArray"
import { Tasks } from "./taskConstructor"


function pageLoad(name,avatar) {
    // header username and avatar
    let userName = document.getElementById('user_name')
    userName.innerText = name

    let userAvatar = document.getElementById('user_avatar')
    userAvatar.appendChild(avatar)
    // sidebar
    let sidebar = document.getElementById('sidebar')
    let listToday = document.createElement('button');
    listToday.innerText = 'Today'
    listToday.setAttribute('id','list_today')
    sidebar.appendChild(listToday)

    let listTomorrow = document.createElement('button');
    listTomorrow.innerText = 'Tomorrow'
    listTomorrow.setAttribute('id','list_tomorrow')
    sidebar.appendChild(listTomorrow)

    //test task on pageload
    let taskContainer = document.getElementById('content')
    
    //let task1 = new Tasks('test1','descrip',new Date(),'high')

    // let task2 = new Tasks('test2','description',new Date(),'high')
    // task2.dueDate.setDate(27);
    // task2.appendTask(taskContainer)
    // taskArray.push(task2)

    // button to add new task
    let showFormButton = document.createElement('button');
    showFormButton.setAttribute('id','show_form_button')
    showFormButton.innerText = 'Add task'
    taskContainer.appendChild(showFormButton)

}

export {pageLoad, taskArray}