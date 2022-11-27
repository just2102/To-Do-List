import { setListActive } from "./setListActive"
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
    listToday.setAttribute('class','list_button')
    sidebar.appendChild(listToday)

    let listTomorrow = document.createElement('button');
    listTomorrow.innerText = 'Tomorrow'
    listTomorrow.setAttribute('id','list_tomorrow')
    listTomorrow.setAttribute('class','list_button')
    sidebar.appendChild(listTomorrow)

   
    let taskContainer = document.getElementById('content')

    // button to add new task
    let showFormButton = document.createElement('button');
    showFormButton.setAttribute('id','show_form_button')
    showFormButton.innerText = 'Add task'
    taskContainer.appendChild(showFormButton)

    // select all list buttons
    let listButtons = document.querySelectorAll('.list_button')
    
}

export {pageLoad, taskArray}