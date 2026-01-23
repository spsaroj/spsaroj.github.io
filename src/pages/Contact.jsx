import { FaLinkedin, FaInstagram, FaGithub, FaCode } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/saroz-paudel-053/', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/omgitssaroz/', color: 'hover:text-pink-600' },
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/spsaroj', color: 'hover:text-neutral-900' },
    { name: 'LeetCode', icon: <FaCode />, url: 'https://leetcode.com/spsaroj/', color: 'hover:text-yellow-500' },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-blue-500">Connect</span>
        </h2>
        <p className="text-neutral-500 max-w-lg mx-auto text-lg font-medium">
          Feel free to reach out for collaborations or just a friendly hello.
        </p>
      </div>

      <div className="flex gap-8">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-4xl text-neutral-300 transition-all duration-300 transform hover:scale-125 hover:rotate-6 ${link.color}`}
            aria-label={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>

      <a
        href="mailto:paudelsaroj553@gmail.com"
        className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-neutral-900 font-lg rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 hover:bg-neutral-800 hover:shadow-xl hover:shadow-lime-500/20"
      >
        Say Hello
        <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      </a>
    </div>
  );
};

export default Contact;
