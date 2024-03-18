import React from 'react';
import ProgressBarComponent from './../bars/index';
import 'bootstrap/dist/css/bootstrap.min.css';

const Skills = () => {
  const skillsData = [
    { word: "Html", variant: "primary", now: 70 },
    { word: "Css", variant: "success", now: 40 },
    { word: "Bootstrap", variant: "info", now: 20 },
    { word: "JS", variant: "warning", now: 60 },
    { word: "React", variant: "danger", now: 80 }
  ];

  return (
    <div className='skill'>
      <h1>Skills</h1>
      {skillsData.map((skill, index) => (
        <ProgressBarComponent
          key={index} 
          word={skill.word}
          variant={skill.variant}
          now={skill.now}
        />
      ))}
    </div>
  );
};

export default Skills;
