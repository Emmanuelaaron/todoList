const newproject = () => {
    const myForm = document.createElement('form')
    myForm.classList.add('form-inline')
    let myInput = document.createElement('input')
    myInput.classList.add('form-control')
    myInput.placeholder = 'create new project'
    const button = document.createElement('button')
    button.innerText = 'Create'
    button.classList.add('btn', 'btn-primary')
    myForm.appendChild(myInput)
    myForm.appendChild(button)
    return myForm

}

export default newproject