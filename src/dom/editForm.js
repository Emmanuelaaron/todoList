/* eslint-disable import/no-cycle */

import { projectsArray } from '../functions/project';
import { projectname, projectTodos } from './projects';

const editTodoForm = (todo) => {
  const form = document.createElement('form');
  const formInput = document.getElementById('createTodoForm');
  formInput.innerHTML = '';

  const nameInput = document.createElement('input');
  nameInput.classList.add('form-control', 'form-group');
  nameInput.placeholder = `${todo.name}`;

  const descInput = document.createElement('input');
  descInput.classList.add('form-control', 'form-group');
  descInput.placeholder = `${todo.description}`;

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
    if (name !== '') {
      todo.name = name;
    }
    if (description !== '') {
      todo.description = description;
    }
    if (priority !== '') {
      todo.priority = priority;
    }
    if (dueDate !== '') {
      todo.dueDate = dueDate;
    }
    projectTodos(projectsArray, projectname);
  });

  form.appendChild(nameInput);
  form.appendChild(descInput);
  form.appendChild(dueDateInput);
  form.appendChild(select);
  form.appendChild(button);

  formInput.appendChild(form);
};

export default editTodoForm;