/* eslint-disable import/no-cycle */

import { Todo, projectsArray } from '../functions/project';
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
    const newTodo = new Todo(name, description, dueDate, priority);
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

export default todoForm;