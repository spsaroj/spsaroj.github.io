import { useState } from 'react';
import profilePic from '../assets/images/profile-pic.png';
import { bioData } from '../constants/consts';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText = (
    <>
      "I love building software that works in the real world.<br />I focus on fast delivery while building fault-tolerant systems."
    </>
  );

  const Highlight = ({ children }) => (
    <span className="bg-gradient-to-r from-lime-600 to-cyan-600 text-transparent bg-clip-text">{children}</span>
  );

  const longText = (
    <>
      "I am a <Highlight>{bioData.roles}</Highlight> with <Highlight>{bioData.years} years</Highlight> of experience <Highlight>{bioData.accomplishment}</Highlight>.
      My greatest strength is <Highlight>{bioData.strength}</Highlight>, and I have talent for <Highlight>{bioData.talent}</Highlight>.
      I am passionate about <Highlight>{bioData.motivation}</Highlight> and I value <Highlight>{bioData.values}</Highlight> while I do it!"
    </>
  );

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl mx-auto">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 via-cyan-400 to-sky-500 rounded-full blur-md opacity-75 animate-tilt"></div>

        <img
          src={profilePic}
          alt="Saroj Paudel"
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl ring-4 ring-white"
        />
      </div>

      <div className="flex-1 text-center md:text-left space-y-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-neutral-900 mb-2">
            Saroj Paudel
          </h1>
          <p className="inline-block bg-gradient-to-r from-lime-600 to-cyan-600 text-transparent bg-clip-text font-bold text-lg tracking-wide">
            Software Engineer / Project Manager
          </p>
          <p className="text-neutral-400 font-mono text-sm tracking-widest uppercase mt-2">
            (Sha rəʊz - Pou dɛl)
          </p>
        </div>

        <div className="space-y-4">
          <blockquote className="text-xl md:text-2xl text-neutral-600 font-medium leading-relaxed border-l-4 border-lime-500/50 pl-6 mx-4 md:mx-0 transition-all duration-500 ease-in-out">
            {isExpanded ? longText : shortText}
          </blockquote>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-lime-600 hover:text-lime-700 font-medium text-sm focus:outline-none transition-colors duration-200 pl-6 md:pl-0"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
