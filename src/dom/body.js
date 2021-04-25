const body = () => {
    const fullBody = document.createElement('div')
    const projects = document.createElement('section')
    const heading = document.createElement('h1')
    heading.innerHTML  = 'My Projects'
    projects.appendChild(heading)
    const todos = document.createElement('section')
    const todosHeading = document.createElement('h1')
    todosHeading.innerHTML = 'My Todos'
    const button = document.createElement('button')
    button.innerText = 'create project'
    projects.appendChild(button)
    todos.appendChild(todosHeading)
    fullBody.appendChild(projects)
    fullBody.appendChild(todos)
    return fullBody
}

export default body