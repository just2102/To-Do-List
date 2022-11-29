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




    // title verification via constraints API
    let titleInput = document.getElementById('title')
    titleInput.addEventListener('input', (event) => {
    if (titleInput.validity.tooShort || titleInput.validity.valueMissing) {
        titleInput.setCustomValidity("Please enter more at least 1 symbol")
        titleInput.reportValidity();
        titleErrorMessage.style.display = 'block'
    } else {
        titleInput.setCustomValidity("");
        titleErrorMessage.style.display = 'none';
    }
})
    let descriptionInput = document.getElementById('description');
    descriptionInput.addEventListener('input', (event) => {
        if (descriptionInput.validity.tooShort || descriptionInput.validity.valueMissing) {
            descriptionInput.setCustomValidity("Please enter more at least 1 symbol")
            descriptionInput.reportValidity();
            descriptionErrorMessage.style.display = 'block'
        } else {
            descriptionInput.setCustomValidity("");
            descriptionErrorMessage.style.display = 'none';
        }
})
    let dateInput = document.getElementById('dueDate');
    dateInput.addEventListener('input', (event) => {
        if (dateInput.validity.tooShort || dateInput.validity.valueMissing) {
            dateInput.setCustomValidity("Please enter more at least 1 symbol")
            dateInput.reportValidity();
            dateErrorMessage.style.display = 'block'
        } else {
            dateInput.setCustomValidity("");
            dateErrorMessage.style.display = 'none';
        }
    })
        // display errors by default (while there's still no input)
        if (titleInput.validity.tooShort || titleInput.validity.valueMissing) {
            titleInput.setCustomValidity("Please enter more at least 1 symbol")
            titleInput.reportValidity();
            titleErrorMessage.style.display = 'block'
        }
        if (descriptionInput.validity.tooShort || descriptionInput.validity.valueMissing) {
            descriptionInput.setCustomValidity("Please enter more at least 1 symbol")
            descriptionInput.reportValidity();
            descriptionErrorMessage.style.display = 'block'
        }
        if (dateInput.validity.tooShort || dateInput.validity.valueMissing) {
            dateInput.setCustomValidity("Please enter more at least 1 symbol")
            dateInput.reportValidity();
            dateErrorMessage.style.display = 'block'
        }
        //
    // if all the fields pass as 'true', form is validated
    if (titleInput.validity.valid && descriptionInput.validity.valid && dateInput.validity.valid) {
        console.log('all fields valid');
        return true;
    } else {
        console.log("Check your input...")
        return false;
    }

    // legacy code ('the dumb way to validate a form')
    // if (inputTitle=='') {
    //     if (inputDueDate!='Invalid Date') {
    //         titleErrorMessage.style.display = 'block'
    //         dateErrorMessage.style.display = 'none'
    //         return false;
    //     } else if (inputDescription!='') {
    //         descriptionErrorMessage.style.display = 'none'
    //         titleErrorMessage.style.display = 'block';
    //         return false
    //     } else {
    //         titleErrorMessage.style.display = 'block'
    //         dateErrorMessage.style.display = 'block'
    //         descriptionErrorMessage.style.display = 'block'
    //         return false;
    //     }
    // } else if (inputDueDate=='Invalid Date') {
    //     if (inputTitle!='') {
    //         dateErrorMessage.style.display = 'block'
    //         titleErrorMessage.style.display = 'none'
    //         return false;
    //     } else if (inputDescription!='') {
    //         dateErrorMessage.style.display = 'block';
    //         descriptionErrorMessage.style.display = 'none';
    //         return false;
    //     } else {
    //         titleErrorMessage.style.display = 'block'
    //         dateErrorMessage.style.display = 'block'
    //         descriptionErrorMessage.style.display = 'block'
    //         return false;
    //     }
    // } else if (inputDescription=='') {
    //     if (inputTitle!='') {
    //         titleErrorMessage.style.display = 'none';
    //         descriptionErrorMessage.style.display = 'block';
    //         return false
    //     } else if (inputDueDate!='Invalid Date') {
    //         dateErrorMessage.style.display = 'none';
    //         descriptionErrorMessage.style.display = 'block';
    //         return false
    //     } else {           
    //         titleErrorMessage.style.display = 'block';
    //         descriptionErrorMessage.style.display = 'block';
    //         dateErrorMessage.style.display = 'block';
    //         return false;
    //     }
    // }  
    // else if (inputTitle!='' && inputDescription!='' && inputDueDate!='Invalid Date') {
    //     titleErrorMessage.style.display = 'none';   
    //     descriptionErrorMessage.style.display = 'none'
    //     dateErrorMessage.style.display = 'none';
    //     priorityErrorMessage.style.display = 'none'

    //     return true;
    // }
}

export {validateForm}