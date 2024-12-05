import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./form.css";
import github from "../../assets/icons/github.svg";
import emailImg from "../../assets/icons/email.svg";
import linkedin from "../../assets/icons/linkedin.svg";

function Form() {
    const [sending, setSending] = useState(false);
    const [message, setMessage] = useState('');
    const email = "lucas-ar13@hotmail.com";

    const handleCopy = (event) => {
        event.preventDefault();
        navigator.clipboard.writeText(email).then(() => {
            alert("Email copiado para a área de transferência!");
        }).catch((error) => {
            console.error("Falha ao copiar o email:", error);
        });
    };

    const sendEmail = (event) => {
        event.preventDefault();
        setSending(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            event.target,
            import.meta.env.VITE_EMAILJS_USER_ID
        ).then((result) => {
            setMessage("Mensagem enviada com sucesso!");
            setSending(false);
        }).catch((error) => {
            setMessage("Erro ao enviar a mensagem. Tente novamente.");
            setSending(false);
            console.error("Erro:", error);
        });
    };

    return (
        <section id="form" className="form-section">
            <div className="form-container">
                <div className="form-info">
                    <h2>Me mande uma mensagem!</h2>
                    <p>Minha principal motivação para ingressar na comunidade Codigo Certo Coders é o desejo de aprender e evoluir como desenvolvedor front-end. Estou focado em ganhar experiência prática com tecnologias amplamente utilizadas no mercado, como React, Angular e outras ferramentas modernas.</p>
                    <div className="form-social">
                        
                        <a href="https://github.com/lucasar2303" target="_blank" rel="noreferrer">
                            <img src={github} alt="Github Icon" />
                        </a>
                        <a href="" onClick={handleCopy} >
                            <img src={emailImg} alt="Email Icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/lucas-anastacio/" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt="Linkedin Icon" />
                        </a>
                    </div>
                </div>

                <div className="form-form">
                    <form onSubmit={sendEmail}>
                        <div>
                            <label>Nome</label>
                            <input type="text" name='from_name' placeholder="Seu nome completo" />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" name='from_email' placeholder="Seu melhor email" />
                        </div>
                        <div>
                            <label>Mensagem</label>
                            <textarea placeholder="Escreva sua mensagem" name='message'></textarea>
                            <button type="submit"  disabled={sending}>{sending ? "Enviando..." : "Enviar"}</button>
                        </div>
                        {message && <p className="form-message">{message}</p>}
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Form