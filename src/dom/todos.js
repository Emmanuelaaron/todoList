const myTodos = (todos) => {
  const divContainer = document.createElement('div');
  const mytodos = document.getElementById('todos');
  mytodos.innerHTML = '';
  const todosHeading = document.createElement('h2');
  todosHeading.innerHTML = 'My Todos';
  mytodos.appendChild(todosHeading);
  todos.forEach((todo) => {
    const pro = document.createElement('p');
    pro.innerHTML = todo.name;
    divContainer.appendChild(pro);
  });
  mytodos.appendChild(divContainer);
};

export default myTodos;