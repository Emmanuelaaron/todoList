import { projectsArray, Project } from '../functions/project'
import myProjects from '../dom/projects'
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

    button.addEventListener('click', e => {
        e.preventDefault()
        const title = myInput.value
        let myprojects = document.getElementById('projects')
        let form = newproject()
        const newProject = Project(title)
        const heading = document.createElement('h1')

        console.log(title)
        projectsArray.push(newProject)
        let myProjectsArr = myProjects(projectsArray)
        myprojects.innerHTML= ''
        heading.innerHTML  = 'My Projects'
        myprojects.appendChild(heading)
        myprojects.appendChild(myProjectsArr)
        myprojects.appendChild(form)

        console.log(projectsArray)
    })
    return myForm

}

export default newproject