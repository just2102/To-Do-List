function showForm() {
    let form = document.getElementById('modal');
    form.classList.add('active')
    let overlay = document.getElementById('overlay')
    overlay.classList.add('active')
}

export {showForm}