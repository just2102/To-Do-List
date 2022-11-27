import { taskArray } from "./taskArray";

class Tasks {
    constructor(title,description,dueDate,priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    setTitle (newTitle) {
        this.title = newTitle
    }
    setDescription(newDescription) {
        this.description = newDescription
    }
    setDueDate(newDueDate) {
        this.dueDate = newDueDate
    }
    setPriority(newPriority) {
        this.priority = newPriority
    }
    appendTask(container) {
        let taskContainer = document.createElement('div')
        taskContainer.setAttribute('class','task_container')

        let taskTitle = document.createElement('h3')
        taskTitle.innerText = this.title
        taskContainer.appendChild(taskTitle)

        let taskDescription = document.createElement('h4');
        taskDescription.innerText = this.description;
        taskContainer.appendChild(taskDescription)

        let taskDueDate = document.createElement('div');
        taskDueDate.innerText = this.dueDate;
        taskContainer.appendChild(taskDueDate)

        let taskPriority = document.createElement('a');
        taskPriority.innerText = this.priority;
        taskContainer.appendChild(taskPriority)
        
        let removeTaskButton = document.createElement('button');
        removeTaskButton.innerText = 'Remove task'
        removeTaskButton.setAttribute('class','remove_task_button')
        taskContainer.appendChild(removeTaskButton)

        container.appendChild(taskContainer);
        //taskArray.push(this);
    }
    removeTask(title) {
        // find title of the task in the container's first child (task title == h3 DOM element's innerText)      
        for (let i = 0 ; i<taskArray.length;i++) {
            if (taskArray[i].title == title) {
                taskArray.splice(taskArray[i],1);
            }
        }
    }
}

export {Tasks}