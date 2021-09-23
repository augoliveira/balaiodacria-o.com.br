import React from "react";


const Contactform = () => {
    
  return (
    <section>
            <div class="spacing gray-bg bottom-spac70 top-spac70">
                <div class="container">
                    <div class="cnt-frm-dta">
                        <div class="row">
                            <div class="col-md-4 col-sm-12 col-lg-4">
                                <div class="cnt-inf">
                                    <h2 itemprop="headline">Fale com a gente</h2>
                                    <p itemprop="description">Envie uma mensagem para o nosso time de especialistas em marketing digital.
                                        Estamos prontos para um café e uma conversa.
                                        </p>
                                </div>
                            </div>
                            <div class="col-md-8 col-sm-12 col-lg-8">
                                <div class="cnt-frm">
                                    <form>
                                        <div class="row mrg10">
                                            <div class="col-md-6 col-sm-6 col-lg-6">
                                                <input class="brd-rd3" type="text" placeholder="Nome"/>
                                            </div>
                                            <div class="col-md-6 col-sm-6 col-lg-6">
                                                <input class="brd-rd3" type="email" placeholder="E-mail"/>
                                            </div>
                                            <div class="col-md-12 col-sm-12 col-lg-12">
                                                <textarea class="brd-rd3" placeholder="Mensagem"></textarea>
                                            </div>
                                            <div class="col-md-12 col-sm-12 col-lg-12">
                                                <button class="theme-bg hrz theme-btn brd-rd3" type="submit">ENVIAR</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default Contactform;
