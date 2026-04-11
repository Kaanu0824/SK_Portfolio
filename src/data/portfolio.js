// ── All portfolio content data ──

export const personal = {
  name: 'Kaanushan Sivarajah',
  firstName: 'Kaanushan',
  role: 'Software Engineer',
  tagline: 'Open to opportunities · UK',
  location: 'Hatfield, United Kingdom',
  description:
    'A skilled web designer & developer passionate about building visually appealing, user-friendly experiences. Currently pursuing an MSc in Software Engineering at the University of Hertfordshire, UK.',
  resumeUrl:
    'https://drive.google.com/file/d/1yusChTgj6UxDDeN-P707O7N6QY0iwnGj/view?usp=share_link',
  email: 'kaanushan@email.com',
};

export const stats = [
  { num: '1+', label: 'Yrs Exp' },
  { num: '10+', label: 'Modules' },
  { num: '30%', label: '↑ Engage' },
];

export const socials = [
  {
    label: 'LinkedIn',
    icon: 'in',
    url: 'https://www.linkedin.com/in/kaanushan-sivarasa/',
    short: 'linkedin.com/in/kaanushan-sivarasa',
  },
  {
    label: 'GitHub',
    icon: '⌥',
    url: 'https://github.com/Kaanu0824',
    short: 'github.com/Kaanu0824',
  },
  {
    label: 'WhatsApp',
    icon: '📱',
    url: 'https://wa.me/+447919056712',
    short: '+44 7919 056712',
  },
  {
    label: 'Instagram',
    icon: '✦',
    url: 'https://www.instagram.com/kaanu_sk_/',
    short: '@kaanu_sk_',
  },
  {
    label: 'Facebook',
    icon: 'f',
    url: 'https://web.facebook.com/KAANUSHAN',
    short: 'facebook.com/KAANUSHAN',
  },
];

export const skills = [
  'React JS', 'JavaScript', 'TypeScript', 'Node.js',
  'Angular', 'HTML5', 'CSS3', 'Firebase',
  'PostgreSQL', 'Figma', 'Photoshop', 'Illustrator',
];

export const marqueeItems = [
  'React JS', 'JavaScript', 'TypeScript', 'Node.js',
  'HTML & CSS', 'Angular', 'Firebase', 'PostgreSQL',
  'UI/UX Design', 'Adobe Photoshop', 'Figma', 'Illustrator',
];

export const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'Skilled in building responsive and dynamic websites through front-end and back-end development with modern frameworks and best practices.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Experienced in crafting intuitive and user-centered designs — from wireframes and prototypes to polished, production-ready interfaces.',
  },
  {
    icon: '📱',
    title: 'App Development',
    desc: 'Proficient in developing and deploying functional, user-friendly mobile and web applications with seamless user experiences.',
  },
];

export const aboutParagraphs = [
  `I bring a strong understanding of design and a keen eye for detail to every project. From responsive layouts to performance-optimized interfaces, I love building things that people enjoy using.`,
  `With experience across both front-end and back-end development, I bridge the gap between design and engineering — creating products where every pixel and every line of code serves a purpose.`,
  `Currently levelling up with an MSc in Software Engineering at the University of Hertfordshire, UK.`,
];

export const projects = [
  {
    title: 'EduBridge — Student Wellbeing AI',
    tag: 'MSc Project',
    tagClass: 'featured',
    category: 'AI',
    icon: '🧠',
    desc: 'A multimodal AI system for real-time student stress detection using face emotion recognition, voice stress analysis, and an NLP-powered support chatbot. Built as a full-stack MSc research application.',
    stack: ['Python', 'Flask', 'TensorFlow', 'React 18', 'OpenCV', 'Librosa', 'scikit-learn'],
    githubUrl: 'https://github.com/Kaanu0824/Edubridge-FullStack-MSC',
    featured: true,
    highlights: [
      'CNN-based real-time face emotion detection (6 emotions)',
      'MFCC voice stress classifier with Dense neural network',
      'NLP chatbot across 14 student wellbeing categories',
      'Fused stress scoring with downloadable session reports',
    ],
  },
  {
    title: 'Task Management Application',
    tag: 'Full Stack',
    tagClass: 'fullstack',
    category: 'Full Stack',
    icon: '✅',
    desc: 'A full-stack task management app with JWT authentication, allowing users to create, update, delete and track daily tasks through a clean, responsive dashboard.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'CSS'],
    githubUrl: 'https://github.com/Kaanu0824/Task-Management-Application',
    featured: false,
    highlights: [
      'Secure user authentication with JWT',
      'Full CRUD task operations',
      'Responsive dashboard UI',
      'Context API for state management',
    ],
  },
  {
    title: 'Employee Shift Tracker',
    tag: 'Web App',
    tagClass: 'webapp',
    category: 'Full Stack',
    icon: '🕐',
    desc: 'A web application for tracking and managing employee shifts. Enables managers to schedule, monitor and manage staff working hours through an intuitive interface.',
    stack: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/Kaanu0824/Employee-Shift-Tracker-Web-Application',
    featured: false,
    highlights: [
      'Employee shift scheduling & management',
      'Real-time shift tracking dashboard',
      'Role-based access for managers & staff',
      'Clean responsive interface',
    ],
  },
  {
    title: 'SK Clinic System',
    tag: 'Java',
    tagClass: 'java',
    category: 'Java',
    icon: '🏥',
    desc: 'A Java-based console application that manages patients, appointments, physiotherapists and treatments for a physiotherapy clinic with full booking lifecycle management.',
    stack: ['Java 11+', 'JUnit 5', 'OOP', 'Console UI'],
    githubUrl: 'https://github.com/Kaanu0824/Clinic-System',
    featured: false,
    highlights: [
      'Patient management — add, view, remove',
      'Appointment booking with slot selection',
      'Change & cancel appointment flows',
      'Summary report generation with JUnit 5 tests',
    ],
  },
  {
    title: 'Physio Clinic Booking System',
    tag: 'Java',
    tagClass: 'java',
    category: 'Java',
    icon: '💆',
    desc: 'A Java console application for the Boost Physio Clinic enabling patients to book, modify and cancel physiotherapy appointments with full report generation.',
    stack: ['Java', 'JUnit', 'OOP', 'Console UI'],
    githubUrl: 'https://github.com/Kaanu0824/Physio-Clinic-Booking-System',
    featured: false,
    highlights: [
      'Book appointments by treatment & physiotherapist',
      'Change and cancel existing bookings',
      'Attend treatment appointment tracking',
      'Generate full booking summary reports',
    ],
  },
  {
    title: 'Expense Tracking System',
    tag: 'React',
    tagClass: 'webapp',
    category: 'Full Stack',
    icon: '💰',
    desc: 'A React-based expense tracking application that allows users to log, categorise and monitor their daily expenses through a clean and responsive interface.',
    stack: ['React.js', 'JavaScript', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/Kaanu0824/Expense-Tracking-System',
    featured: false,
    highlights: [
      'Add and categorise expenses easily',
      'Real-time expense summary dashboard',
      'Filter and view expenses by category',
      'Clean, responsive React UI',
    ],
  },
];

export const education = [
  {
    badge: 'MSc · Current',
    badgeClass: 'msc',
    degree: 'Master of Science in Software Engineering',
    school: 'University of Hertfordshire · Hatfield, UK',
    period: '2025 — Present',
    highlight: true,
  },
  {
    badge: 'BSc (Hons)',
    badgeClass: 'bsc',
    degree: 'Bachelor of Science in Information Technology',
    school: 'Sri Lanka Institute of Information Technology (SLIIT)',
    period: '2020 — 2024',
    highlight: false,
  },
  {
    badge: 'A/L',
    badgeClass: 'al',
    degree: 'Advanced Level — Physical Science Stream',
    school: 'Jaffna Hindu College',
    period: '2017 — 2019',
    highlight: false,
  },
  {
    badge: 'O/L',
    badgeClass: 'ol',
    degree: 'Ordinary Level',
    school: 'Kodikamam Thirunavukarasu Central College',
    period: '2006 — 2016',
    highlight: false,
  },
];

export const educationNote = `I am a proud graduate of SLIIT with a BSc (Hons) in Information Technology, specialising in IT. My academic foundation was built at Jaffna Hindu College (A/Ls, Physical Science stream) and Kodikamam Thirunavukarasu Central College (O/Ls). In 2025, I began an exciting new chapter pursuing an MSc in Software Engineering at the University of Hertfordshire, UK.`;

export const experience = [
  {
    role: 'Intern Software Engineer',
    company: 'DH3 Solutions Private Limited (Silver Leap Technology Pvt Ltd)',
    location: 'Sri Lanka',
    period: 'Jun 2022 — Feb 2023',
    summary:
      "Worked as a front-end developer on the LB Finance Wallet Application — a project with both a web portal and mobile app serving customers' daily banking needs.",
    bullets: [
      'Created responsive UI components using React techniques, resulting in a 20% faster loading time for web pages.',
      'Implemented application interfaces using React JS and JavaScript, converting designs into high-quality code for 10 different modules.',
      'Improved existing features and contributed to new ones, achieving a 30% increase in user engagement and satisfaction.',
      'Developed a new software feature resulting in a 15% increase in user engagement.',
    ],
  },
];

export const emailjsConfig = {
  serviceId: 'SK1700',
  templateId: 'template_v2do518',
  publicKey: '_Q0aljcJxeRDA8vMe',
};