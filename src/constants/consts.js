import nwmsuLogo from '../assets/images/nwmsu-logo.png';
import pncLogo from '../assets/images/pnc-bank-logo.png';
import bdLogo from '../assets/images/bd-logo.png';
import peepLogo from '../assets/images/peep-logo.png';

export const workExperiences = [
  {
    company: 'PNC Bank',
    role: 'Senior Software Engineer',
    duration: 'Feb 2025 - Dec 2025',
    description: 'Java, Kafka, Redpanda, Spring Boot, OCP, Oracle, CI/CD.',
    logo: `${pncLogo}`,
    website: 'https://www.pnc.com',
  },
  {
    company: 'Northwest Missouri State University',
    role: 'Software Developer',
    duration: 'Jan 2024 - Dec 2024',
    description: 'Python, JavaScript, SQL, VueJS, Machine Learning, Generative AI.',
    logo: `${nwmsuLogo}`,
    website: 'https://www.nwmissouri.edu/academics/LTC/learning/index.htm',
  },
  {
    company: 'Becton, Dickinson and Company (BD)',
    role: 'Software Developer',
    duration: 'Sept 2021 - Feb 2023',
    description: 'Java, Spring Boot, React, SQL, AWS, CI/CD.',
    logo: `${bdLogo}`,
    website: 'https://www.bd.com/en-us/',
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


export const skills = {
  technical: [
    { name: 'Web Development', icon: '👨🏻‍💻' },
    { name: 'Mobile Development', icon: '📱' },
    { name: 'AI/ML Integration', icon: '🤖' },
    { name: 'DevOps', icon: '☁️' },
    { name: 'Project Management', icon: '📋' },
    { name: 'Consulting', icon: '🤝' },
  ],
};