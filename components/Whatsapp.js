import React,{ Component } from 'react';

export default function Whatsapp() {
    return (

        <section>
      <div class="spacing black-layer opc7 bottom-spac190">
        <div
          class="fixed-bg"
          style={{ background: `url(assets/images/resources/bg-contato.png)` }}
        />
        <div id="prtcl2" class="particle-bx"></div>
        <div class="container">
          <div class="prchs-wrp">
            <div class="row">
              <div class="col-md-7 col-sm-12 col-lg-7">
                <div class="pur-mckp">
                  <img
                    src="assets/images/resources/img-form.png"
                    alt="pur-mckp.png"
                    itemprop="image" 
                  />
                </div>
              </div>
              <div class="col-md-5 col-sm-12 col-lg-5">
                <div class="pur-sec">
                  <div class="pur-sec-inr">
                    <span class="theme-clr">Revise o SEO do seu site </span>
                    <h2 itemprop="headline">gratuitamente</h2>
                  </div>
                  <div class="wpcf7">
                    <div class="screen-reader-response">
                      <form action="seoform.php" method="POST" class="wpcf7-form">
                        <div class="seo-score one-line-form">
                          <span class="wpcf7-form-control-wrap your-url">
                            <input type="url" name="url" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-url" placeholder="URL Website " required="" />
                          </span>
                          <span class="wpcf7-form-control-wrap your-email">
                            <input type="email" name="email" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email" placeholder="Email" required="" />
                          </span>
                          <button type="submit" class="octf-btn octf-btn-icon octf-btn-primary">Checar seo<i class="flaticon-right-arrow-1"></i></button>
                        </div>
                      </form>
                    </div>
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