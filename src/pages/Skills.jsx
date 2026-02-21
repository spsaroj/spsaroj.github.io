import { useState } from 'react';
import { skills } from '../constants/consts';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSkillClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto text-center px-4">
      <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mb-20 tracking-tight">
        Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-cyan-500">Services</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
        {skills.technical.map((skill, index) => (
          <div
            key={index}
            onClick={() => handleSkillClick(index)}
            className={`group relative bg-white p-6 rounded-3xl md:rounded-[2rem] border border-neutral-100 shadow-lg shadow-neutral-200/50 transition-all duration-500 flex flex-col items-center justify-center min-h-[180px] md:min-h-[220px] cursor-pointer ${activeIndex === index ? 'shadow-2xl shadow-cyan-500/10 -translate-y-2' : 'hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2'}`}
          >
            {/* Background Gradient Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br from-lime-500/5 to-cyan-500/5 rounded-3xl md:rounded-[2rem] transition-opacity duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className={`text-5xl md:text-6xl mb-4 transform transition-transform duration-500 filter ${activeIndex === index ? 'scale-110 rotate-6 grayscale-0' : 'grayscale group-hover:scale-110 group-hover:rotate-6 group-hover:grayscale-0'}`}>
                {skill.icon}
              </div>

              <h3 className={`text-lg md:text-xl font-bold text-neutral-800 transition-colors ${activeIndex === index ? 'text-cyan-600' : 'group-hover:text-cyan-600'}`}>
                {skill.name}
              </h3>

              <div className="relative mt-2 w-full">
                <div className={`absolute inset-0 flex items-center justify-center text-xs font-bold text-cyan-700 transition-opacity duration-500 ${activeIndex === index ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}>
                  View details
                </div>

                <div className={`text-xs text-neutral-600 transition-opacity duration-500 text-center px-2 ${activeIndex === index ? 'opacity-100 text-cyan-700' : 'opacity-0 group-hover:opacity-100 group-hover:text-cyan-700'}`}>
                  {skill.details}
                </div>
              </div>

              {/* Artistic underline decoration */}
              <div className={`w-12 h-1 bg-gradient-to-r from-lime-400 to-cyan-400 rounded-full mt-3 transform transition-all duration-500 ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0'}`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
