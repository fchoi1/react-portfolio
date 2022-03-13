import React, { useState } from 'react';
import './project.css';

function Projects() {
  const [projectsList] = useState([
    {
      projectName: 'first-bio',
      github: 'https://github.com/fchoi1/my-bio',
      website: '',
      descriptions: '',
      image: require('../../assets/projects/first-bio.png'),
      technologies: ['HTML', 'CSS']
    },
    {
      projectName: 'password-generator',
      github: 'https://github.com/fchoi1/password-generator',
      website: 'https://fchoi1.github.io/password-generator/',
      descriptions:
        'A simple javascript application hosted on github pages to create a password based on different parameters set by user',
      image: require('../../assets/projects/password-generator.png'),
      technologies: ['Javascript', 'HTML', 'CSS']
    }
  ]);

  console.log(projectsList);

  return (
    <div>
      <h1>My Projects</h1>
      <section className="projects flex-row">
        {projectsList.map((project, i) => (
          <div key={i} className="mx-2 project-card">
            <h2 className='project-title'>{project.projectName}</h2>
            <a href={project.github}>
              <img src={project.image} alt={project.projectName + ' image'} />
            </a>
            <span> {project.technologies} </span>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;
