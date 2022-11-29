import { checkForTasks } from "./checkForTasks"
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

    let listLow = document.createElement('button');
    listLow.innerText = 'Low Priority'
    listLow.setAttribute('id','list_low');
    listLow.setAttribute('class','list_button');
    sidebar.appendChild(listLow);

    let listMedium = document.createElement('button');
    listMedium.innerText = 'Medium Priority'
    listMedium.setAttribute('id','list_medium');
    listMedium.setAttribute('class','list_button');
    sidebar.appendChild(listMedium);

    let listHigh = document.createElement('button');
    listHigh.innerText = 'High Priority'
    listHigh.setAttribute('id','list_high');
    listHigh.setAttribute('class','list_button');
    sidebar.appendChild(listHigh);
   
    let content = document.getElementById('content')

    // button to show 'add task' form
    let showFormButton = document.createElement('button');
    showFormButton.setAttribute('id','show_form_button')
    showFormButton.innerText = 'Add task'
    content.appendChild(showFormButton)

    // selects all list buttons to check if there are any tasks inside of them. if there are, visually display it

}

export {pageLoad, taskArray}