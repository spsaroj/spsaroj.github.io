import profilePic from '../assets/images/profile-pic.png';
import bdLogo from '../assets/images/bd-logo.svg';
import nwmsuLogo from '../assets/images/nwmsu-logo.svg';
import peepLogo from '../assets/images/peep-logo.svg';
import pncLogo from '../assets/images/pnc-logo.svg';
import refferoLogo from '../assets/images/reffero-logo.svg';
import unitecLogo from '../assets/images/unitec-logo.svg';

// Personal Information & Metadata
export const personalInfo = {
  name: 'Saroj Paudel',
  pronunciation: '(Sha rəʊz - Pou dɛl)',
  title: 'Full-Stack Software Engineer',
  specialization: 'Backend Systems, Event Streaming & Cybersecurity',
  location: 'Auckland, NZ',
  fullLocation: 'Auckland, New Zealand',
  email: 'paudelsaroj1@outlook.com',
  linkedin: 'https://www.linkedin.com/in/saroz-paudel',
  github: 'https://github.com/spsaroj',
  leetcode: 'https://leetcode.com/u/spsaroj/',
  workRights: 'Student Visa',
  status: 'Open to New Zealand Software Engineering roles',
  profilePic,
  profileSummary:
    "Backend engineer who builds event-driven systems with Kafka, Spring Boot and Go, and gets security right early, before it becomes an incident. I've shipped multi-tenant data isolation and QR payment flows across a US bank, a Kathmandu startup and multinational teams, and I'm completing a Master of Applied Technologies in Cybersecurity at Unitec. Nepali-born, US-trained, now Auckland-based. Outside work I run a homelab, hike, and argue about football. I'm after a team that explains things plainly and enjoys the work."
};

// Navigation Configuration
export const navigationConfig = {
  brandEmblem: 'S',
  navLinks: [
    { name: 'Home', href: '#overview', external: false },
    { name: 'Timeline', href: '#timeline', external: false },
    { name: 'Skills', href: '#skills', external: false }
    // { name: 'Toyaam', href: 'https://toyaam.com', external: true }
  ],
  contactCta: 'Contact'
};

// About Page Configuration & Bento Grid Content
export const aboutConfig = {
  greeting: 'Hi, I’m a software engineer',
  summary:
    'Passionate about event-driven architectures, scalable backend systems, and building secure platforms.',
  contactCta: 'Contact Me',
  valueCta: 'Where I Add Value',
  architectureCard: {
    pipeline: [
      { name: 'Kafka' },
      { name: 'Go / Spring' },
      { name: 'Security' }
    ],
    tag: 'Event-Driven Secure Architecture '
  },
  teamsCard: {
    title: "The teams & platforms I've happily engineered with ❤️",
    teams: ['PNC BANK', 'Becton Dickinson', 'REFFERO', 'UNITEC']
  },
  socialLinks: [
    { name: 'LinkedIn', key: 'linkedin' },
    { name: 'GitHub', key: 'github' },
    { name: 'LeetCode', key: 'leetcode' }
  ],
  mission: {
    badge: 'Engineering Focus & Mission',
    headline:
      'My mission is to engineer event-driven, distributed systems that stay fast under load and get security right early, before it becomes an incident.',
    description:
      "Nepali-born, US-trained, now New Zealand-based. I've shipped multi-tenant data boundaries at Reffero, real-time medical device pipelines at Becton Dickinsons, and streaming microservices at PNC Bank. Currently completing a Master of Applied Technologies in Cybersecurity at Unitec. Outside work I run a homelab, hike, and argue about football.",
    tags: ['Student Visa', 'Auckland, NZ']
  },
  valueModal: {
    title: 'Where I Add Value · Engineering Focus',
    subtitle: 'Technical Strengths & Problem Space Fit',
    closeText: 'Close'
  }
};

// Engineering Value Fit / Target Alignment
export const valueFit = [
  {
    title: 'The Hybrid Edge',
    description:
      'Most software vulnerabilities are architectural flaws rather than zero-days. With 4+ years building high-throughput pipelines at PNC Bank and multi-tenant platforms at Reffero, I bridge production software engineering with formal cybersecurity, building systems that are resilient, fault-tolerant, and secure by design from day zero.'
  },
  {
    title: 'Ideal Problem Space',
    description:
      'Distributed event streaming (Kafka, Redpanda), high-throughput backend services (Go, Java, Python), multi-tenant cloud infrastructure (AWS, OpenShift), and engineering teams seeking to embed security into their code lifecycle (DevSecOps).'
  },
  {
    title: 'Target Roles',
    roles: [
      'Senior Software Engineer',
      'Backend / Platform Engineer',
      'Full-Stack Engineer (Go / Vue / Nuxt)',
      'DevSecOps / Security-Focused Software Engineer'
    ]
  }
];

// Timeline Configuration & Career Experience Data
export const timelineConfig = {
  title: 'Education & Experience',
  hint: 'Click any degree or role for detailed achievements',
  legend: [
    { label: 'Work Experience', type: 'experience' },
    { label: 'Education', type: 'education' }
  ]
};

export const timelineColumns = [
  {
    period: '2016 – 2020',
    label: 'Foundation',
    items: [
      {
        id: 'nwmsu-bs',
        type: 'education',
        title: 'Bachelor of Science, Computer Science',
        institution: 'Northwest Missouri State University, US',
        period: 'Aug 2016 – Dec 2020',
        location: 'Maryville, MO, USA',
        status: 'Graduated',
        logo: nwmsuLogo,
        focus: [
          'Algorithms & Data Structures',
          'Operating Systems',
          'Systems Programming',
          'Relational Databases'
        ],
        details:
          'Foundation in computer science core principles, algorithms, data structures, and low-level software engineering methodologies.'
      }
    ]
  },
  {
    period: '2019 – 2023',
    label: 'Mobile & Enterprise',
    items: [
      {
        id: 'peep',
        type: 'experience',
        title: 'iOS Mobile Developer',
        institution: 'Peep Connect LLC, US',
        period: 'Apr 2019 – Sep 2021',
        location: 'Kansas City, USA',
        website: 'https://www.linkedin.com/company/peepconnect/',
        logo: peepLogo,
        summary:
          'Developed social media iOS application using Swift and SwiftUI with AWS backend hosting, Firebase notifications, and third-party SDK integrations.',
        highlights: [
          'Developed and debugged social media iOS app using Swift and SwiftUI (UIKit, Core Data, Combine), integrating REST APIs within MVVM architecture.',
          'Utilized AWS (EC2, RDS) for backend hosting and Firebase for messaging, analytics, and notifications; authored unit tests with XCTest.',
          'Integrated third-party SDKs like Twilio, Foursquare, and Mapbox to extend core app functionality.'
        ],
        tech: ['Swift', 'SwiftUI', 'UIKit', 'AWS', 'Firebase', 'XCTest']
      },
      {
        id: 'bd',
        type: 'experience',
        title: 'Software Developer',
        institution: 'Becton Dickinson, US',
        period: 'Nov 2021 – Mar 2023',
        location: 'Franklin Lakes, NJ, USA',
        website: 'https://www.bd.com',
        logo: bdLogo,
        summary:
          'Programmed Golang/Gin microservices and built Kafka-based services processing ~6,000 real-time events/sec from thousands of medical devices.',
        highlights: [
          'Programmed Golang/Gin microservices to process complex SOLR queries and handle HTTP request workloads.',
          'Built Kafka-based services for event-driven processing of real-time device log data (approx. 6,000 events/sec from thousands of medical devices).',
          'Wrote test cases for Golang microservices using Go Testing Package.',
          'Helped update existing marketplace UI built on top of Vue, enriching features and user experience.',
          'Contributed to high-performing Scrum environment: retrospectives, peer code reviews, and continuous delivery.'
        ],
        tech: ['Golang', 'Gin', 'Apache Kafka', 'Vue.js', 'SOLR', 'Go Testing']
      },
      {
        id: 'nwmsu-ms',
        type: 'education',
        title: 'Master of Science, Applied Computer Science',
        institution: 'Northwest Missouri State University, US',
        period: 'Aug 2023 – Dec 2024',
        location: 'Maryville, MO, USA',
        status: 'Graduated',
        logo: nwmsuLogo,
        focus: [
          'Advanced Distributed Systems',
          'Machine Learning Applications',
          'Cloud Architecture',
          'Database Systems',
          'Software Design Patterns'
        ],
        details:
          'Advanced systems engineering, specializing in scalable data pipelines and practical ML workflows.'
      }
    ]
  },
  {
    period: '2024 – PRESENT',
    label: 'Streaming & Scale',
    items: [
      {
        id: 'nwmsu-dev',
        type: 'experience',
        title: 'Software Developer',
        institution: 'Northwest Missouri State University, US',
        period: 'May 2024 – Dec 2024',
        location: 'Maryville, MO, USA',
        website: 'https://www.nwmissouri.edu',
        logo: nwmsuLogo,
        summary:
          'Developed, debugged, and maintained internal ML applications for campus operations using Python (FastAPI), Vue, and TypeScript.',
        highlights: [
          'Developed, debugged, and maintained internal ML applications for campus operations using Python (FastAPI), Vue, and TypeScript.',
          'Built predictive models with Canvas LMS data and Scikit-Learn to identify at-risk students and part-time instructor ranking, supporting data-driven decisions for campus operations.'
        ],
        tech: ['Python', 'FastAPI', 'Vue.js', 'TypeScript', 'Scikit-Learn']
      },
      {
        id: 'pnc',
        type: 'experience',
        title: 'Software Engineer',
        institution: 'PNC Bank, US',
        period: 'Feb 2025 – Dec 2025',
        location: 'Farmers Branch, TX, USA',
        website: 'https://www.pnc.com',
        logo: pncLogo,
        summary:
          "Engineered event-driven microservices using Golang, Kafka, and Java Kafka Streams supporting real-time data flows across the bank's streaming platform.",
        highlights: [
          "Engineered and maintained event-driven microservices using Golang, Kafka topics, and Java Kafka Streams, supporting real-time data flows across the bank's streaming platform.",
          'Configured source and sink connectors for migration from Confluent to Redpanda; built internal APIs/libraries to standardize Kafka topic management and schema validation across teams.',
          'Deployed and managed containerized services on OpenShift (OCP), integrating Go backend services with Oracle Database for streaming metadata and transactional logging.',
          'Wrote unit tests using Go Testing Package for microservices and Groovy for Kafka Streams.',
          'Served as technical communicator to 10+ product and analytics teams, ensuring seamless integration with Data Streaming Platform.',
          'Supported incident triage and resolution, maintaining SLA commitments for data pipeline uptime (99.9% uptime).',
          'Developed an internal Nuxt-based dashboard parsing and managing logs emitted by Java Kafka Streams applications for incident triage.'
        ],
        tech: [
          'Golang',
          'Java Kafka Streams',
          'Apache Kafka',
          'Redpanda',
          'OpenShift (OCP)',
          'Oracle',
          'Nuxt'
        ]
      },
      {
        id: 'reffero',
        type: 'experience',
        title: 'Senior Software Engineer',
        institution: 'Reffero Solutions, Nepal',
        period: 'Dec 2025 – Aug 2026',
        location: 'Kathmandu, Nepal',
        website: 'https://reffero.com',
        logo: refferoLogo,
        summary:
          'Designed and shipped core product features for a consumer-facing creator-commerce platform (Golang, Nuxt, PostgreSQL), enabling creators to launch and manage digital storefronts end-to-end.',
        highlights: [
          'Designed and shipped core product features for a consumer-facing creator-commerce platform (Golang, Nuxt, PostgreSQL), enabling creators to launch and manage digital storefronts end-to-end.',
          'Engineered multi-tenant architecture, custom domains, and isolated per-tenant data boundaries to securely support thousands of creator storefronts, guarding against cross-tenant data exposure.',
          'Implemented secure payment and checkout workflows (data encryption, no raw card storage, fraud checks), improving conversion by 30%.',
          'Optimized cloud infrastructure through resource right-sizing and environment isolation, cutting AWS spend by 14%.',
          'Designed a recommendation system spanning creator, product, and campaign suggestions, tuning model performance despite a limited training dataset.'
        ],
        tech: ['Golang', 'Nuxt', 'Vue.js', 'PostgreSQL', 'AWS']
      },
      {
        id: 'unitec',
        type: 'education',
        title: 'Master of Applied Technologies, Cybersecurity',
        institution: 'Unitec Institute of Technology, NZ',
        period: 'July 2026 – Present',
        location: 'Auckland, NZ',
        status: 'In Progress',
        logo: unitecLogo,
        focus: [
          'Cloud Security',
          'Threat Modeling',
          'Secure SDLC',
          'Applied Cryptography',
          'Risk Assessment',
          'Research'
        ],
        details:
          'Graduate Research, Formalizing security instincts from production systems to engineer resilient, secure-by-default software architectures.'
      }
    ]
  }
];

// Skills Page Configuration & Categories
export const skillsConfig = {
  title: 'Technical Skills',
  subtitle: 'Core engineering proficiencies & systems architecture',
  viewDetailsButton: 'View Details',
  coreSkills: [
    {
      id: 'golang',
      name: 'Golang',
      subtitle: 'Distributed Services',
      hoverBorderColor: '#00ADD8',
      hoverShadow: 'rgba(0,173,216,0.18)'
    },
    {
      id: 'java',
      name: 'Java',
      subtitle: 'Enterprise & Streams',
      hoverBorderColor: '#E76F00',
      hoverShadow: 'rgba(231,111,0,0.18)'
    },
    {
      id: 'kafka',
      name: 'Apache Kafka',
      subtitle: 'Event Streaming',
      hoverBorderColor: '#231F20',
      hoverShadow: 'rgba(0,0,0,0.18)'
    },
    {
      id: 'aws',
      name: 'AWS',
      subtitle: 'Cloud Infrastructure',
      hoverBorderColor: '#FF9900',
      hoverShadow: 'rgba(255,153,0,0.18)'
    },
    {
      id: 'ml',
      name: 'Machine Learning',
      subtitle: 'Predictive Pipelines',
      hoverBorderColor: '#6366F1',
      hoverShadow: 'rgba(99,102,241,0.18)'
    },
    {
      id: 'security',
      name: 'Secure System',
      subtitle: 'Hardened Architecture',
      hoverBorderColor: '#059669',
      hoverShadow: 'rgba(5,150,105,0.18)'
    }
  ],
  modal: {
    badge: 'Full Technical Inventory',
    title: 'Technical Skills & Tooling',
    subtitle: 'Languages, Frameworks, Streaming, Cloud, ML & Testing',
    interestsTitle: 'Personal Projects & Outside Work'
  }
};

export const resumeSkills = [
  {
    category: 'Languages',
    skills: ['Go', 'Java', 'Python', 'TypeScript', 'Swift']
  },
  {
    category: 'Frameworks & Frontend',
    skills: ['Vue.js', 'Nuxt', 'FastAPI', 'Spring Boot', 'Gin', 'SwiftUI', 'Tailwind CSS']
  },
  {
    category: 'Data & Streaming',
    skills: ['Apache Kafka', 'Kafka Streams', 'Redpanda', 'PostgreSQL', 'Oracle Database', 'SOLR']
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS (EC2, RDS)', 'OpenShift (OCP)', 'Jenkins', 'Docker', 'CI/CD']
  },
  {
    category: 'ML / AI',
    skills: ['Scikit-Learn', 'PyTorch', 'RAG', 'LLM']
  },
  {
    category: 'Testing',
    skills: ['Mockito', 'Go Testing Package', 'XCTest']
  }
];

export const outsideInterests = [
  'Running a homelab hosting open-source applications',
  'Personal routine management application',
  'Intelligent multi-agent setup for anomaly detection',
  'Football & hiking'
];

// Contact Section Configuration
export const contactConfig = {
  headlinePrefix: 'Open to',
  highlightLocation: 'New Zealand',
  headlineSuffix: 'Software Engineering Opportunities and Collaborations',
  locationLabel: 'Auckland',
  buttonText: 'Contact Me',
  emailSubject: 'Software Engineering Opportunity',
  copyTitle: 'Copy email address',
  copiedTitle: 'Copied to clipboard!',
  copiedText: 'Copied!'
};

// Global Footer Configuration
export const footerConfig = {
  copyrightHolder: 'Saroj Paudel',
  location: 'Auckland, New Zealand'
};
