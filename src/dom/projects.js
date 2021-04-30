const myProjects = (projects) => {
    const divContainer = document.createElement('div')
    // for (let i = 0; i < projects.length; i++ ){
    //     const pro = document.createElement('p')
    //     pro.innerHTML = projects[i].name
    //     divContainer.appendChild(pro)
    // }
    projects.forEach(project => {
        const pro = document.createElement('p')
        pro.innerHTML = project.name
        divContainer.appendChild(pro)
    })
    console.log(divContainer)
    return divContainer
}

export default myProjects