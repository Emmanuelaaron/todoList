import newproject from '../dom/createProject'
const body = () => {
    let form = newproject()
    const fullBody = document.createElement('div')
    fullBody.classList.add('d-flex', 'justify-content-around', 'pt-5')
    const projects = document.createElement('section')
    projects.classList.add('col-4', 'bg-info')
    const heading = document.createElement('h1')
    heading.innerHTML  = 'My Projects'
    projects.appendChild(heading)
    projects.appendChild(form)
    const todos = document.createElement('section')
    todos.classList.add('col-6', 'bg-info')
    const todosHeading = document.createElement('h1')
    todosHeading.innerHTML = 'My Todos'
    todos.appendChild(todosHeading)
    fullBody.appendChild(projects)
    fullBody.appendChild(todos)
    return fullBody
}

export default body