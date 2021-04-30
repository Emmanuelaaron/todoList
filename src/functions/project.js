let projectsArray = []

const Project = (name) => ({
    name
    
})

function Todo (name, description, dueDate, priority){
    this.name = name
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
}

let defaultProject =  Project('default')
projectsArray.push(defaultProject)


export { Project, Todo, projectsArray }