import React from 'react';
import './project.css';
import { Col } from 'react-bootstrap';
import { Container, Row, Badge } from 'react-bootstrap';

function Project(props) {
  const { project } = props;

  const chipStyle = {
    gap: 2,
    maxWidth: 100,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };
  return (
    <Col xs={12} sm={6} md={5} lg={4}>
      <div className="mx-2 project-card">
        <h2 className="project-title">{project.projectName}</h2>
        <a href={project.website} className="project-image">
          <img src={project.image} alt={project.projectName + ' image'} />
        </a>
        <a href={project.github} style={{ textDecoration: 'none' }}>
          <span> Github Project Link </span>
        </a>
        <span> Technologies: </span>

        <Row className="">
          {project.technologies.map((tech) => (
            <Col key={tech} className=" my-1 col-auto">
              <Badge pill>{tech}</Badge>
            </Col>
          ))}
        </Row>
      </div>
    </Col>
  );
}

export default Project;
