import { projectsArray, Project } from '../functions/project';
import { myProjects } from './projects';

const newproject = () => {
  const myForm = document.createElement('form');
  myForm.classList.add('form-inline');
  const myInput = document.createElement('input');
  myInput.classList.add('form-control');
  myInput.placeholder = 'create new project';
  const button = document.createElement('button');
  button.innerText = 'Create';
  button.classList.add('btn', 'btn-primary');
  myForm.appendChild(myInput);
  myForm.appendChild(button);

  button.addEventListener('click', (e) => {
    e.preventDefault();
    const title = myInput.value;
    const myprojects = document.getElementById('projects');
    const form = newproject();
    const newProject = new Project(title);
    const heading = document.createElement('h1');

    projectsArray.push(newProject);
    const myProjectsArr = myProjects(projectsArray);
    myprojects.innerHTML = '';
    heading.innerHTML = 'My Projects';
    myprojects.appendChild(heading);
    myprojects.appendChild(myProjectsArr);
    myprojects.appendChild(form);
  });
  return myForm;
};

export default newproject;