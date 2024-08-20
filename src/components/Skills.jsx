import React from 'react';
import '../css/Skills.css';
import { skills } from '../constants/consts';

function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-section">
        <h3 className="skills-category-title">Technical Skills</h3>
        <div className="skills-list">
          {skills.technical.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <h3 className="skills-category-title">Interests</h3>
        <div className="skills-list">
          {skills.interests.map((interest, index) => (
            <div key={index} className="skill-item">
              <span className="skill-icon">{interest.icon}</span>
              <span className="skill-name">{interest.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <h3 className="skills-category-title">Hobbies</h3>
        <div className="skills-list">
          {skills.hobbies.map((hobby, index) => (
            <div key={index} className="skill-item">
              <span className="skill-icon">{hobby.icon}</span>
              <span className="skill-name">{hobby.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
