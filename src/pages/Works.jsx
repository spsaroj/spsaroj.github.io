import { workExperiences } from '../constants/consts';

const Works = () => {
  return (
    <div className="space-y-16">
      <h2 className="text-3xl md:text-5xl font-black text-center text-neutral-900 mb-16 tracking-tight">
        Work <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">Experience</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {workExperiences.map((experience, index) => (
          <div key={index} className="group relative bg-white p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 border border-neutral-100 shadow-xl shadow-neutral-100/50 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden">

            {/* Artistic decorative blob */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100/50 to-lime-100/50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-neutral-50 rounded-2xl group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-cyan-600 transition-colors">
                    {experience.company}
                  </h3>
                  <p className="text-neutral-500 text-sm font-medium">
                    {experience.duration}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-lg font-semibold text-neutral-800 mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-[length:0%_2px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_2px] transition-all duration-500 inline-block">
                  {experience.role}
                </p>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  {experience.description}
                </p>
              </div>

              <a href={experience.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-neutral-400 group-hover:text-cyan-500 transition-colors mt-2">
                Visit Website →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
