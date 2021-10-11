
import react from "./../assets/images/FaReact.svg";
import sass from "./../assets/images/FaSass.svg";
import javascript from "./../assets/images/FaJsSquare.svg";
import figma from "./../assets/images/FaFigma.svg";
import css from "./../assets/images/FaCss3Alt.svg";
import html from "./../assets/images/FaHtml5.svg";

import project1 from './../assets/images/screen_url.png';
import project2 from './../assets/images/screen_joblist.png';
import project3 from './../assets/images/screen_sunny.png';
import project4 from './../assets/images/screen_faq.png';
import project5 from './../assets/images/screen_sign.png';
import project6 from './../assets/images/screen_memory.png';
import project7 from './../assets/images/screen_monx.png';

const data = [
    {
      id: 1,
      name: "URL SHORTENING API",
      image: project1,
      languages: [react, sass],
      demo: "https://monika-drozdz.github.io/url-shortening-api/",
      git: "https://github.com/monika-drozdz/url-shortening-api",
      status: "completed"
    },
    {
      id: 2,
      name: "JOB LISTING WITH FILTERING",
      image: project2,
      languages: [react, sass],
      demo: "https://monika-drozdz.github.io/job-listings-build-with-React/",
      git: "https://github.com/monika-drozdz/job-listings-build-with-React",
      status: "completed"
    },
    {
        id: 3,
        name: "SUNNYSIDE AGENCY LANDING",
        image: project3,
        languages: [html, sass, javascript],
        demo: "https://monika-drozdz.github.io/Sunnyside-agency-landing-page/",
        git: "https://github.com/monika-drozdz/Sunnyside-agency-landing-page",
      status: "completed"
      },
      {
        id: 4,
        name: "FAQ ACCORDION CARD",
        image: project4,
        languages: [html, css, javascript],
        demo: "https://monika-drozdz.github.io/FAQ-accordion-card/",
        git: "https://github.com/monika-drozdz/FAQ-accordion-card",
      status: "completed"
      },
      {
        id: 5,
        name: "SIGN-UP FORM",
        image: project5,
        languages: [html, css, javascript],
        demo: "https://monika-drozdz.github.io/intro-component-with-signup-form/",
        git: "https://github.com/monika-drozdz/intro-component-with-signup-form",
      status: "completed"
      },
      {
        id: 6,
        name: "GEMSTONES MEMORY GAME",
        image: project6,
        languages: [html, css, javascript, figma],
        demo: "https://monika-drozdz.github.io/gemstones-memory-game/",
        git: "https://github.com/monika-drozdz/gemstones-memory-game",
      status: "completed"
      },
      {
        id: 7,
        name: "MONX SHOP",
        image: project7,
        languages: [react, sass],
        demo: "https://monika-drozdz.github.io/monx-e-commerce/",
        git: "https://github.com/monika-drozdz/monx-e-commerce",
      status: "in progress"
      }
  ]
  
  export default data;