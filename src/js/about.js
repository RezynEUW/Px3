import React from 'react';
import '../css/about.css'; // Ensure the CSS path is correct
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';


const About = () => {
  // Information to be displayed in each card
  const skillSections = [
    {
      title: "UI/UX",
      content: "User Experience design and User Interface design are the two cornerstones of my ability. These are the groundwork for any valuable product and its potential. Through my education and personal projects, this has turned out to be my strongest suite. My eye is well trained and I've got a strong sense of what belongs and what does not.",
      icon: faPencil, // Represents UI/UX with a desktop icon
    },
    {
      title: "Front End",
      content: "My abilities are mainly focused upon general web development in classic HTML+CSS fashion, or more recently React and React Native for other platforms. Recen and larger projects have been more focused on finishing products, so I'd very much be interested in pursuing this field even more whether it be professionally or for my own projects.",
      icon: faCode, // Represents Front End with a code icon
    },
    {
      title: "Back End",
      content: "While my fundamentals are sharp in Design and UI/UX development, my degree also contains general tinkering with databases, server-based systems and API. While not my most confident category, I am completely up to the idea to hone this field and expand into full stack development!",
      icon: faDatabase, // Represents Back End with a database icon
    }
  ];
  

  return (
    <div className="about-container">
      <div className="background-block top-left-block"></div>
      <div className="background-block top-right-block"></div>
      <div className="background-block bottom-left-block"></div>
      <div className="background-block bottom-right-block"></div>
      <h1>About Me</h1>
      <div className="skills-container">
        {skillSections.map((section, index) => (
        <div className="skill-card" key={index}>
          <FontAwesomeIcon icon={section.icon} size="3x" /> {/* Display the icon */}
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </div>
        ))}
      </div>
    </div>
  );
};

export default About;
