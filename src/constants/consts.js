import meditationImage from '../assets/images/meditation.jpg'
import personalDatabaseImage from '../assets/images/personal-database.jpg'
import sentimentAnalysisImage from '../assets/images/sentiment-analysis.jpg';
import videoCallingImage from '../assets/images/video-calling.jpg';
import dumplingImage from '../assets/images/dumpling.jpg';

import nwmsuLogo from '../assets/images/nwmsu-logo.png';
import genpactLogo from '../assets/images/genpact-logo.png';
import bdLogo from '../assets/images/bd-logo.png';
import peepLogo from '../assets/images/peep-connect-logo.png';

export const workExperiences = [
  {
    company: 'Northwest Missouri State University',
    role: 'Software Developer',
    duration: 'May 2024 - Present',
    description: 'Developed and maintained web applications, collaborated with cross-functional teams, and led several projects to successful completion.',
    logo: `${nwmsuLogo}`,
    website: 'https://www.nwmissouri.edu/academics/LTC/learning/index.htm',
  },
  {
    company: 'Northwest Missouri State University',
    role: 'Graduate Assistant',
    duration: 'Jan 2024 - Present',
    description: 'Developed and maintained web applications, collaborated with cross-functional teams, and led several projects to successful completion.',
    logo: `${nwmsuLogo}`,
    website: 'https://www.nwmissouri.edu/csis/',
  },
  {
    company: 'Becton Dickinson',
    role: 'Software Developer',
    duration: 'Apr 2022 - Dec 2022',
    description: 'Worked on improving the user interface and experience of the company’s flagship product, optimized performance, and implemented responsive design.',
    logo: `${bdLogo}`,
    website: 'https://www.bd.com/',
  },
  {
    company: 'Genpact',
    role: 'Software Developer',
    duration: 'Nov 2021 - Mar 2022',
    description: 'Assisted in developing internal tools, learned about agile development practices, and contributed to code reviews and testing.',
    logo: `${genpactLogo}`,
    website: 'https://www.genpact.com/',
  },
  {
    company: 'Peep Connect',
    role: 'Mobile Developer',
    duration: 'Mar 2019 - Sept 2021',
    description: 'Assisted in developing internal tools, learned about agile development practices, and contributed to code reviews and testing.',
    logo: `${peepLogo}`,
    website: 'https://www.linkedin.com/company/peepconnect/',
  }
];

  
  export const projects = [
    {
      name: 'Happify',
      link: 'https://github.com/',
      backgroundImage: `url(${meditationImage})`
    },
    {
      name: 'Homelab Mini',
      link: 'https://github.com/',
      backgroundImage: `url(${personalDatabaseImage})`
    },
    {
      name: 'Sentiment Analysis Using ML',
      link: 'https://github.com/',
      backgroundImage: `url(${sentimentAnalysisImage})`
    },
    {
      name: 'AnythingVideo',
      link: 'https://github.com/',
      backgroundImage: `url(${videoCallingImage})`
    },
    {
      name: 'The Dallas',
      link: 'https://github.com/',
      backgroundImage: `url(${dumplingImage})`
    }
  ];

export const skills = {
    technical: [
      { name: 'Java', icon: '☕️' },
      { name: 'Spring Boot', icon: '🍃' },
      { name: 'React', icon: '⚛️' },
      { name: 'Python', icon: '🐍' },
      { name: 'Database', icon: '💾' },
    ],
    interests: [
      { name: 'Machine Learning', icon: '🤖' },
      { name: 'Blockchain', icon: '₿' },
      { name: 'Open Source', icon: '🌍' },
      { name: 'Human Computer Interaction', icon: '🧑🏻‍💻' },
    ],
    hobbies: [
      { name: 'Soccer', icon: '⚽' },
      { name: 'Photography', icon: '📷' },
      { name: 'Music', icon: '🎵' },
      { name: 'Traveling', icon: '✈️' },
    ]
  };

  export const youtubeVideo = {
    url: "https://www.youtube.com/embed/znLnKFH8HnA",
  };
