import React from 'react';

const Services = () => {
        return (
            <section>
            <div class="spacing">
              <div class="container">
                <div class="srv-wrp">
                  <div class="row">
                    <div class="col-md-4 col-sm-12 col-lg-4">
                      <div class="sec-tl1">
                        <i>CONHEÇA NOSSOS SERVIÇOS:</i>
                        <h2 itemprop="headline">A solução certa para você</h2>
                        <p itemprop="description">
                        Um pequeno passo para um empreendimento, mas um gigantesco passo para a sua marca. 
                        Investir em marketing é o mais simples e significativo passo que você pode dar pelo seu negócio.
                        </p>
                        <a href="/Services" title="" itemprop="url">Saiba mais</a>
                      </div>
                    </div>
                    <div class="col-md-8 col-sm-12 col-lg-8">
                      <div class="srv-car owl-carousel dots-center">
                        <div class="srv-bx text-center">
                          <i class="brd-rd50"
                            ><img
                              src="assets/images/resources/planejamento.png"
                              alt="srv-icn1-1.png"
                              itemprop="image"
                          /></i>
                          <h4 itemprop="headline">
                            <a href="#" title="" itemprop="url">Planejamento</a>
                          </h4>
                          <p itemprop="description">
                          Compreenda o seu mercado e saiba onde quer chegar com o seu negócio por meio de um posicionamento claro. 
                          </p>
                          <a href="/Services" title="" itemprop="url">SAIBA MAIS</a>
                        </div>
                       
                        <div class="srv-bx text-center">
                          <i class="brd-rd50"
                            ><img
                              src="assets/images/resources/lista-de-controle.png"
                              alt="srv-icn1-2.png"
                              itemprop="image"
                          /></i>
                          <h4 itemprop="headline">
                            <a href="#" title="" itemprop="url">Estratégias</a>
                          </h4>
                          <p itemprop="description">
                          Venha construir as melhores estratégias para alcançar seus objetivos, 
                          o público consumidor e encantar a audiência.
                          </p>
                          <a href="/Services" title="" itemprop="url">SAIBA MAIS</a>
                        </div>
                        
                      </div>
                     
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </section>

        )
}
export default Services;