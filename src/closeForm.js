function closeForm() {
    let form = document.getElementById('modal');
    form.classList.remove('active')
    overlay.classList.remove('active')
}
export {closeForm}