import React from 'react';
import '../css/Projects.css';
import { projects } from '../constants/consts';

function Projects() {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="project-card"
          style={{ backgroundImage: project.backgroundImage }}
        >
          <div className="project-overlay">
            <h3 className="project-name">{project.name}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
