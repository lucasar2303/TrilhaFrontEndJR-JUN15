import React from 'react';

function AboutInfo({ title, imgSrc, description }){
    return (
        <div className="about-info">
            <div className="about-info-title">
                <h2>{title}</h2>
                <img src={imgSrc} alt={`${title} icon`} />
            </div>
            <p>{description}</p>
        </div>
    )
};

export default AboutInfo;
