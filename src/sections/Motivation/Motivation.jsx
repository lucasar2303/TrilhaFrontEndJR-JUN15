import React from 'react';
import './motivation.css';
import rocket from '../../assets/icons/rocket.svg';
import motivation from '../../assets/motivation.png';

function Motivation() {
    return (
        <section id="motivation" className="motivation-section">
            <div className="motivation-container">
                <div className="motivation-info">
                    <div className="motivation-title">
                        <h2>Motivações</h2>
                        <img src={rocket} alt="Motivation Icon"/>
                    </div>
                    <p>
                        Minha principal motivação para ingressar na comunidade Codigo Certo Coders é o desejo de aprender e evoluir como desenvolvedor front-end. Estou focado em ganhar experiência prática com tecnologias amplamente utilizadas no mercado, como React, Angular e outras ferramentas modernas.
                    </p>
                    <p>
                        Acredito que o aprendizado não se limita apenas a cursos ou teorias, mas se aprofunda ao vivenciar projetos reais e colaborar com outros desenvolvedores. Participar dessa comunidade é uma oportunidade única de aprender enquanto faço, experimentar novas ideias e aprimorar habilidades que serão essenciais para minha trajetória profissional.
                    </p>
                    <p>
                        Além disso, me motiva estar em um ambiente colaborativo onde posso compartilhar conhecimento, conectar-me com outros entusiastas da tecnologia e contribuir para projetos voluntários. A experiência acumulada aqui será essencial não só para o meu crescimento técnico, mas também para me tornar um profissional mais completo, capaz de enfrentar novos desafios e trabalhar em equipe com eficiência.
                    </p>
                </div>
                <div className="motivation-image">
                    <img src={motivation} alt="Motivation Image" />
                </div>
            </div>
        </section>
    )
}

export default Motivation;