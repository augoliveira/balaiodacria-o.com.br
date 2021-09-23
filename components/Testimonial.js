import React,{ useState } from 'react';
const Testimonial = () => {

    return (

        <section>
          <div class="spacing theme-bg top-spac90 bottom-spac90">
            <div class="container">
              <div class="nws-ltr-wrp">
                <div class="row">
                  <div class="col-md-6 col-sm-12 col-lg-6">
                    <div class="nws-ltr">
                      <h1 itemprop="headline">Encontre a solução</h1>
                      <h4 itemprop="description"> para o seu problema</h4>
                      <form class="nws-frm">
                        <input type="email" placeholder="Endereço de E-Mail" />
                        <button class="theme-btn hrz brd-rd2" type="submit">
                          ENVIAR
                        </button>
                      </form>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 col-lg-6">
                    <div class="facts-wrp remove-ext3">
                      <div class="fact-bx">
                        <strong class="counter">50K</strong>
                        <span>TOTAL JOBS POST</span>
                      </div>
                      <div class="fact-bx">
                        <strong class="counter">1000</strong>
                        <span>CLIENTES ATENDIDOS</span>
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
export default Testimonial;