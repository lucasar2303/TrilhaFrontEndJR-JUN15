import React from 'react';

function AboutTech({ icons }) {
    return (
        <div className="about-technologies">
            {icons.map((icon, index) => (
                <div key={index}>
                <img src={icon} alt="Technology" className="about-technologies-icon" />
                </div>
            ))}
        </div>
    );
}
  
export default AboutTech;
  