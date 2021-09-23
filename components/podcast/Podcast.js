import React from 'react';
import Link from 'next/link';

const Podcast = () => {

    return (

      <section>
      <div className="spacing">
        <div
        className="fixed-bg2 drk-bg"
        style={{background: `url(/assets/images/resources/bg-se-liga-nessepostcast.jpg)`}}
      ></div>
          <div className="container">                    
              <div className="sec-tl2 text-left" >
                  <h2 className="no-bf" itemprop="headline" style={{
                  letterspacing: `0px;
                  font-family: open sans;
                  color: rgb(255, 154, 2);
                  font-style: italic;
                  font-weight: 900;
                `}}
              >
              Se ligue nesse som
              </h2>
              </div>
              <div class="remove-ext2">
                    <div class="row mrg20">
                        <div class="col-md-3 col-sm-6 col-lg-3">
                            <div class="plan-bx2 brd-rd10 text-center" style={{background: `url(assets/images/resources/plan-bg1.jpg);`}}>
                              <a href="https://open.spotify.com/episode/07m6kinplVNrfcaEI7dm6a?si=TOX8uJr1Rlqspm4KnSaZmg&dl_branch=1" title="Alexa-uma-conversa-com-a-IA-da-Amazon" itemprop="url"
                              ><img src="assets/images/resources/Alexa-uma-conversa-com-a-IA-da-Amazon.jpg" alt="Alexa-uma-conversa-com-a-IA-da-Amazon" itemprop="image"
                            /></a>
                                <a class="theme-btn hrz theme-bf-bg no-bg-btn brd-rd5" href="https://open.spotify.com/episode/07m6kinplVNrfcaEI7dm6a?si=TOX8uJr1Rlqspm4KnSaZmg&dl_branch=1" title="" itemprop="url">Uma conversa com
                                  a IA da Amazon</a>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 col-lg-3">
                            <div class="plan-bx2 brd-rd10 text-center" style={{background: `url(../resources/Spotify---homero-bg.jpg);`}}>
                              <a href="https://open.spotify.com/episode/1hcCpAtbtFDQqqTuiiI22L
                              " title="Entrevistas-homero" itemprop="url"
                              ><img src="assets/images/resources/Spotify---PodAí-Entrevistas-homero.png" alt="Spotify---PodAí-Entrevistas-homero" itemprop="image"
                            /></a>
                                <a class="theme-btn hrz theme-bf-bg no-bg-btn brd-rd5" href="https://open.spotify.com/episode/1hcCpAtbtFDQqqTuiiI22L
                                " title="" itemprop="url">Entrevista: <br/>Homero</a>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 col-lg-3">
                            <div class="plan-bx2 brd-rd10 text-center" style={{background: `url(../resources/Spotify---homero-bg.jpg);`}}>
                              <a href="https://open.spotify.com/episode/1hcCpAtbtFDQqqTuiiI22L
                              " title="Entrevistas-homero" itemprop="url"
                              ><img src="assets/images/resources/Faça-logo-sua-marca.jpg" alt="Spotify---PodAí-Entrevistas-homero" itemprop="image"
                            /></a>
                                <a class="theme-btn hrz theme-bf-bg no-bg-btn brd-rd5" href="https://open.spotify.com/episode/60h50i6VcYRAuh9qQKi3EH?si=0dmGC3gOQIWMMq-EVuUmVA&dl_branch=1
                                " title="" itemprop="url">Faça logo sua marca</a>
                            </div>
                        </div>
                        
                        <div class="col-md-3 col-sm-6 col-lg-3">
                          <div class="plan-bx2 brd-rd10 text-center" style={{backgroundimage: `url(assets/images/resources/bg-podai.jpg);`}}>
                            <a href="https://open.spotify.com/episode/741RgGN5jo910BBW5YoWni?si=2nttESz7RGaZ7etO4z1DxA&dl_branch=1
                            " title="Imagens-que-contam-história" itemprop="url"
                            ><img src="assets/images/resources/Imagens-que-contam-história.jpg" alt="Imagens-que-contam-história" itemprop="image"
                          /></a>
                              <a class="theme-btn hrz theme-bf-bg no-bg-btn brd-rd5" href="https://open.spotify.com/episode/741RgGN5jo910BBW5YoWni?si=2nttESz7RGaZ7etO4z1DxA&dl_branch=1
                              " title="" itemprop="url">Imagens que contam
                                história</a>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
              
  </section>

            )
}
            export default Podcast;