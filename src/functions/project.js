const projectsArray = [];

class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }
}

const defaultProject = new Project('default');
projectsArray.push(defaultProject);

export { Project, projectsArray };