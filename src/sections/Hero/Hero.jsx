import React from 'react';
import './hero.css'; // Importa o CSS específico da Hero
import photo from '../../assets/photo.png';
import arrow from '../../assets/arrowdown.svg';
import Marquee from 'react-fast-marquee';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className='hero-principal-div'>
        <div className="hero-div-text">
          <p className='hero-hello'>Olá, me chamo <span>Lucas!</span></p>
          <h1>Desenvolvedor <span>Frontend</span></h1>
          <div className="hero-hr-custom">
          <Marquee speed={50} direction="right" autoFill gradient={false} >
            <hr style={{ width: '250px', margin: '0px 10px' }} className='line-1' />
            <hr style={{ width: '180px', margin: '0px 10px' }} />
            <hr style={{ width: '100px', margin: '0px 10px' }} />
            <hr style={{ width: '150px', margin: '10px' }} />
          </Marquee>
          </div>
          <p className='hero-description'>Eu soluciono problemas complexos de experiência do usuário para criar soluções focadas na integridade que conectam bilhões de pessoas</p>
        </div>
        <div className="hero-div-image">
          <img className='hero-image' src={photo}></img>
        </div>
      </div>
      <img src={arrow} className='hero-arrow'/>
    </section>
  );
}

export default Hero;
