import React from 'react';
import '../css/Works.css';
import { workExperiences } from '../constants/consts';

function Works() {
  return (
    <div className="works-container">
      {workExperiences.map((experience, index) => (
        <div key={index} className="work-card">
          <div className="work-content">
            <a href={experience.website} target="_blank" rel="noopener noreferrer">
              <img src={experience.logo} alt={`${experience.company} logo`} className="company-logo" />
            </a>
            <div className="work-details">
              <h3 className="company-name">{experience.company}</h3>
              <p className="role">{experience.role}</p>
              <p className="duration">{experience.duration}</p>
              <p className="description">{experience.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Works;
