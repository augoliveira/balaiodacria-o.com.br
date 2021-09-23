import React,{ Component } from 'react';

export default class Footer extends React.Component {
    constructor(props) {
      super(props)
        this.state = {
          scrollBtn: false
        }
        this.handleScroll = this.handleScroll.bind(this)
        this.scrollTop = this.scrollTop.bind(this)
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {

      if (window.scrollY > 70) {
        this.setState({
            scrollBtn: true
        });
      } else if (window.scrollY < 70) {
        this.setState({
            scrollBtn: false
        });
      }

    }

    scrollTop = () => {
        window.scrollTo(0, 0);
    }

    render(){
        return (
            <footer>
        <div class="spacing black-layer2 opc8 top-spac90 bottom-spac60">
          <div
            class="fixed-bg2 drk-bg"
            style={{background: `url(assets/images/parlx9.png)`}}
          ></div>
          <div class="container">
            <div class="ftr-wrp style2 remove-ext5">
              <div class="row">
                
                <div class="col-md-3 col-sm-4 col-lg-3">
                  <div class="wdgt abt-wdgt">
                      <div class="logo"><a href="/index" title="" itemprop="url"><img src="assets/images/logo1.png" alt="logo2.png" itemprop="image"/></a></div>
                      <p itemprop="description">Há mais de 10 anos construindo marcas com propósito. 
                      Também oferecemos consultorias em marketing digital para levar o seu negócio ao próximo nível.
                        </p>
                      <a href="/sobre" title="" itemprop="headline">SOBRE NÓS</a>
                  </div>
              </div>
              
                <div  class="col-md-3 col-sm-4 col-lg-3">
                  <div class="wdgt">
                    <h4 itemprop="headline" class="wdgt-tl">REDES SOCIAS</h4>
                    
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/balaiodacriacao/"
                          title="Facebook"
                          itemprop="url"
                          target="_blank"
                          >Facebook</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/balaiodacriacao"
                          title="Twitter"
                          itemprop="url"
                          target="_blank"
                          >Twitter</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/balaiodacriacao/"
                          title="Instagram"
                          itemprop="url"
                          target="_blank"
                          >Instagram</a
                        >
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/balaio-da-criacao/" title="RSS" itemprop="url" target="_blank"
                          >Linkedin</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://br.pinterest.com/balaiodacriao"
                          title="Pinterest"
                          itemprop="url"
                          target="_blank"
                          >Pinterest</a
                        >
                      </li>
                      <li>
                      <a
                        href="https://www.behance.net/balaiodacriacao/"
                        title="behance"
                        itemprop="url"
                        target="_blank"
                        >Behance</a
                      >
                    </li>
                    </ul>
                  </div>
                </div>
                
                <div class="col-md-3 col-sm-4 col-lg-3">
                  <div class="wdgt cnt-wdgt">
                    <h4 itemprop="headline" class="wdgt-tl">CONTATE-NOS</h4>
                    <div class="cnt-lst">
                      <p itemprop="description">
                        <strong class="theme-clr">ENDEREÇO</strong>
                        SCN Quadra 01, Bloco G, Sala 911, 9º Andar Edifício
                        Rossi Esplanada Business - Asa Norte, Brasília - DF,
                        70711-070
                      </p>
                      <p itemprop="description">
                        <strong class="theme-clr">CONTATO DE TEL.</strong> 61 3046.8284</p>
                      <p itemprop="description">
                        <strong class="theme-clr">NOSSO E-MAIL</strong>
                        <a href="mailt:atendimento@balaiodacriacao.com.br" title="" itemprop="url"
                          >atendimento@balaiodacriacao.com.br</a
                        >
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4 col-lg-3">
                  <div class="wdgt">
                    <h4 itemprop="headline" class="wdgt-tl">INSTAGRAM</h4>
                    <div class="insta-glr">
                      <div class="row mrg10">
                        <div class="col-md-4 col-sm-4 col-lg-4">
                          <a href="#" title="" itemprop="url"
                            ><img
                              src="assets/images/resources/insta-img1-1.jpg"
                              alt="insta-img1-1.jpg"
                              itemprop="image"
                          /></a>
                        </div>
                        <div class="col-md-4 col-sm-4 col-lg-4">
                          <a href="#" title="" itemprop="url"
                            ><img
                              src="assets/images/resources/insta-img1-2.jpg"
                              alt="insta-img1-2.jpg"
                              itemprop="image"
                          /></a>
                        </div>
                        <div class="col-md-4 col-sm-4 col-lg-4">
                          <a href="#" title="" itemprop="url"
                            ><img
                              src="assets/images/resources/insta-img1-3.jpg"
                              alt="insta-img1-3.jpg"
                              itemprop="image"
                          /></a>
                        </div>
                        <div class="col-md-4 col-sm-4 col-lg-4">
                          <a href="#" title="" itemprop="url"
                            ><img
                              src="assets/images/resources/insta-img1-4.jpg"
                              alt="insta-img1-4.jpg"
                              itemprop="image"
                          /></a>
                        </div>
                        <div class="col-md-4 col-sm-4 col-lg-4">
                          <a href="#" title="" itemprop="url"
                            ><img
                              src="assets/images/resources/insta-img1-5.jpg"
                              alt="insta-img1-5.jpg"
                              itemprop="image"
                          /></a>
                        </div>
                        <div class="col-md-4 col-sm-4 col-lg-4">
                          <a href="#" title="" itemprop="url"
                            ><img
                              src="assets/images/resources/insta-img1-6.jpg"
                              alt="insta-img1-6.jpg"
                              itemprop="image"
                          /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
        
      
      <div class="btm-br text-center">
        <div class="container">
          <p itemprop="description">
            &copy; TODOS DIREITOS RESERVADOS 
            <a
              href="https://balaiodacriacao.com.br"
              itemprop="url"
              target="_blank"
              > BALAIO DA CRIAÇÃO</a
            >
          </p>
        </div>
      </div>
      
    </footer>


        )
    }
}