import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faFigma, faGithub, faCreativeCommons} from '@fortawesome/free-brands-svg-icons';
// import { faReact, faFigma, faGithub, faCreativeCommons} from '@fortawesome/free-svg-icons';
import oldport from '../images/oldport.png';
import oldport2 from '../images/oldport2.png';
import ipad from '../images/ipad.png';
import ipadgrafik from '../images/ipadgrafik.png';
import demoVideo from '../images/DemoVideo.mp4';
import uniaden from '../images/uniaden.png';
import uniaden2 from '../images/uniaden2.png';
import uniadenvideo from '../images/Uniadenvideo.mp4';
import loltop from '../images/loltop.png';
import lolprofile from '../images/lolprofile.png';
import dbt1 from '../images/dbt1.png';
import dbt2 from '../images/dbt2.png';
import dbt3 from '../images/dbt3.png';
import discbee1 from '../images/discbee1.png';
import discbee2 from '../images/discbee2.png';
import trimma1 from '../images/linjegraf.mp4';
import trimma2 from '../images/dela_exportera.mp4';
import '../css/projects.css'; 
import { faDatabase, faV } from '@fortawesome/free-solid-svg-icons';

const projectData = [
  {
    title: "Trimma: Mobile friendly prototyping",
    description: "Our task was to enhance the responsiveness of the Insikt Analysis tool developed by twoday INSIKT, formerly Trimma, a leading provider of decision support across various industries. The specific focus was on improving usability on smaller screens such as tablets and smartphones, while ensuring satisfactory functionality even with limited screen real estate. My responsibility primarily Share/Export, but also the file browser. Most of the design was dynamic either way.",
    media: [trimma1, trimma2], // Placeholder for any project visuals
    technologies: [faFigma], // Placeholder icons
  },
  {
    title: "Previous Portfolio",
    description: "My previous portfolio website, a responsive site built using React, showcased a functioning dark mode, polished animations, and intuitive navigation, highlighting a user-friendly and visually appealing online presence. This project was later replaced with the current iteration you're seeing now, continuing my journey in refining and enhancing my digital portfolio.",
    media: [oldport, oldport2],
    technologies: [faReact, faGithub],
  },
  {
    title: "Actus - a tablet application",
    description: "The application was developed in React Native using Expo and written in TypeScript. The database was implemented with Firebase, where all tasks were stored. This project was a collaborative effort where I primarily focused on React Native development as well as the UI design. Personalized missions are issued to the elderly user by providing daily activation- and stimulation. AI-tools used can scan an uploaded image and return a generated question relevant to the content.",
    media: [ipadgrafik, ipad, demoVideo],
    technologies: [faFigma, faReact, faGithub],
  },
  {
    title: "Uniaden Reel",
    description: "As the primary digital creator, I took it upon myself to design and animate this video reel, serving as a playful parody of Spotify Wrapped. The project showcases my skills in digital storytelling and animation, engaging viewers with its unique presentation and thematic elements. View the reel on Instagram: https://www.instagram.com/reel/Cmbb3HCIqic/",
    media: [uniaden, uniaden2, uniadenvideo], // Replace with the path to a thumbnail or screenshot of the reel
    technologies: [faFigma, faV, faCreativeCommons], // Example icons representing digital creation, animation, etc.
  },
  {
    title: "Champion CRUD",
    description: "An MVC CRUD application for indexing video game champions, searchable by name or release. The logged in user can favorite and unfavorite champions into the right-side grid. It includes roles and classes in its database.",
    media: [dbt2, dbt1, dbt3], // Placeholder for any project visuals
    technologies: [faGithub, ], // Placeholder icons
  },
  {
    title: "Pair Project: Full Stack Application",
    description: "This project was carried out on Windows using Visual Studio Code, Node.js, Sequelize, Handlebars, Express, and Axios. Postman was utilized to test API functionality. Two different API (Riot Games + WhatIsMyMMR) were combined and displayed on a page. As a collaborative effort, I primarily focused on front-end development and structuring, though time quickly ran out.",
    media: [loltop, lolprofile], // Placeholder for any project visuals
    technologies: [faGithub], // Placeholder icons
  },
  {
    title: "DiscBee: Disc Golf App",
    description: "Development primarily occurred in React Native with MongoDB as the database. The app also utilizes several APIs to add functionality. The APIs used by DiscBee include DiscgolfMetrixAPI, WeatherAPI, GoogleMapsAPI, and DiscBeeAPI. Pair programming was utilized sporadically during the course, but overall, development was individual, and Git was used for version control.",
    media: [discbee1, discbee2], // Placeholder for any project visuals
    technologies: [faFigma, faReact, faDatabase, faGithub], // Placeholder icons
  },

  
];

const Projects = () => {
  const [lightboxDisplay, setLightboxDisplay] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentProjectMedia, setCurrentProjectMedia] = useState([]);
  const [isVideoMedia, setIsVideoMedia] = useState(false);

  const showLightbox = (mediaArray, index) => {
    setCurrentProjectMedia(mediaArray);
    setCurrentIndex(index);
    setIsVideoMedia(mediaArray[index].endsWith('.mp4'));
    setLightboxDisplay(true);
  };

  const hideLightbox = () => {
    setLightboxDisplay(false);
  };

  useEffect(() => {
    const navigateLightbox = (e) => {
      if (e.key === 'Escape') {
        hideLightbox();
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % currentProjectMedia.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + currentProjectMedia.length) % currentProjectMedia.length);
      }
    };
    document.body.addEventListener('keydown', navigateLightbox);
    return () => document.body.removeEventListener('keydown', navigateLightbox);
  }, [currentProjectMedia.length]);

  return (
    <div className="projects-container">
      {projectData.map((project, index) => (
        <div className="project-wrapper" key={index}>
          <div className="project-card">
            <Carousel showArrows={true} showThumbs={false} dynamicHeight={true}>
              {project.media.map((item, idx) => (
                <div key={idx} className="carousel-item" onClick={() => showLightbox(project.media, idx)}>
                  {item.endsWith('.mp4') ? (
                    <video controls>
                      <source src={item} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={item} alt={`Project ${project.title}`} />
                  )}
                </div>
              ))}
            </Carousel>
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <div className="technology-icons">
              {project.technologies.map((icon, iconIdx) => (
                <FontAwesomeIcon icon={icon} key={iconIdx} />
              ))}
            </div>
          </div>
        </div>
      ))}
      {lightboxDisplay && (
        <div className="lightbox" onClick={hideLightbox}>
          <span className="lightbox-close" onClick={(e) => {
            e.stopPropagation(); // Prevents the lightbox from closing when clicking the close icon
            hideLightbox();
          }}>&times;</span>
          {isVideoMedia ? (
            <video controls autoPlay src={currentProjectMedia[currentIndex]} className="lightbox-media"></video>
          ) : (
            <img src={currentProjectMedia[currentIndex]} className="lightbox-media" alt="Video Error" />
          )}
        </div>
      )}
    </div>
  );
};

export default Projects;
