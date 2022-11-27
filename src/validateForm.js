function validateForm() {
    let inputTitle = document.getElementById('title').value;
    let titleErrorMessage = document.getElementById('title_error')

    let inputDescription = document.getElementById('description').value;
    let descriptionErrorMessage = document.getElementById('description_error')

    let inputDueDate = new Date(document.getElementById('dueDate').value);
    let dateErrorMessage = document.getElementById('date_error')

    let inputPriorityButtonGroup = document.getElementsByName('priority');
    let inputPriority = '';
    for (let i = 0; i<inputPriorityButtonGroup.length; i++) {
        if (inputPriorityButtonGroup[i].checked) {
            inputPriority = inputPriorityButtonGroup[i].value;
        }
    }
    let priorityErrorMessage = document.getElementById('priority_error')

    
    if (inputTitle=='') {
        if (inputDueDate!='Invalid Date') {
            titleErrorMessage.style.display = 'block'
            dateErrorMessage.style.display = 'none'
            return false;
        } else if (inputDescription!='') {
            descriptionErrorMessage.style.display = 'none'
            titleErrorMessage.style.display = 'block';
            return false
        } else {
            titleErrorMessage.style.display = 'block'
            dateErrorMessage.style.display = 'block'
            descriptionErrorMessage.style.display = 'block'
            return false;
        }
    } else if (inputDueDate=='Invalid Date') {
        if (inputTitle!='') {
            dateErrorMessage.style.display = 'block'
            titleErrorMessage.style.display = 'none'
            return false;
        } else if (inputDescription!='') {
            dateErrorMessage.style.display = 'block';
            descriptionErrorMessage.style.display = 'none';
            return false;
        } else {
            titleErrorMessage.style.display = 'block'
            dateErrorMessage.style.display = 'block'
            descriptionErrorMessage.style.display = 'block'
            return false;
        }
    } else if (inputDescription=='') {
        if (inputTitle!='') {
            titleErrorMessage.style.display = 'none';
            descriptionErrorMessage.style.display = 'block';
            return false
        } else if (inputDueDate!='Invalid Date') {
            dateErrorMessage.style.display = 'none';
            descriptionErrorMessage.style.display = 'block';
            return false
        } else {           
            titleErrorMessage.style.display = 'block';
            descriptionErrorMessage.style.display = 'block';
            dateErrorMessage.style.display = 'block';
            return false;
        }
    }  
    else if (inputTitle!='' && inputDescription!='' && inputDueDate!='Invalid Date') {
        titleErrorMessage.style.display = 'none';   
        descriptionErrorMessage.style.display = 'none'
        dateErrorMessage.style.display = 'none';
        priorityErrorMessage.style.display = 'none'

        return true;
    }
}

export {validateForm}