import React from 'react';
import Link from 'next/link';

export default function Seo() {
  return (

    <><section>
      <div class="spacing no-spacing">
        <div class="container">
          <div class="hdfc-cnt-wrp overlap-140">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-lg-12">
                <div class="cnt-inf-wrp brd-rd5 style2" style={{backgroundImage: `url(assets/images/ptrn3.jpg);`}}>
                  <div class="sec-tl2 text-center">
                    <i>CONTATO</i>
                    <h2 class="no-bf" itemprop="headline">BALAIO DA CRIAÇÃO</h2>
                  </div>
                  <div class="cnt-inf-itm-wrp">
                    <div class="row">
                      <div class="col-md-4 col-sm-6 col-lg-4">
                        <div class="cnt-inf-itm">
                          <h4 itemprop="headline">ENDEREÇO</h4>
                          <ul class="cnt-inf-lst">
                            <li><i class="fa fa-map-marker"></i> SCN Quadra 01, Bloco G, Sala 911, 9º Andar Edifício Rossi Esplanada Business - Asa Norte,
                            Brasília - DF</li>
                            <li><i class="fa fa-mobile"></i> 
                            (61) 3046.8284</li>
                            <li><i class="fa fa-envelope-o"></i> <a href="#" title="" itemprop="url">atendimento@balaiodacriacao.com.br</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-md-4 col-sm-6 col-lg-4">
                        <div class="cnt-inf-itm">
                          <h4 itemprop="headline">REDES SOCIAIS</h4>
                          <ul class="cnt-inf-lst">
                            <li><i class="fa fa-facebook"></i> FACEBOOK</li>
                            <li><i class="fa fa-instagram"></i> INSTAGRAM</li>
                            <li><i class="fa fa-linkedin"></i> LINKEDIN</li>
                            <li><i class="fa fa-behance"></i> BEHANCE</li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-md-4 col-sm-6 col-lg-4">
                        <div class="cnt-inf-itm">
                          <h4 itemprop="headline">SOLUÇÕES</h4>
                          <ul class="cnt-inf-lst">
                            <li><img
                            src="assets/images/resources/marketing-digital (1).png"
                            alt="srv-icn1-2.png"
                            itemprop="image"
                        /> ESTRATÉGIA DIGITAL</li>
                            <li><img
                            src="assets/images/resources/local-na-rede-internet.png"
                            alt="srv-icn1-2.png"
                            itemprop="image"
                        /> PRESENÇA DIGITAL</li>
                            <li><img
                            src="assets/images/resources/equipe.png"
                            alt="srv-icn1-2.png"
                            itemprop="image"
                        /> PLANEJAMENTO</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><section>
        <div class="spacing top-spac220 bottom-spac90 black-layer opc4">
          <div class="fixed-bg" style={{ backgroundImage: `url(assets/images/parlx8.jpg);`}}></div>
                <div id="prtcl1" class="particle-bx"></div>
                <div class="container">
                    <div class="get-tuch-wrp">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-lg-12">
                                <div class="sec-tl2 wht-clr text-center">
                                    <i>Contato</i>
                                    <h2 class="no-bf" itemprop="headline">Solicite um orçamento gratuito</h2>
                                </div>
                                <div class="cnt-frm-wrp text-center">
                                    <form>
                                        <div class="row mrg20">
                                            <div class="col-md-4 col-sm-6 col-lg-4">
                                                <input type="text" placeholder="Nome"/>
                                            </div>
                                            <div class="col-md-4 col-sm-6 col-lg-4">
                                                <input type="email" placeholder="E-mail"/>
                                            </div>
                                            <div class="col-md-4 col-sm-12 col-lg-4">
                                                <input type="text" placeholder="Assunto"/>
                                            </div>
                                            <div class="col-md-12 col-sm-12 col-lg-12">
                                                <textarea placeholder="Mensagem"></textarea>
                                            </div>
                                            <div class="col-md-12 col-sm-12 col-lg-12">
                                                <button class="theme-btn hrz theme-bf-bg" type="submit">ENVIAR</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section></>
  )
  }

