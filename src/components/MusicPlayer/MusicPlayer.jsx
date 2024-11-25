import React from 'react'
import musicImage from '../../assets/music-player.png'

function MusicPlayer() {
    return (
        <div className="music-player">
          <div> 
            <img src={musicImage} alt="Music Player" className="player-image" />
          </div>
        </div>
    )
}

export default MusicPlayer