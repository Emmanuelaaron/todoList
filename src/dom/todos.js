/* eslint-disable import/no-cycle */

import todoForm from './createTodoForm';

const myTodos = (todos) => {
  const divContainer = document.createElement('div');
  const mytodos = document.getElementById('todos');
  mytodos.innerHTML = '';

  const todosHeading = document.createElement('h2');
  todosHeading.innerHTML = 'My Todos';
  mytodos.appendChild(todosHeading);

  const formTodos = document.createElement('div');
  formTodos.id = 'createTodoForm';

  const button = document.createElement('button');
  button.innerText = 'Add todo';
  button.classList.add('btn', 'btn-primary');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    todoForm();
  });

  mytodos.appendChild(button);
  mytodos.appendChild(formTodos);

  todos.forEach((todo) => {
    const pro = document.createElement('p');
    pro.innerHTML = todo.name;
    divContainer.appendChild(pro);
  });
  mytodos.appendChild(divContainer);
};

export default myTodos;