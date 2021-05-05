/* eslint-disable import/no-cycle */

import todoForm from './createTodoForm';

const myTodos = (todos) => {
  const divContainer = document.createElement('div');
  divContainer.classList.add('mt-4');
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
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('d-flex', 'align-content-center', 'col-7', 'justify-content-between', 'border-bottom', 'align-items-center');

    const pro = document.createElement('a');
    pro.innerHTML = todo.name;

    const dueDate = document.createElement('a');
    dueDate.innerHTML = todo.dueDate;

    const linkTodo = document.createElement('a');
    linkTodo.setAttribute('href', '#');
    linkTodo.innerHTML = 'Display';
    linkTodo.addEventListener('click', (e) => {
      e.preventDefault();
    // todoForm();
    });

    todoDiv.appendChild(pro);
    todoDiv.appendChild(dueDate);
    todoDiv.appendChild(linkTodo);
    divContainer.appendChild(todoDiv);
  });
  mytodos.appendChild(divContainer);
};

export default myTodos;