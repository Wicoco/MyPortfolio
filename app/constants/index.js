// constants/index.js
import Html from "../../public/assets/Skills/html.png";
import Css from "../../public/assets/Skills/css.png";
import Javascript from "../../public/assets/Skills/javascript.png";
import ReactImg from "../../public/assets/Skills/react.png";
import Tailwind from "../../public/assets/Skills/tailwind.png";
import Node from "../../public/assets/Skills/node.png"
import TypeScript from "../../public/assets/Skills/typescript.png"
import Github from "../../public/assets/Skills/github1.png";
import NextJS from "../../public/assets/Skills/nextjs.png";
import python from "../../public/assets/Skills/python.png";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {
  Home,
  Wrench,
  Contact,
  UserRound,
  PenLine,
  FileText,
} from "lucide-react";

// Skills
export const skillsData = [
  {
    imgSrc: Node,
    alt: "NodeJs",
    title: "NodeJS",
  },
  {
    imgSrc: ReactImg,
    alt: "React",
    title: "React",
  },
  {
    imgSrc: NextJS,
    alt: "Next",
    title: "Next",
  },
  {
    imgSrc: Javascript,
    alt: "JS",
    title: "JavaScript",
  },
  {
    imgSrc: TypeScript,
    alt: "TypeScript",
    title: "TypeScript",
  },
  {
    imgSrc: Tailwind,
    alt: "Tailwind",
    title: "Tailwind",
  },
  {
    imgSrc: Github,
    alt: "Github",
    title: "Github",
  },

  {
    imgSrc: Html,
    alt: "HTML",
    title: "HTML",
  },
  {
    imgSrc: Css,
    alt: "CSS",
    title: "CSS",
  },
  {
    imgSrc: python,
    alt: "python",
    title: "python",
  },
];

//   Projects
export const ProjectCardList = [
  {
    title: "Monito",
    imgSrc: "/assets/images/monitopic.png",
    description:
      " This project is an integration of a provided Figma mockup using HTML, Sass, and CSS. The main goal is to translate the Figma design into a responsive, structured, and styled webpage by utilizing modular SCSS files. ",
    projectLink: "",
    projectLinkGithub: "https://github.com/Wicoco/scss-project-iima2.git",
  },
  {
    title: "Celest",
    imgSrc: "/assets/images/celest.png",
    description:
      "Celest is a site dedicated to the exploration of space, offering a fascinating immersion in astronomy and the wonders of the cosmos. Whether you're an astronomy enthusiast or simply curious, Celest offers interactive content, detailed articles and captivating visuals to help you learn more about the stars, planets and mysteries of the universe.",
    projectLink: "",
    projectLinkGithub:
      "https://github.com/Wicoco/site-web-html-css-iim-coding.git",
  },
  {
    title: "Twitter clone",
    imgSrc: "/assets/images/twitter.webp",
    description:
      "This project is a simplified Twitter clone, allowing users to post tweets, follow other users and interact with content. It is developed in **PHP** with a **MySQL** database, offering a fluid and dynamic experience.",
    projectLink: "",
    projectLinkGithub:
      "https://github.com/Wicoco/Wicoco-Twitter-clone-iim-php-mysql.git",
  },

  {
    title: "Godzilla",
    imgSrc: "/assets/images/gogo.png",
    description:
      "This repository contains several projects and experiments in CSS and TypeScript. It includes an interactive business card that turns into a resume for Godzilla, as well as a fictional debate project between Kamala Harris and Donald Trump, demonstrating skills in Tailwind CSS and JavaScript.",
    projectLink: "",
    projectLinkGithub: "https://github.com/Wicoco/vitecss.git",
  },
];

// Navbar
export const navLinks = [
  {
    href: "/",
    text: "Home",
    rel: "",
    target: "",
    icon: <Home />,
  },
  {
    href: "#About",
    text: "About",
    rel: "",
    target: "",
    icon: <UserRound />,
  },
  {
    href: "#Projects",
    text: "Projects",
    rel: "",
    target: "",
    icon: <Wrench />,
  },
  {
    href: "#Skills",
    text: "Skills",
    rel: "",
    target: "",
    icon: <PenLine />,
  },

  {
    href: "https://drive.google.com/file/d/1DZEvYCP5AHcPqO1otouH5-5mmCc_LINp/view?usp=sharing",
    text: "Resume",
    rel: "noopener noreferrer",
    target: "_blank",
    icon: <FileText />,
  },

];

export const mobileNavIcons = [
  {
    href: "https://www.linkedin.com/in/victor-fernel-4641a0275/",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://github.com/Wicoco",
    icon: <FaGithub />,
  },
  {
    href: "victor.fernel@edu.devinci.fr",
    icon: <AiOutlineMail />,
  },
  {
    href: "https://drive.google.com/file/d/1DZEvYCP5AHcPqO1otouH5-5mmCc_LINp/view?usp=sharing",
    icon: <BsFillPersonLinesFill />,
  },
];

// Footer
export const footerLinks = [
  {
    href: "https://www.linkedin.com/in/victor-fernel-4641a0275/",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://github.com/Wicoco",
    icon: <FaGithub />,
  },
  {
    href: "victor.fernel@edu.devinci.fr",
    icon: <AiOutlineMail />,
  },
  {
    href: "https://drive.google.com/file/d/1DZEvYCP5AHcPqO1otouH5-5mmCc_LINp/view?usp=sharing",
    icon: <BsFillPersonLinesFill />,
  },
];
