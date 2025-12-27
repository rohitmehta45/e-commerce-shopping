import React from 'react';
import './Journey.css';
import milestone1 from '../../assets/milestone1.jpg';
import milestone2 from '../../assets/milestone2.jpg';
import milestone3 from '../../assets/milestone3.jpg';
import milestone4 from '../../assets/milestone4.jpg';

const milestones = [
  {
    year: '2018',
    title: 'Founded in Garage',
    description: 'It all started with a sketch and a sewing machine. We built our first prototype on weekends and evenings.',
    img: milestone1
  },
  {
    year: '2019',
    title: 'First Product Launch',
    description: 'We launched our signature tote bag online. It sold out in 48 hours, confirming we were on the right track.',
    img: milestone2
  },
  {
    year: '2021',
    title: 'Opened Flagship Store',
    description: 'A physical space for our community to gather. Located in the heart of the design district.',
    img: milestone3
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Now shipping to over 30 countries. We are bringing quality goods to the world stage.',
    img: milestone4
  }
];

const Journey = () => {
  return (
    <div className="Journey-Container">
      <div className="UpperTitle">
        <h1>Our Journey</h1>
        <p>Milestones that shaped who we are today</p>
      </div>

      <div className="Timeline">
        {milestones.map((milestone, index) => (
          <div key={index} className="TimelineItem">
            <div className="TimelineLeft">
              <h2 className="TimelineYear">{milestone.year}</h2>
              <img src={milestone.img} alt={milestone.title} className="TimelineImg"/>
            </div>
            {index !== milestones.length - 1 && <div className="TimelineLine"></div>}
            <div className="TimelineRight">
              <h2>{milestone.title}</h2>
              <p>{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
