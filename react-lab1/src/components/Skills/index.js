// Skills.js
import React from 'react';
import ProgressBarComponent from './../bars/index'; // Path to your ProgressBarComponent file
import 'bootstrap/dist/css/bootstrap.min.css';

const Skills = () => {
  return (
    <div className='skill'>
      <h1>Skills</h1>
      <ProgressBarComponent word="Html" variant="primary" now={70} />
      <ProgressBarComponent word="Css" variant="success" now={40} />
      <ProgressBarComponent word="Bootstrap" variant="info" now={20} />
      <ProgressBarComponent word="JS" variant="warning" now={60} />
      <ProgressBarComponent word="React" variant="danger" now={80} />
    </div>
  );
};

export default Skills;
