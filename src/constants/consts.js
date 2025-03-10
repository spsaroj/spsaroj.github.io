import meditationImage from '../assets/images/meditation.jpg'
import personalDatabaseImage from '../assets/images/personal-database.jpg'
import sentimentAnalysisImage from '../assets/images/sentiment-analysis.jpg';
import videoCallingImage from '../assets/images/video-calling.jpg';
import dumplingImage from '../assets/images/dumpling.jpg';

import nwmsuLogo from '../assets/images/nwmsu-logo.png';
import morganstanleyLogo from '../assets/images/morgan-stanley-logo.png';
import bdLogo from '../assets/images/bd-logo.png'
import peepLogo from '../assets/images/peep-logo.png';

export const workExperiences = [
  {
    company: 'Northwest Missouri State University',
    role: 'Software Developer',
    duration: 'May 2024 - Dec 2024',
    description: 'Python, JavaScript, SQL, VueJS, Machine Learning Algorithms.',
    logo: `${nwmsuLogo}`,
    website: 'https://www.nwmissouri.edu/academics/LTC/learning/index.htm',
  },
  {
    company: 'Northwest Missouri State University',
    role: 'Graduate Assistant',
    duration: 'Jan 2024 - Dec 2024',
    description: 'Python, Machine Learning Algorithms.',
    logo: `${nwmsuLogo}`,
    website: 'https://www.nwmissouri.edu/csis/',
  },
  {
    company: 'Becton, Dickinson and Company (BD)',
    role: 'Software Developer',
    duration: 'Apr 2022 - Feb 2023',
    description: 'Java Enterprise, Spring Boot, React',
    logo: `${bdLogo}`,
    website: 'https://www.bd.com/en-us/',
  },
  {
    company: 'Morgan Stanley',
    role: 'Software Developer',
    duration: 'Sept 2021 - Apr 2022',
    description: 'Java Enterprise, Adobe Experience Manager (AEM), React.',
    logo: `${morganstanleyLogo}`,
    website: 'https://www.morganstanley.com/',
  },
  {
    company: 'Peep Connect',
    role: 'Mobile Developer',
    duration: 'Mar 2019 - Sept 2021',
    description: 'SwiftUI, UIKit, AWS, Project Management.',
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
    { name: 'AWS', icon: '☁️' },
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
