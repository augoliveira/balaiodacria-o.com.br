import React from 'react';
import Link from 'next/link';

const Manifesto = () => {

  return (

    <section>
      <div class="spacing top-spac90 bottom-spac80">
        <div
          class="fixed-bg"
          style={{ background: `url(assets/images/quem-somos.jpg)` }}
        ></div>
        <div id="prtcl1" class="particle-bx"></div>
        <div class="container">
          <div class="choose-plan-wrap">
            <div class="row">
              <div class="col-md-4 col-sm-12 col-lg-8">
                
                  <div class="plan-bx theme-bf-bg brd-rd20 text-center">
                    <div class="plan-hdr">
                      <i class=""></i>
                      <h1 itemprop="headline" style={{
                        textshadow: `0 3px 5px rgba(0, 0, 0, 0.3);
                      letter-spacing: -0.75px;
                      color: rgb(236, 236, 236);
                      font-weight: 900;
                      font-size: 80px;
                      font-family: open sans;
                    `}}
                      >MANI-<br />
                        FESTO<br />
                        DA<br />
                        MARCA</h1>
                    </div>
                    <img
                      src="assets/images/resources/quem-somos-manifesto.png"
                      alt="team-img2-4.jpg"
                      itemprop="image"
                    />
                  </div>
                  
                 
                

              </div>
              <div class="col-md-8 col-sm-12 col-lg-4">
                <div class="sec-tl1">
                  <h2 itemprop="headline">Nosso propósito</h2>
                  <p itemprop="description">
                  é ser um ambiente de transformação para todas as pessoas que, em algum momento, 
                  passarem pela nossa estrutura. Para isso, nós queremos criar experiências, 
                  através do Marketing Digital, que sirvam como uma oportunidade de mudar sua forma de 
                  enxergar a vida para desenvolver um olhar mais humano sempre buscando novas oportunidades de 
                  transformar seus produtos e serviços em benefícios para a sociedade. Nosso intuito é sermos 
                  lembrados como uma agência centrada em pessoas e no seu desenvolvimento físico, intelectual e espiritual.



                  </p>
                  <a
                    class="theme-btn hrz theme-bg brd-rd3"
                    href="#"
                    title=""
                    itemprop="url"
                  >Nossos Projetos</a
                  >
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  )
}
export default Manifesto;