/* eslint-disable import/no-cycle */
/* eslint-disable  import/no-mutable-exports */

import myTodos from './todos';

let projectname = 'default';
const myProjects = (projects) => {
  const divContainer = document.createElement('div');
  projects.forEach((project) => {
    const pro = document.createElement('p');
    pro.innerHTML = project.name;
    pro.addEventListener('click', (e) => {
      e.preventDefault();
      myTodos(project.todos);
      projectname = project.name;
    });
    divContainer.appendChild(pro);
  });
  return divContainer;
};

const AddTodoToProject = (projects, name, todo) => {
  projects.forEach((project) => {
    if (project.name === name) {
      project.todos.push(todo);
    }
  });
};

const projectTodos = (projects, projectName) => {
  projects.forEach((project) => {
    if (project.name === projectName) {
      myTodos(project.todos);
    }
  });
};
export {
  myProjects, projectname, AddTodoToProject, projectTodos,
};