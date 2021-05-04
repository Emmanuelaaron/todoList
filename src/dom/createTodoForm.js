const todoForm = () => {
    const form = document.createElement('form')
    let formInput = document.getElementById('createTodoForm')
    formInput.innerHTML=''

    let nameInput = document.createElement('input')
    nameInput.classList.add('form-control', 'form-group')
    nameInput.placeholder = 'name of the todo'

    let descInput = document.createElement('input')
    descInput.classList.add('form-control', 'form-group')
    descInput.placeholder = 'description of the todo'

    let select = document.createElement('select')
    select.classList.add('form-control', 'form-group')
    let high = document.createElement('option')
    high.innerHTML = 'High'
    let moderate = document.createElement('option')
    moderate.innerHTML = 'Moderate'
    let low = document.createElement('option')
    low.innerHTML = 'Low'
    select.appendChild(high)
    select.appendChild(moderate)
    select.appendChild(low)


    const button = document.createElement('button')
    button.innerText= 'create todo'
    button.classList.add(
        'form-control', 
        'form-group', 
        'btn', 'btn-primary'
        )

    form.appendChild(nameInput)
    form.appendChild(descInput)
    form.appendChild(select)
    form.appendChild(button)

    formInput.appendChild(form)
}

export default todoForm