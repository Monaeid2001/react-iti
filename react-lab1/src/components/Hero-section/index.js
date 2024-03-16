import photo from './../imgs/pexels-photo-255379.jpeg'
import './style.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Hero = ()=>{
  return (
    <div className="App">
        <img src={photo} alt=""/>
        <h1>mona eid yiehia</h1>
        <p>software enginner</p>

    </div>
  );
}

export default Hero;