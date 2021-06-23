/* eslint-disable import/no-cycle */

import { projectsArray } from '../functions/project';
import Todo from '../functions/todo';
import { projectname, AddTodoToProject, projectTodos } from './projects';

const todoForm = () => {
  const form = document.createElement('form');
  const formInput = document.getElementById('createTodoForm');
  formInput.innerHTML = '';

  const nameInput = document.createElement('input');
  nameInput.classList.add('form-control', 'form-group');
  nameInput.placeholder = 'name of the todo';

  const descInput = document.createElement('input');
  descInput.classList.add('form-control', 'form-group');
  descInput.placeholder = 'description of the todo';

  const dueDateInput = document.createElement('input');
  dueDateInput.classList.add('form-control', 'form-group');
  dueDateInput.type = 'date';

  const select = document.createElement('select');
  select.classList.add('form-control', 'form-group');
  const high = document.createElement('option');
  high.innerHTML = 'High';
  const moderate = document.createElement('option');
  moderate.innerHTML = 'Moderate';
  const low = document.createElement('option');
  low.innerHTML = 'Low';
  select.appendChild(high);
  select.appendChild(moderate);
  select.appendChild(low);
  const button = document.createElement('button');
  button.innerText = 'create todo';
  button.classList.add(
    'form-control',
    'form-group',
    'btn', 'btn-primary',
  );
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const description = descInput.value;
    const priority = select.value;
    const dueDate = dueDateInput.value;
    const newTodo = Todo(name, description, dueDate, priority);
    AddTodoToProject(projectsArray, projectname, newTodo);
    projectTodos(projectsArray, projectname);
  });

  form.appendChild(nameInput);
  form.appendChild(descInput);
  form.appendChild(dueDateInput);
  form.appendChild(select);
  form.appendChild(button);

  formInput.appendChild(form);
};

const displayTodo = (todo) => {
  const displayDiv = document.createElement('div');
  displayDiv.classList.add('col-12');

  const description = document.createElement('div');
  description.classList.add('col-12', 'text-decoration-none', 'text-dark');
  description.innerHTML = `Description:- ${todo.description}`;

  const priority = document.createElement('div');
  priority.classList.add('col-12', 'text-decoration-none', 'text-dark');
  priority.innerHTML = `priority:- ${todo.priority}`;

  const min = document.createElement('a');
  min.setAttribute('href', '#');
  min.classList.add();
  min.innerHTML = 'Minimize';
  min.addEventListener('click', (e) => {
    e.preventDefault();
    displayDiv.classList.add('d-none');
    const display = document.getElementById(`${todo.name}display`);
    display.classList.add('d-block');
  });

  displayDiv.appendChild(description);
  displayDiv.appendChild(priority);
  displayDiv.appendChild(min);

  return displayDiv;
};

const deleteTodo = (todo) => {
  projectsArray.forEach((project) => {
    if (project.name === projectname) {
      const index = project.todos.indexOf(todo);
      project.todos.splice(index, 1);
    }
  });
};

const refreshTodos = () => {
  const mytodos = document.getElementById('todos');
  mytodos.innerHTML = '';
};

export {
  todoForm, displayTodo, deleteTodo, refreshTodos,
};