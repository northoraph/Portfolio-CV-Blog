export const siteConfig = {
  name: "Raphael Northoff",
  title: "Raphael Northoff's Portfolio",
  description: "A showcase of my work and experience in Industrial & Control Engineering",
  social: {
    github: "#",
    twitter: "#",
  },
};

export const homeContent = {
  title: "Hello, I'm Raphael Northoff",
  description:
    "Master's student in Industrial Engineering and Automation with a passion for control systems, robotics, and simulation.",
  buttons: {
    about: {
      text: "View About",
      href: "/Portfolio-CV-Blog/about/",
    },
    posts: {
      text: "Read Posts",
      href: "/Portfolio-CV-Blog/posts/",
    },
  },
  images: {
    light: "https://multiplepage-portfolio.edgeone.app/assets/images/tech-background-light.svg",
    dark: "/Portfolio-CV-Blog/assets/images/tech-background-dark.svg",
  },
};

export const aboutContent = {
  meta: {
    title: "About - Raphael Northoff",
    description: "Learn more about my background, skills, and experience",
  },
  title: "About Me",
  description:
    "I am an Industrial and Control Engineering Master's student passionate about automation, robotics, and control systems. I have experience working with ROS 2, PX4, and MATLAB/Simulink for modeling and trajectory tracking. I enjoy tackling complex engineering problems and developing robust software frameworks.",
  skills: [
    "Python",
    "C++",
    "MATLAB/Simulink",
    "ROS 2",
    "PX4",
    "TIA Portal",
    "PyTorch",
    "Linux (Bash)",
  ],
  image: {
    src: "/Portfolio-CV-Blog/assets/images/about/coder.jpg",
    alt: "Raphael Northoff",
  },
  experience: {
    title: "Experience",
    items: [
      {
        period: "May 2026 - Nov 2026",
        position: "Master Thesis",
        company: "Institute for Flight Dynamics and Control, Darmstadt",
        description:
          "Design and implementation of trajectory tracking control for a hybrid UAV using PX4, ROS 2, Python and C++.",
      },
      {
        period: "Apr 2024 - Aug 2024",
        position: "Control Engineer Intern",
        company: "Schneider Electric SE, Grenoble",
        description:
          "Developed and validated a MATLAB/Simulink model for IEC 61557-12 compliant power measurement systems.",
      },
      {
        period: "Aug 2022 - Mar 2023",
        position: "Project Management Assistant",
        company: "Renk AG, Augsburg",
        description: "Coordinated customer communication, FATs and engineering documentation for maritime gearbox projects.",
      },
    ],
  },
  education: {
    title: "Education",
    items: [
      {
        period: "Sep 2025 - Oct 2026 (expected)",
        degree: "Professional Master (Automation of Intelligent Systems)",
        institution: "École Centrale de Lyon, France",
      },
      {
        period: "Oct 2024 - Mar 2027 (expected)",
        degree: "M.Sc. Industrial Engineering (Automation)",
        institution: "TU Darmstadt, Germany",
      },
      {
        period: "Oct 2020 - Sep 2024",
        degree: "B.Eng. Industrial Engineering",
        institution: "TH Augsburg, Germany",
      },
      {
        period: "Oct 2011 - Mar 2020",
        degree: "High School Diploma (Abitur)",
        institution: "Max Slevogt Gymnasium Landau, Germany",
      },
    ],
  },
  hobbies: {
    title: "Hobbies & Interests",
    items: [
      "Rugby (Regional League)",
      "Tennis (Regular training)",
      "Trekking (GR20, Mont Blanc, Zugspitze)",
      "Bilingual: German & French. Fluent: English",
    ],
  },
  connect: {
    title: "Let's Connect",
    description:
      "Feel free to reach out if you want to collaborate or just say hi! You can contact me via my social profiles.",
    email: {
      text: "",
      href: "#",
    },
  },
};

export const coursesContent = {
  meta: {
    title: "Courses - Raphael Northoff",
    description:
      "Overview of the courses and modules from my Bachelor's at TH Augsburg, my Master's at TU Darmstadt and my double-degree year at École Centrale de Lyon.",
  },
  title: "Courses & Modules",
  description:
    "A rough, thematic overview of the modules I've taken across my Bachelor's (TH Augsburg), Master's (TU Darmstadt) and double-degree year (École Centrale de Lyon). German modules are graded 1.0 (best) to 5.0 (fail); French modules are graded out of 20 (best) — grade equivalence to be added later.",
  categories: [
    {
      name: "Control Theory & Automation",
      courses: [
        {
          title: "Automatisierungstechnik 1",
          institution: "TH Augsburg",
          grade: "2.3",
          description: "Introduction to control loops, PLC programming and basic automation concepts.",
        },
        {
          title: "Automatisierungstechnik 2",
          institution: "TH Augsburg",
          grade: "1.7",
          description: "Advanced automation and process control concepts.",
        },
        {
          title: "Automatisierungstechnik Praktikum",
          institution: "TH Augsburg",
          grade: "Pass",
          description: "Hands-on lab exercises applying automation and PLC concepts.",
        },
        {
          title: "Systems Engineering",
          institution: "TH Augsburg",
          grade: "1.7",
          description: "Interdisciplinary methods for designing and managing complex technical systems.",
        },
        {
          title: "System Dynamics and Automatic Control Systems III",
          institution: "TU Darmstadt",
          grade: "In Progress",
          description: "Advanced control theory covering state-space methods and system dynamics.",
        },
        {
          title: "Automation Technology in Process Industries",
          institution: "TU Darmstadt",
          grade: "In Progress",
          description: "Automation and control systems applied to process industries.",
        },
        {
          title: "Sensor Technique",
          institution: "TU Darmstadt",
          grade: "2.3",
          description: "Sensor principles and measurement technology for automation systems.",
        },
        {
          title: "Automatique des systèmes dynamiques linéaires 2",
          institution: "École Centrale de Lyon",
          grade: "11.66/20",
          description: "Advanced linear control theory for dynamical systems.",
        },
        {
          title: "Commande optimale",
          institution: "École Centrale de Lyon",
          grade: "14.68/20",
          description: "Optimal control theory, including Pontryagin's principle and dynamic programming.",
        },
        {
          title: "Commande des systèmes dynamiques non-linéaires",
          institution: "École Centrale de Lyon",
          grade: "12.33/20",
          description: "Control design methods for nonlinear dynamical systems.",
        },
        {
          title: "Distributed parameter systems",
          institution: "École Centrale de Lyon",
          grade: "8.23/20",
          description: "Modeling and control of systems governed by partial differential equations.",
        },
        {
          title: "Observation des systèmes dynamiques non linéaires",
          institution: "École Centrale de Lyon",
          grade: "11/20",
          description: "State estimation and observer design for nonlinear systems.",
        },
        {
          title: "Automatique Avancée",
          institution: "École Centrale de Lyon",
          grade: "9.25/20",
          description: "Advanced topics in automatic control systems.",
        },
        {
          title: "Identification des systèmes et décomposition parcimonieuse des signaux",
          institution: "École Centrale de Lyon",
          grade: "8.68/20",
          description: "System identification techniques and sparse signal decomposition.",
        },
        {
          title: "Diagnostic et Sûreté de Fonctionnement",
          institution: "École Centrale de Lyon",
          grade: "In Progress",
          description: "Fault detection, diagnosis and dependability analysis of systems.",
        },
      ],
    },
    {
      name: "Energy Systems",
      courses: [
        {
          title: "Elektrische Energietechnik",
          institution: "TH Augsburg",
          grade: "4.0",
          description: "Fundamentals of electrical power generation, transmission and machines.",
        },
        {
          title: "Energietechnische Anlagen",
          institution: "TH Augsburg",
          grade: "2.7",
          description: "Design and operation of power plant equipment.",
        },
        {
          title: "Erneuerbare Energien Praktikum",
          institution: "TH Augsburg",
          grade: "Pass",
          description: "Practical lab work on renewable energy systems.",
        },
        {
          title: "Renewable Energies",
          institution: "TH Augsburg",
          grade: "2.0",
          description: "Solar, wind and other renewable energy technologies.",
        },
        {
          title: "Technical Thermodynamics I",
          institution: "TU Darmstadt",
          grade: "4.0",
          description: "Fundamentals of thermodynamic cycles and energy conversion.",
        },
      ],
    },
    {
      name: "Electrical Engineering & Electronics",
      courses: [
        {
          title: "Elektrotechnik",
          institution: "TH Augsburg",
          grade: "2.3",
          description: "Fundamentals of circuit theory and electromagnetism.",
        },
        {
          title: "Elektronik",
          institution: "TH Augsburg",
          grade: "2.3",
          description: "Analog and digital electronic circuit design.",
        },
        {
          title: "Praktikum Elektrotechnik",
          institution: "TH Augsburg",
          grade: "Pass",
          description: "Hands-on lab work in electrical engineering fundamentals.",
        },
        {
          title: "Elektronische Bauelemente",
          institution: "TH Augsburg",
          grade: "3.3",
          description: "Semiconductor devices and electronic component design.",
        },
        {
          title: "Automobilelektronik",
          institution: "TH Augsburg",
          grade: "1.7",
          description: "Electronic systems used in automotive applications.",
        },
        {
          title: "Elektronik Produktion",
          institution: "TH Augsburg",
          grade: "2.3",
          description: "Manufacturing processes for electronic components.",
        },
      ],
    },
    {
      name: "Mechanics & Materials",
      courses: [
        {
          title: "Werkstoffphysik",
          institution: "TH Augsburg",
          grade: "2.3",
          description: "Physical properties and behavior of engineering materials.",
        },
        {
          title: "Mechanik",
          institution: "TH Augsburg",
          grade: "4.0",
          description: "Statics, dynamics and strength of materials.",
        },
      ],
    },
    {
      name: "Mathematics & Optimization",
      courses: [
        {
          title: "Mathematik 1",
          institution: "TH Augsburg",
          grade: "2.7",
          description: "Differential and integral calculus and linear algebra for engineers.",
        },
        {
          title: "Mathematik 2",
          institution: "TH Augsburg",
          grade: "1.0",
          description: "Multivariable calculus, differential equations and series.",
        },
        {
          title: "Recherche opérationnelle",
          institution: "École Centrale de Lyon",
          grade: "11.73/20",
          description: "Optimization methods for decision-making and resource allocation.",
        },
        {
          title: "Robustesse et optimisation convexe",
          institution: "École Centrale de Lyon",
          grade: "8.7/20",
          description: "Convex optimization techniques and robust control design.",
        },
      ],
    },
    {
      name: "Computer Science & Software",
      courses: [
        {
          title: "Informatik",
          institution: "TH Augsburg",
          grade: "3.7",
          description: "Programming fundamentals and computer science basics.",
        },
        {
          title: "MATLAB / Simulink",
          institution: "TH Augsburg",
          grade: "2.3",
          description: "Modeling and simulation using MATLAB/Simulink.",
        },
        {
          title: "Evolution Künstliche Intelligenz und menschliche Gesellschaft",
          institution: "TH Augsburg",
          grade: "1.0",
          description: "Interdisciplinary seminar on the evolution of AI and its impact on society.",
        },
        {
          title: "Resilient Communication Networks",
          institution: "TU Darmstadt",
          grade: "2.7",
          description: "Design of fault-tolerant and resilient communication networks.",
        },
      ],
    },
    {
      name: "Management & Business",
      courses: [
        {
          title: "Allgemeine BWL/Industriebetriebslehre",
          institution: "TH Augsburg",
          grade: "2.3",
          description: "Fundamentals of general business administration and industrial operations.",
        },
        {
          title: "Buchführung und Bilanzierung",
          institution: "TH Augsburg",
          grade: "4.0",
          description: "Principles of bookkeeping and financial accounting.",
        },
        {
          title: "Marketing und Vertrieb",
          institution: "TH Augsburg",
          grade: "3.0",
          description: "Marketing strategy and sales fundamentals.",
        },
        {
          title: "Production and Logistics",
          institution: "TH Augsburg",
          grade: "1.7",
          description: "Production planning and logistics management.",
        },
        {
          title: "Human Resource Management and Organization",
          institution: "TH Augsburg",
          grade: "2.0",
          description: "Organizational behavior and human resource management principles.",
        },
        {
          title: "Kosten- und Leistungsrechnung / Controlling",
          institution: "TH Augsburg",
          grade: "4.0",
          description: "Cost accounting and management controlling.",
        },
        {
          title: "Economics",
          institution: "TH Augsburg",
          grade: "4.0",
          description: "Micro- and macroeconomic principles.",
        },
        {
          title: "Finance and Investment",
          institution: "TH Augsburg",
          grade: "3.7",
          description: "Corporate finance and investment appraisal methods.",
        },
        {
          title: "Strategic Management",
          institution: "TH Augsburg",
          grade: "1.3",
          description: "Corporate strategy formulation and analysis.",
        },
        {
          title: "Operations Management",
          institution: "TH Augsburg",
          grade: "2.7",
          description: "Management of production and service operations.",
        },
        {
          title: "Mastering Global Expansion",
          institution: "TH Augsburg",
          grade: "Pass",
          description: "Strategies for international business expansion.",
        },
        {
          title: "Fundamental of Finance I",
          institution: "TU Darmstadt",
          grade: "2.7",
          description: "Core principles of corporate finance.",
        },
        {
          title: "Real Estate Management",
          institution: "TU Darmstadt",
          grade: "2.0",
          description: "Real estate investment and management fundamentals.",
        },
        {
          title: "Technology and Innovation Management",
          institution: "TU Darmstadt",
          grade: "1.0",
          description: "Managing technological innovation in organizations.",
        },
        {
          title: "Advanced Technology and Innovation Management",
          institution: "TU Darmstadt",
          grade: "1.7",
          description: "Advanced strategies for technology-driven innovation.",
        },
        {
          title: "Venture Valuation",
          institution: "TU Darmstadt",
          grade: "2.3",
          description: "Valuation methods for startups and ventures.",
        },
      ],
    },
    {
      name: "Languages & Communication",
      courses: [
        {
          title: "Introduction to Business & Technical English (B2-)",
          institution: "TH Augsburg",
          grade: "2.7",
          description: "Business and technical English at intermediate level.",
        },
        {
          title: "Wirtschaftsfranzösisch 5 (B1+)",
          institution: "TH Augsburg",
          grade: "1.0",
          description: "Business French, intermediate level.",
        },
        {
          title: "Wirtschaftsfranzösisch 6 (B2)",
          institution: "TH Augsburg",
          grade: "2.3",
          description: "Business French, upper-intermediate level.",
        },
        {
          title: "Intermediate Business & Technical English (B2+)",
          institution: "TH Augsburg",
          grade: "2.3",
          description: "Business and technical English, upper-intermediate level.",
        },
        {
          title: "Anglais",
          institution: "École Centrale de Lyon",
          grade: "15.36/20",
          description: "Academic and technical English.",
        },
      ],
    },
    {
      name: "Practical Training & Research Projects",
      courses: [
        {
          title: "Master Seminar",
          institution: "TU Darmstadt",
          grade: "3.0",
          description: "Independent research work and scientific presentation seminar.",
        },
        {
          title: "Projet d'initiation à la recherche",
          institution: "École Centrale de Lyon",
          grade: "In Progress",
          description: "Introductory research project in automation and control.",
        },
        {
          title: "Stage",
          institution: "École Centrale de Lyon",
          grade: "In Progress",
          description: "Practical internship / thesis placement.",
        },
      ],
    },
  ],
};

export const projectsContent = {
  meta: {
    title: "Projects - Your Portfolio",
    description: "Showcase of my best work and projects",
  },
  title: "Our Projects",
  description:
    "Here you can showcase your best work. Each project should include a brief description, the technologies used, and any notable achievements. This helps potential clients or employers understand your capabilities.",
  projects: [
    {
      title: "Project One",
      description:
        "A brief description of your first project. Explain what it does and what technologies you used.",
      image: "/Portfolio-CV-Blog/assets/images/projects/project1.jpg",
      href: "#",
    },
  ],
};

