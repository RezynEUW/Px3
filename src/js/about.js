import React from 'react';
import '../css/about.css'; // Ensure the CSS path is correct
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const About = () => {
  // Information to be displayed in each card
  const skillSections = [
    {
      title: "UI/UX",
      content: "User Experience design and User Interface design are the two cornerstones of my ability. These are the groundwork for any valuable product and its potential. Through my education and personal projects, this has turned out to be my strongest suite. My eye is well trained and I've got a strong sense of what belongs and what does not."
    },
    {
      title: "Front End",
      content: "My abilities are mainly focused upon general web development in classic HTML+CSS fashion, or more recently React and React Native for other platforms. Recent larger projects have been more focused on finishing products, so I'd very much be interested in pursuing this field even more whether it be professionally or for my own projects."
    },
    {
      title: "Back End",
      content: "While my fundamentals are sharp in Design and UI/UX development, my degree also contains general tinkering with databases, server-based systems and API. While not my most confident category, I am always up to learn something new and expand into full stack development!"
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
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
