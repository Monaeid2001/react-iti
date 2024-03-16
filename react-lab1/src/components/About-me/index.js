import './style.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const AboutMe = () => {

  return (
    <div className="body">
      <p>About me</p>
      <p>lorem lorem lorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>
        <Button variant="dark">
          Download CV
        </Button>
    </div>
  );
}

export default AboutMe;
