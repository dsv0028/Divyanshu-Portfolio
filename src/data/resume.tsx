import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Divyanshu Verma",
  initials: "DV",
  url: "https://www.linkedin.com/in/dsv0028",
  location: "Ghaziabad, Uttar Pradesh",
  resumeUrl: "/resume.pdf",
  description:
    "I’m a passionate web developer who loves turning ideas into dynamic, high-performance websites. With expertise in MERN stack, I bring a well-rounded approach to building SEO-friendly, scalable web applications that deliver seamless user experiences.",
  summary:
    " I’m Divyanshu Verma, a dedicated web developer with a strong passion for creating high-performance, user-friendly applications. I specialize in web development using modern frameworks and technologies like React, MongoDB, Node.js, and Next.js. Over the course of my career, I’ve developed and successfully completed over 10 projects, which you can explore in my Projects section and on my Github.",
  avatarUrl: "/mine.jpg",
  skills: [
    "C",
    "C++",
    "JavaScript",
    "Python",
    "Node.js",
    "Express.js",
    "EJS",
    "React.js",
    "Redux",
    "MongoDB",
    "REST API",
    "JWT Authentication",
    "HTML",
    "CSS",
    "Mongoose",
    "Figma",
    "Tailwind CSS",
    "Bootstrap",
    "Shadcn UI",
    "Git",
    "GitHub",
    "MongoDB Atlas",
    "Postman",
    "Canva",
    "VS Code"
  ],
  work: [
    {
      company: "School of UI/UX",
      href: "https://www.linkedin.com/company/school-of-uiux/",
      location: "Ghaziabad, India",
      title: "Web Development Lead",
      logoUrl: "/uiux.webp",
      start: "Apr 2024",
      end: "Present",
      badges: ["Workshops", "Hackathons", "Community"],
      description:
        "Organize and lead bootcamps on JavaScript, Git, UI/UX and GitHub to grow student participation and skills.",
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "dsv8574101@gmail.com",
    tel: "8467048269",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dsv0028",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/dsv0028",
        icon: Icons.linkedin,
        navbar: true,
      },
      Leetcode: {
        name: "Leetcode",
        url: "https://leetcode.com/u/dsv0028/",
        icon: Icons.Leetcode,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Divyanshu_0028",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:dsv8574101@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  education: [
    {
      school: "KIET Group of Institutions",
      href: "https://www.kiet.edu/",
      degree: "B.Tech in Computer Science and Engineering (CGPA: 7.77)",
      logoUrl: "/KIET-LOGO.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Sacred Heart Secondary School",
      href: "https://sacredheartsitapur.org/",
      degree: "Senior Secondary (Class XII) - 71.6%",
      logoUrl: "/shhss.jpg",
      start: "2021",
      end: "2022",
    },
    {
      school: "Sacred Heart Secondary School",
      href: "https://sacredheartsitapur.org/",
      degree: "Secondary (Class X) - 83.6%",
      logoUrl: "/shhss.jpg",
      start: "2020",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Tic-Tac-Toe",
      href: "https://dsv0028.github.io/Tic-Tac-Toe-/",
      dates: "Aug 2025",
      active: true,
      description:
        "A simple and interactive Tic Tac Toe game built using HTML, CSS, and JavaScript. Play against a friend locally in this classic two-player game.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript"
      ],
      links: [],
      image: "/tictactoe.png",
      video: "",
    },
     {
      title: "Publication-Summary-Generator",
      href: "https://github.com/dsv0028/Publication_Summary_Generator",
      dates: "Jan 2025",
      active: true,
      description:
        "A project for viewing research papers published by faculty members.",
      technologies: ["HTML", "CSS", "Javascript", "Python"],
      links: [],
      image: "/pub.png",
      video: "",
    },
    {
      title: "Air-Quality-App",
      href: "https://github.com/dsv0028/Air-Quality-App",
      dates: "Sep 2025",
      active: true,
      description:
        "A simple and elegant web app that displays real-time air quality data for any city using the API Ninjas Air Quality API. Built with HTML, Bootstrap 5, and JavaScript (Fetch API + async/await).",
      technologies: ["JavaScript", "HTML", "CSS", "Geolocation AP"],
      links: [],
      image: "/aqa.png",
      video: "",
    },
    {
      title: "GAMECHANGER",
      href: "https://github.com/dsv0028/GAMECHANGER",
      dates: "Nov 2024",
      active: true,
      description:
        "smooth scrolling ✅ attach loco scroll css ✅ attach locomotive scroll min js ✅ some code from loco github for js ✅.",
      technologies: ["JavaScript", "HTML", "CSS"],
      links: [],
      image: "/gamechanger.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
