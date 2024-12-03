import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    java,
    tensorflow,
    C,
    Cpp,
    asm,
    python,
    mysql,
    post,
    android,
    sci,
    firebase,
    express,
    nhl,
    leo,
    save,
    event
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
    
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },

    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "C++",
      icon: Cpp,
    },

    {
      name: "C",
      icon: C,
    },

    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
    },

    {
      name: "tensorflow",
      icon: tensorflow,
    },

    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
    
    {
      name: "Assembly",
      icon: asm,
    },

    {
      name: "Python",
      icon: python,
    },

    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "PostgreSQL",
      icon: post,
    },
    {
      name: "Android",
      icon: android,
    },
    
    {
      name: "Scikit Learn",
      icon: sci,
    },
    {
      name: "Express",
      icon: express,
    },

    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "Save the Children International",
      icon: save,
      iconBg: "#E6DEDD",
      date: "June 2024 - August 2024",
      points: [
        "As a Software Engineer Intern at Save the Children International, I collaborated with a team to develop dynamic web applications using EJS templates, MongoDB, and Node.js, accelerating project delivery by 15%. ",
        "Collaborated in designing secure RESTful APIs, managing over 1,000 monthly requests. Implemented user authentication with JWT and OAuth 2.0, enhancing security and reliability. ",
        "Tested and debugged APIs with Postman, resolving 90% of functional issues pre-deployment, ensuring robust application performanc",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    
    {
      name: "Leo AI",
      description:
        "A Python, Node.js, and React.js web application with a machine learning foundation that uses deep learning (LSTM, BERT) and natural language processing (NLP) to categorise emotions in textual input with 94% accuracy",
      tags: [
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },

        {
          name: "python",
          color: "orange-text-gradient",
        },
        {
          name: "Tensorflow",
          color: "yellow-text-gradient",
        },
        {
          name: "machine Learning",
          color: "blue-text-gradient",
        },
      ],
      image: leo,
      source_code_link: "https://github.com/S-a-m-i-0/Emotion_analysis",
    },

    {
      name: "NHL Predictor",
      description:
        "A machine learning web app devoloped using react, flask and python for predicting NHL game winners using historical data from web scraping and advanced statistical models for accurate and data-driven predictions.",
      tags: [
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },

        {
          name: "python",
          color: "orange-text-gradient",
        },
        {
          name: "selenium",
          color: "yellow-text-gradient",
        },
        {
          name: "machine Learning",
          color: "blue-text-gradient",
        },
      ],
      image: nhl,
      source_code_link: "https://github.com/S-a-m-i-0/Hockey-match-predictor",
    },
    {
      name: "Event Management App",
      description:
        "Developed an Event Management App in Java using Android Studio and Firebase, featuring lottery-based event signups, QR code scanning, real-time updates, image uploads, and a seamless multi-user interaction experience.",
      tags: [
        {
          name: "Java",
          color: "pink-text-gradient",
        },
        {
          name: "XML",
          color: "green-text-gradient",
        },

        {
          name: "Android Studio",
          color: "orange-text-gradient",
        },
        {
          name: "Firebase",
          color: "yellow-text-gradient",
        },
        {
          name: "UML",
          color: "blue-text-gradient",
        },
      ],
      image: event,
      source_code_link: "https://github.com/S-a-m-i-0/beacon-techies",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };