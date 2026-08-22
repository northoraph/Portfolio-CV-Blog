export const supabaseConfig = {
  // Create a free project at https://supabase.com, then paste the values
  // from Project Settings -> API here. The anon/public key is safe to
  // expose client-side; access is controlled by Row Level Security.
  url: "https://mnuclaugwqlurfhyqmbh.supabase.co",
  anonKey: "sb_publishable_Ew5ZEGB8PpU-_BpkiERuug_SWrBF1UW",
};

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
  video: {
    src: "/Portfolio-CV-Blog/assets/videos/hero.webm",
    poster: "/Portfolio-CV-Blog/assets/images/hero.jpg",
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
    src: "/Portfolio-CV-Blog/assets/images/hero.jpg",
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
        logo: "/Portfolio-CV-Blog/assets/images/logos/tu-darmstadt.svg",
      },
      {
        period: "Apr 2024 - Aug 2024",
        position: "Control Engineer Intern",
        company: "Schneider Electric SE, Grenoble",
        description:
          "Developed and validated a MATLAB/Simulink model for IEC 61557-12 compliant power measurement systems.",
        logo: "/Portfolio-CV-Blog/assets/images/logos/schneider-electric.svg",
      },
      {
        period: "Aug 2022 - Mar 2023",
        position: "Project Management Assistant",
        company: "Renk AG, Augsburg",
        description: "Coordinated customer communication, FATs and engineering documentation for maritime gearbox projects.",
        logo: "/Portfolio-CV-Blog/assets/images/logos/renk-ag.svg",
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
        logo: "/Portfolio-CV-Blog/assets/images/logos/ecole-centrale-lyon.png",
      },
      {
        period: "Oct 2024 - Mar 2027 (expected)",
        degree: "M.Sc. Industrial Engineering (Automation)",
        institution: "TU Darmstadt, Germany",
        logo: "/Portfolio-CV-Blog/assets/images/logos/tu-darmstadt.svg",
      },
      {
        period: "Oct 2020 - Sep 2024",
        degree: "B.Eng. Industrial Engineering",
        institution: "TH Augsburg, Germany",
        logo: "/Portfolio-CV-Blog/assets/images/logos/th-augsburg.png",
      },
      {
        period: "Oct 2011 - Mar 2020",
        degree: "High School Diploma (Abitur)",
        institution: "Max Slevogt Gymnasium Landau, Germany",
        logo: "/Portfolio-CV-Blog/assets/images/logos/max-slevogt-gymnasium.png",
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
  competencies: {
    title: "Core Competencies",
    description:
      "A closer look at the experience behind my CV: how I work, what I've built, and what I do outside of engineering.",
    items: [
      {
        title: "Control & Automation Engineering",
        description:
          "Trajectory tracking control for a hybrid UAV in my Master's thesis, implemented in the PX4 flight stack with ROS 2, Python and C++, covering the full cycle from simulation and experiment design to flight testing and log analysis.",
      },
      {
        title: "Model-Based Validation & Standards",
        description:
          "Developed and validated a MATLAB/Simulink model of a power measurement system against IEC 61557-12 at Schneider Electric, validating the system architecture before prototype manufacturing in a cross-disciplinary team.",
      },
      {
        title: "Project & Risk Management",
        description:
          "Ran FMEA-based risk analyses and coordinated Factory Acceptance Tests with international naval customers for maritime gearbox projects at Renk AG.",
      },
      {
        title: "Renewable Energy & Grids",
        description:
          "My Bachelor's thesis, conducted with Stadtwerke München, evaluated the impact of photovoltaic expansion on urban power grids.",
      },
      {
        title: "Entrepreneurship & Leadership",
        description:
          "Led a five-student team over five months on a market potential analysis for a high-tech innovation with TU Darmstadt's Institute of Microwave Engineering and Photonics, from scheduling to the final client presentation.",
        link: {
          text: "Read more about the project →",
          href: "/Portfolio-CV-Blog/posts/terahertz-project/",
        },
      },
      {
        title: "Robotics",
        description:
          "Helped build the ROS 2 control framework for DARE Robotics Club's self-built robotic arm, covering both autonomous mission execution and joystick teleoperation.",
      },
      {
        title: "Financial Markets",
        description:
          "Active member of the university trading teams at both TH Augsburg and TU Darmstadt, alongside hands-on trading experience and workshops on derivative and company valuation.",
      },
      {
        title: "Sales & Customer Outreach",
        description:
          "Independent sales experience ranging from door-to-door sales to handling customer outreach and order fulfillment for a small honey business.",
      },
      {
        title: "Sailing",
        description:
          "Hold a Permis Côtier (French coastal boating license) and completed several sailing courses in France.",
      },
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
    title: "Courses & Grades - Raphael Northoff",
    description:
      "Overview of the courses and modules from my Bachelor's at TH Augsburg, my Master's at TU Darmstadt and my double-degree year at École Centrale de Lyon.",
  },
  title: "Courses & Grades",
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
    title: "Projects - Raphael Northoff",
    description: "A selection of engineering and control theory projects I'm working on and writing up.",
  },
  title: "Projects",
  description:
    "A selection of projects I'm working on. These are still rough — I'll be writing each one up in more detail over time.",
  projects: [
    {
      title: "Photovoltaics & Urban Power Grids",
      description:
        "My Bachelor's thesis with Stadtwerke München: simulating PV power generation and assessing the impact of rooftop-solar expansion on Munich's distribution grid.",
      image: "/Portfolio-CV-Blog/assets/images/projects/solar-roof-potential.png",
      href: "#",
    },
    {
      title: "Estimator Performance — A Monte Carlo Analysis",
      description:
        "Comparing estimator performance through Monte Carlo simulation of the bias-variance tradeoff.",
      image: "/Portfolio-CV-Blog/assets/images/projects/estimator-monte-carlo.jpg",
      href: "#",
    },
    {
      title: "VTOLs in Flight Transition",
      description:
        "Studying the transition phase between hover and forward flight for a hybrid VTOL aircraft.",
      image: "/Portfolio-CV-Blog/assets/images/projects/vtol-flight-transition.jpg",
      href: "#",
    },
    {
      title: "IEC 61557-12 Sensor Modelling",
      description:
        "Schneider Electric internship: Simulink/Stateflow model of a wireless power-measurement sensor's operating modes, balancing accuracy against energy consumption.",
      image: "/Portfolio-CV-Blog/assets/images/projects/sensor-modelling.png",
      href: "#",
    },
    {
      title: "Pontryagin's Minimum Principle for Orbit Transfer",
      description:
        "Optimal low-thrust transfer maximizing the final orbit radius in fixed time — Hamiltonian derivation, TPBVP solved in MATLAB, with tf and thrust sensitivity studies.",
      image: "/Portfolio-CV-Blog/assets/images/projects/pontryagin-orbit-transfer.png",
      href: "#",
    },
    {
      title: "Automated Indoor Chili Farm",
      description:
        "Arduino-controlled ebb-and-flow hydroponics in Simulink: pH/EC probes, water level & temperature, grow lamps, nutrient dosing and a live dashboard.",
      image: "/Portfolio-CV-Blog/assets/images/projects/chili-farm.png",
      href: "#",
    },
    {
      title: "Control Theory in Finance",
      description:
        "Exploring control-theoretic approaches to modelling and decision-making in financial markets.",
      image: "/Portfolio-CV-Blog/assets/images/projects/project1.jpg",
      href: "#",
    },
  ],
};

