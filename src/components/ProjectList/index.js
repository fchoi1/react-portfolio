import React, { useState } from 'react';
import Project from '../Project';
import { Container, Row } from 'react-bootstrap';

function ProjectList() {
  let [projectsList] = useState([
    {
      projectName: 'First Bio',
      github: 'https://github.com/fchoi1/my-bio',
      website: 'https://fchoi1.github.io/my-bio/',
      descriptions: '',
      image: require('../../assets/projects/first-bio.png'),
      technologies: ['HTML', 'CSS']
    },
    {
      projectName: 'Password Generator',
      github: 'https://github.com/fchoi1/password-generator',
      website: 'https://fchoi1.github.io/password-generator/',
      descriptions:
        'A simple javascript application hosted on github pages to create a password based on different parameters set by user',
      image: require('../../assets/projects/password-generator.png'),
      technologies: ['Javascript', 'HTML', 'CSS']
    },
    {
      projectName: 'Tech Blog',
      github: 'https://github.com/fchoi1/tech-blog',
      website: 'https://fabio-tech-blog.herokuapp.com/',
      descriptions:
        'This is a simple application to use MVC moddel with node js to connect to sql database and access REST apis. This is an application to view a tech blog with users to create, edit and delete posts as well as add comments.',
      image: require('../../assets/projects/tech-blog.png'),
      technologies: ['mysql', 'dotenv', 'express', 'nodeJS', 'MVC Model']
    },
    {
      projectName: 'Social Network API',
      github: 'https://github.com/fchoi1/Social-Network-API',
      website: 'https://github.com/fchoi1/Social-Network-API',
      descriptions:
        'This is a simple application to use Mongoose with node js to connect to mongo database and access REST apis. This is an application to utilize a social api command with to create, edit and delete users and friends as well as add thoughts and reactions.',
      image: require('../../assets/projects/social-network-api.png'),
      technologies: ['MVC Model', 'nodeJS', 'express', 'MongoDB', 'mongoose']
    },
    {
      projectName: 'Budget Tracker',
      github: 'https://github.com/fchoi1/budget-tracker',
      website: 'https://fabio-budget-tracker.herokuapp.com/',
      descriptions:
        'This is a simple application to use MVC model with node js to connect to mongoDB access REST apis. This is an application to view a budget tracker where you can input transactions to track your spending. The focus of this assignement is PWA and offline functionality when connection is unstable. The website is still functional and works with or without internet connectivity with express. ',
      image: require('../../assets/projects/budget-tracker.png'),
      technologies: [
        'MVC',
        'MongoDB',
        'PWA',
        'Express',
        'Heroku',
        'Service Workers',
        'Cache'
      ]
    },
    {
      projectName: 'Note Taker',
      github: 'https://github.com/fchoi1/note-taker',
      website: 'https://note-taker-fabio.herokuapp.com/notes',
      descriptions:
        'A simple note taking application to create and save notes and edit',
      image: require('../../assets/projects/note-taker.png'),
      technologies: ['nodeJS', 'express', 'CSS', 'HTML', 'REST api', 'Heroku']
    },
    {
      projectName: 'Employee Tracker',
      github: 'https://github.com/fchoi1/employee-tracker',
      website: 'https://github.com/fchoi1/employee-tracker',
      descriptions:
        'This is a simple content management system (CMS) to view employee database. It is a simple command line application to view, update, and add to employee tables.',
      image: require('../../assets/projects/employee-tracker.png'),
      technologies: ['Javascript', 'nodeJS', 'inquirer', 'mysql2', 'CMS']
    }
  ]);

  console.log(projectsList);
  return (
    <div>
      <h1>My Projects</h1>
      <Container fluid>
        <Row>
          {projectsList.map((project, i) => (
            <Project key={i} project={project} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProjectList;
