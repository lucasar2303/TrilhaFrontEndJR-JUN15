import React from 'react';
import phone from '../../assets/icons/phone.svg';
import wave from '../../assets/wave.svg';

function PersonalInfo({}){
    return (
        <div className="interests-info">
            <div className="personal-interests-title">
                <h2>Gostos pessoais</h2>
                <img src={phone} alt="Phone Icon" />
            </div>
            <p>
                A música eletrônica é uma das minhas maiores paixões e está presente em quase todos os momentos do meu dia. 
                Para mim, música eletrônica não é apenas entretenimento, mas uma forma de conexão e expressão criativa.
            </p>
            <p>
                Minha paixão por design também complementa essa jornada. Gosto de pensar em interfaces intuitivas e projetos visuais 
                que conversem com as pessoas, proporcionando experiências agradáveis e significativas.
            </p>
            <p>
                No mundo da tecnologia, sou movido pela curiosidade. Adoro aprender sobre novas ferramentas e acompanhar 
                as tendências que estão moldando o futuro.
            </p>
            <div className="wave-container">
                <img src={wave} alt="Visual Wave" className="wave" />
            </div>
        </div>
    )
};

export default PersonalInfo;
