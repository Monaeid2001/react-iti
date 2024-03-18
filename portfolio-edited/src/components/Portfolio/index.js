import React from 'react';
import CardComponent from './../card-resuable/index'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const Portfolio = () => {
  const cardData = [
    {
      title: "Card Title 1",
      subtitle: "Card Subtitle 1",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      title: "Card Title 2",
      subtitle: "Card Subtitle 2",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      title: "Card Title 3",
      subtitle: "Card Subtitle 3",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      title: "Card Title 4",
      subtitle: "Card Subtitle 4",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <div className="card-container">
        {cardData.map((data, index) => (
          <div key={index} className={`card-wrapper ${index % 2 === 0 ? 'dark-bg' : 'light-bg'}`}>
            <CardComponent
              title={data.title}
              subtitle={data.subtitle}
              text={data.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
