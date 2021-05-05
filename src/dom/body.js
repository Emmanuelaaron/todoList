import newproject from './createProject';
import { myProjects } from './projects';
import { projectsArray } from '../functions/project';
import todoForm from './createTodoForm';

const body = () => {
  const form = newproject();
  const myProjectsArr = myProjects(projectsArray);

  const fullBody = document.createElement('div');

  fullBody.classList.add('d-flex', 'justify-content-around', 'pt-5');

  const projects = document.createElement('section');
  projects.classList.add('col-4', 'bg-info', 'pb-5');
  projects.id = 'projects';
  const heading = document.createElement('h2');
  heading.innerHTML = 'My Projects';
  projects.appendChild(heading);
  projects.appendChild(myProjectsArr);
  projects.appendChild(form);

  const todos = document.createElement('section');
  todos.id = 'todos';
  todos.classList.add('col-6', 'bg-info');
  const todosHeading = document.createElement('h2');
  const formTodos = document.createElement('div');
  formTodos.id = 'createTodoForm';

  const button = document.createElement('button');
  button.innerText = 'Add todo';
  button.classList.add('btn', 'btn-primary');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    todoForm();
  });

  todosHeading.innerHTML = 'My Todos';
  todos.appendChild(todosHeading);
  todos.appendChild(button);
  todos.appendChild(formTodos);
  fullBody.appendChild(projects);
  fullBody.appendChild(todos);
  return fullBody;
};

export default body;