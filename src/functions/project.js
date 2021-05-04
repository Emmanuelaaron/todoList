let projectsArray = []

function Project (name){
    this.name = name
    this.todos = [{
        name: 'running',
        description: 'running is cool',
        dueDate: '09/08/2019',
        priority: 'high'
    }]
}

function Todo (name, description, dueDate, priority){
    this.name = name
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
}

let defaultProject = new Project('default')
projectsArray.push(defaultProject)


export { Project, Todo, projectsArray }