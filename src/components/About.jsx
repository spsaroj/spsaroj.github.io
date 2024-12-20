import React from 'react';
import '../css/About.css';
import resume from "../assets/files/resume.pdf";

import profilePic from '../assets/images/profile-pic.png';
function About() {
  return (
    <div className="about-container">
      <img src={profilePic} alt="Saroj Paudel" className="about-image" />
      <p className='name-section'>Saroj Paudel</p>
      <p>(Sha rəʊz - Pou dɛl)</p>
      <p className="about-quote">
        <span className="quote-mark">‘</span>

        I am a passionate software engineer with a keen interest in
        creating impactful applications that bridge the gap between
        technology and the physical world.
      </p>

      <a href={resume} download className="download-button">
        Download Resume
      </a>
    </div>
  );
}

export default About;
