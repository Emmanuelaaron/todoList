/* eslint-disable import/no-cycle */

import {
  todoForm, displayTodo, deleteTodo, refreshTodos,
} from './createTodoForm';
import editTodoForm from './editForm';

const myTodos = (todos) => {
  const divContainer = document.createElement('div');
  divContainer.id = 'bigDiv';
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
    todoDiv.classList.add('border', 'pl-5', 'rounded', 'mb-3');
    // todoDiv.id = `${todo.name}big`

    const pro = document.createElement('div');
    pro.classList.add('text-decoration-none', 'text-dark');
    pro.innerHTML = `title:-       ${todo.name}`;

    const dueDate = document.createElement('div');
    dueDate.classList.add('text-decoration-none', 'text-dark');
    dueDate.innerHTML = `Due date:- ${todo.dueDate}`;

    const linkTodo = document.createElement('a');
    linkTodo.setAttribute('href', '#');
    linkTodo.classList.add();
    linkTodo.innerHTML = 'Display';
    linkTodo.id = `${todo.name}display`;
    linkTodo.addEventListener('click', (e) => {
      e.preventDefault();
      linkTodo.classList.add('d-none');
      const display = displayTodo(todo);
      todoDiv.appendChild(display);
    });

    const brk = document.createElement('br');

    const brek = document.createElement('br');

    const todoDelete = document.createElement('a');
    todoDelete.innerHTML = 'Delete';
    todoDelete.classList.add('text-danger');
    todoDelete.addEventListener('click', (e) => {
      e.preventDefault();
      deleteTodo(todo);
      refreshTodos();
      myTodos(todos);
    });

    const todoEdit = document.createElement('a');
    todoEdit.innerHTML = 'Edit';
    todoEdit.classList.add('text-dan');
    todoEdit.addEventListener('click', (e) => {
      e.preventDefault();
      editTodoForm(todo);
      const disappear = document.getElementById('bigDiv');
      disappear.innerHTML = '';
    });

    todoDiv.appendChild(pro);
    todoDiv.appendChild(dueDate);
    todoDiv.appendChild(linkTodo);
    todoDiv.appendChild(brk);
    todoDiv.appendChild(todoEdit);
    todoDiv.appendChild(brek);
    todoDiv.appendChild(todoDelete);

    divContainer.appendChild(todoDiv);
  });
  mytodos.appendChild(divContainer);
};

export default myTodos;