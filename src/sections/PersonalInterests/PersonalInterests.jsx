import React from 'react';
import './personalInterests.css';
import PersonalInfo from '../../components/PersonalInfo/PersonalInfo';
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer';

function PersonalInterests() {
  return (
    <section id="interests" className="personal-interests-section">
      <div className="personal-interests-container">
        <MusicPlayer/>
        <PersonalInfo/>
      </div>
    </section>
  );
}

export default PersonalInterests;
