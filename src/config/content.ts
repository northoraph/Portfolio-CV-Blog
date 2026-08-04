export const siteConfig = {
  name: "Raphael Northoff",
  title: "Raphael Northoff's Portfolio",
  description: "A showcase of my work and experience in Industrial & Control Engineering",
  social: {
    github: "#",
    twitter: "#",
    email: "mailto:raphael.northoff@outlook.de",
  },
};

export const homeContent = {
  title: "Hello, I'm Raphael Northoff",
  description:
    "Master's student in Industrial Engineering and Automation with a passion for control systems, robotics, and simulation.",
  buttons: {
    about: {
      text: "View About",
      href: "/about/",
    },
    posts: {
      text: "Read Posts",
      href: "/posts/",
    },
  },
  images: {
    light: "https://multiplepage-portfolio.edgeone.app/assets/images/tech-background-light.svg",
    dark: "/assets/images/tech-background-dark.svg",
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
    src: "/assets/images/about/coder.jpg",
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
  connect: {
    title: "Let's Connect",
    description:
      "Feel free to reach out if you want to collaborate or just say hi! You can drop me an",
    email: {
      text: "email",
      href: "mailto:raphael.northoff@outlook.de",
    },
  },
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
      image: "/assets/images/projects/project1.jpg",
      href: "#",
    },
    {
      title: "Project Two",
      description:
        "Describe your second project here. Highlight the key features and your role in development.",
      image: "/assets/images/projects/project2.jpg",
      href: "#",
    },
    {
      title: "Project Three",
      description:
        "Share details about your third project. What problems did it solve? What was the outcome?",
      image: "/assets/images/projects/project3.png",
      href: "#",
    },
  ],
};

