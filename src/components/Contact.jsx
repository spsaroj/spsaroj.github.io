import React from 'react';
import '../css/Contact.css';
import { youtubeVideo } from '../constants/consts';
import { FaLinkedin, FaInstagram, FaGithub, FaCode } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="section-title">Contact & Social Media</h2>

      <div className="social-media-links">
        <a
          href="https://www.linkedin.com/in/saroz-paudel-053/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-icon linkedin"
        >
          <FaLinkedin />
          <span className="social-media-name">LinkedIn</span>
        </a>

        <a
          href="https://www.instagram.com/__imsaroz/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-icon instagram"
        >
          <FaInstagram />
          <span className="social-media-name">Instagram</span>
        </a>

        <a
          href="https://github.com/spsaroj"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-icon github"
        >
          <FaGithub />
          <span className="social-media-name">GitHub</span>
        </a>

        <a
          href="https://leetcode.com/spsaroj/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-icon leetcode"
        >
          <FaCode />
          <span className="social-media-name">LeetCode</span>
        </a>
      </div>

      {/* <div className="youtube-channel">
        <h3 className="youtube-title">Find me in YouTube</h3>
        <div className="youtube-video">
          <iframe
            src={youtubeVideo.url}
            title={youtubeVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div> */}
    </div>
  );
}

export default Contact;
