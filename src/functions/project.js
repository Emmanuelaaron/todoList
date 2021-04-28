let projectsArray = []

function Project (name, description){
    this.name = name
    this.description = description
    this.todos = []
}

let defaultProject = new Project('default', 'this is a default project! feel free to add any todos of yur choice')
projectsArray.push(defaultProject)