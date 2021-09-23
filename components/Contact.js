import React from 'react';

const Contact = () => {
    return (
        <section className="contact-one" id="contact">
            <img src="/assets/images/shapes/contact-shape-1.png" alt="" className="contact-one__shape-1"/>
            <img src="/assets/images/shapes/contact-shape-2.png" alt="" className="contact-one__shape-2"/>
            <img src="/assets/images/shapes/contact-shape-3.png" alt="" className="contact-one__shape-3"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-one__content">
                            <div className="contact-one__images">
                                <img src="/assets/images/resources/contact-1.jpg"
                                     className="wow fadeInUp" data-wow-duration="1500ms" alt=""/>
                                     <img src="/assets/images/resources/contact-2.jpg"
                                         className="wow fadeInUp" data-wow-duration="1500ms" alt=""/>
                            </div>
                            <div className="contact-one__infos">
                                <div className="contact-one__infos-single">
                                    <div className="contact-one__infos-icon">
                                        <i className="zimed-icon-placeholder"></i>
                                    </div>
                                    <div className="contact-one__infos-content">
                                        <h3>Endereço</h3>
                                        <p>SCN Quadra 01, Bloco G, Sala 911, 9º Andar Edifício
                        Rossi Esplanada Business - Asa Norte, 
                        <br/> Brasília - DF
                                        </p>
                                    </div>
                                </div>
                                <div className="contact-one__infos-single">
                                    <div className="contact-one__infos-icon">
                                        <i className="zimed-icon-message"></i>
                                    </div>
                                    <div className="contact-one__infos-content">
                                        <h3>E-mail</h3>
                                        <p><a href="mailto:atendimento@balaiodacriacao.com.br">atendimento@balaiodacriacao.com.br</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="contact-one__infos-single">
                                    <div className="contact-one__infos-icon">
                                        <i className="zimed-icon-phone-call"></i>
                                    </div>
                                    <div className="contact-one__infos-content">
                                        <h3>Contato de Tel.</h3>
                                        <p><a href="tel:6130468284">61 3046.8284</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-one__form-wrap">
                            <div className="block-title">
                                <span className="block-title__bubbles"></span>
                                <p>Entre em contato conosco agora</p>
                                <h3>e construa sua estratégia de comunicação</h3>
                            </div>
                            <form action="" className="contact-form-validated contact-one__form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" name="name" placeholder="Nome"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="email" placeholder="E-mail"/>
                                    </div>
                                    <div className="col-md-12">
                                        <input type="text" name="subject" placeholder="Assunto"/>
                                    </div>
                                    <div className="col-md-12">
                                        <textarea name="message" placeholder="Mensagem"></textarea>
                                        <button type="submit"
                                                className="thm-btn contact-one__form-btn">Enviar Mensagem
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="result"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
export default Contact;