import myTodos from './todos';

const myProjects = (projects) => {
  const divContainer = document.createElement('div');
  projects.forEach((project) => {
    const pro = document.createElement('p');
    pro.innerHTML = project.name;
    pro.addEventListener('click', (e) => {
      e.preventDefault();
      myTodos(project.todos);
    });
    divContainer.appendChild(pro);
  });
  return divContainer;
};

export default myProjects;