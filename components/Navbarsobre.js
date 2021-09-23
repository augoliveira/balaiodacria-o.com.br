import React,{Component} from 'react';
import Link from 'next/link';

export default class Navbarsobre extends React.Component {
    constructor(){
        super()
        this.state = {
          sticky: false
        };
    }

    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

      if (window.scrollY > 70) {
        this.setState({
            sticky: true
        });
      } else if (window.scrollY < 70) {
        this.setState({
            sticky: false
        });
      }
    }
    render(){
        return (
<main>
      <header class="style4 stick">
        <div class="topbar-box text-center">
          <ul class="topbar-info text-left pull-left">
            <li>
              <i class="fa fa-phone"></i>
              <strong> +55 (61) 3046-8284</strong> Fale conosco
            </li>
            <li>
              <i class="fa fa-clock-o"></i>
              <strong>Jornada de trabalho:</strong> De segunda a sexta: das 8h
              às 19h
            </li>
          </ul>
          <div class="topbar-scl-sgn pull-right">
            <div class="tp-scl">
              <a
                href="https://www.instagram.com/balaiodacriacao/"
                title="Instagram"
                itemprop="url"
                target="_blank"
                ><i class="fa fa-instagram"></i
              ></a>
              <a
                href="https://www.youtube.com/channel/UCjtoddCsc384yRmQDLRke6g"
                title="Youtube"
                itemprop="url"
                target="_blank"
                ><i class="fa fa-youtube"></i
              ></a>
              <a
                href="https://www.facebook.com/bcbalaio"
                title="Facebook"
                itemprop="url"
                target="_blank"
                ><i class="fa fa-facebook-square"></i
              ></a>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=556130468284"
              title=""
              itemprop="url"
              ><i class="fa fa-whatsapp"></i> WhatsApp</a
            >
          </div>
          <ul class="topbar-info text-left pull-right">
            <li>
              <i class="fa fa-envelope"></i>
              <strong>atendimento@balaiodacriacao.com.br</strong> Entre em contato
              sempre que precisar!
            </li>
          </ul>
          <div class="logo">
            <a href="/" title="Logo" itemprop="url"
              ><img
                src="assets/images/logo.png"
                alt="logo.png"
                itemprop="image"
            /></a>
          </div>
        </div>
        <div class="menu-box">
          <div class="container">
            <nav>
              <div>
                <ul class="srch-lnks pull-right">
                  <li>
                    <a href="#" title="" itemprop="url"
                      ></a>
                  </li>
                  <li>
                    <a href="#" class="srch-btn" title="" itemprop="url"
                      ><i class="fa fa-search"></i
                    ></a>
                  </li>
                </ul>
                <ul>
                <li><a href="/" title="" itemprop="url">HOME</a>
                            </li>
                            <li><a href="/sobre" title="" itemprop="url">SOBRE NÓS</a>
                            </li>
                            <li><a href="/solucoes" title="" itemprop="url">SOLUÇÕES</a>
                            </li>
                            <li><a href="/portfolio" title="" itemprop="url">PORTFÓLIO</a>
                            </li>
                            <li><a href="/blog" title="" itemprop="url">BLOG</a>
                            </li>
                            <li><a href="/podcast" title="" itemprop="url">PODCAST</a>
                            </li>
                            <li><a href="/contato" title="" itemprop="url">CONTATO</a>
                            </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        
      </header>
     
      <div class="hdr-srch-bx">
        <span class="srch-cls-btn"><i class="fa fa-close"></i></span>
        <form>
          <input type="text" placeholder="Pesquise suas palavras-chave..." />
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>
      <div class="rspn-hdr">
        <div class="rspn-mdbr">
          <ul class="rspn-scil">
            <a
              href="https://www.instagram.com/balaiodacriacao/"
              title="Instagram"
              itemprop="url"
              target="_blank"
              ><i class="fa fa-instagram"></i
            ></a>
            <a
              href="https://www.youtube.com/channel/UCjtoddCsc384yRmQDLRke6g"
              title="Youtube"
              itemprop="url"
              target="_blank"
              ><i class="fa fa-youtube"></i
            ></a>
            <a
              href="https://www.facebook.com/balaiodacriacao/"
              title="Facebook"
              itemprop="url"
              target="_blank"
              ><i class="fa fa-facebook-square"></i
            ></a>
          </ul>
          <form class="rspn-srch">
            <input type="text" placeholder="Enter Your Keyword" />
            <button type="submit"><i class="fa fa-search"></i></button>
          </form>
        </div>
        <div class="lg-mn">
          <div class="logo">
            <a href="/index" title="Logo" itemprop="url"
              ><img
                src="assets/images/logo.png"
                alt="logo1.png"
                itemprop="image"
            /></a>
          </div>
          <span class="rspn-mnu-btn"><i class="fa fa-list-ul"></i></span>
        </div>
        <div class="rsnp-mnu">
          <span class="rspn-mnu-cls"><i class="fa fa-times"></i></span>
          <ul>
          <li><a href="/" title="" itemprop="url">HOME</a>
                            </li>
                            <li><a href="/sobre" title="" itemprop="url">SOBRE NÓS</a>
                            </li>
                            <li><a href="/solucoes" title="" itemprop="url">SOLUÇÕES</a>
                            </li>
                            <li><a href="/portfolio" title="" itemprop="url">PORTFÓLIO</a>
                            </li>
                            <li><a href="/blog" title="" itemprop="url">BLOG</a>
                            </li>
                            <li><a href="/podcast" title="" itemprop="url">PODCAST</a>
                            </li>
                            <li><a href="/contato" title="" itemprop="url">CONTATO</a>
                            </li>
          </ul>
        </div>
      </div>
    </main>


        )
    }
}