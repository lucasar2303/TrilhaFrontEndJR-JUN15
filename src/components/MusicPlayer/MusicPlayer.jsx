import React from 'react'
import musicImage from '../../assets/music-player.png'

function MusicPlayer() {
    return (
        <div className="music-player">
          <img src={musicImage} alt="Music Player" className="player-image" />
        </div>
    )
}

export default MusicPlayer