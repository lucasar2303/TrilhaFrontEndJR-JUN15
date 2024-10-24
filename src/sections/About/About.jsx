import React from 'react';
import './about.css';
import AboutInfo from '../../components/AboutInfo/AboutInfo';
import AboutTech from '../../components/AboutTech/AboutTech';
import aboutImg from '../../assets/icons/about.svg'
import htmlImg from '../../assets/icons/html.svg'
import cssImg from '../../assets/icons/css.svg'
import javascript from '../../assets/icons/javascript.svg'
import reactImg from '../../assets/icons/react.svg'
import typescript from '../../assets/icons/typescript.svg'
import rails from '../../assets/icons/rails.svg'

function About(){

    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <AboutInfo 
                    title="Sobre" 
                    imgSrc={aboutImg} 
                    description="Meu nome é Lucas Anastácio Ribeiro, tenho 23 anos e comecei no desenvolvimento web em 2019, durante um curso de Informática para Internet na Etec. Desde então, me identifiquei muito com a área e resolvi seguir estudando Análise e Desenvolvimento de Sistemas, sempre focando no Front-end. Minhas habilidades como designer também me ajudaram bastante nesse caminho. Em 2023, consegui minha primeira oportunidade como desenvolvedor front-end júnior. Desde então, não parei de estudar e aprimorar meus conhecimentos, sempre com muita vontade de aprender e crescer profissionalmente."
                />
                <AboutTech 
                    icons={[htmlImg, cssImg, javascript, reactImg, typescript, rails]} 
                />
            </div>
        </section>
    )
}

export default About