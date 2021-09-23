import React,{Component} from 'react';
import Link from 'next/link';
export default class Navbar extends React.Component {
    constructor(){
        super()
        this.state = {
          sticky: false
        };
    }

        
    render(){
        return (

            <div>

<div class="vrtcl-hdr2">
        <header class="style6">
            <div class="logo"><a href="/" title="Logo" itemprop="url">
                <img src="assets/images/logo.png" alt="logo.png" itemprop="image"/></a></div>
            <div class="hdr-lnks">
                <a class="mnu-opn-btn" href="#" title="" itemprop="url"><i class="fa fa-align-right"></i></a>
                <a href="#" title="" itemprop="url"><i class="fa fa-sign-in"></i></a>
            </div>
            <div class="scl-lnks3">
                
                
                <a href="https://www.facebook.com/balaiodacriacao" title="facebook" itemprop="url" target="_blank"><i class="fa fa-facebook"></i></a>
                <a href="https://www.instagram.com/balaiodacriacao/" title="instagram" itemprop="url" target="_blank"><i class="fa fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/balaio-da-criacao" title="linkedin" itemprop="url" target="_blank"><i class="fa fa-linkedin"></i></a>   
                <a href="https://www.behance.net/balaiodacriacao" title="behence" itemprop="url" target="_blank"><i class="fa fa-behance"></i></a>
            </div>
            <div class="menu-box">
                <span class="mnu-cls-btn"><i class="fa fa-close"></i></span>
                <nav>
                    <div>
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
        </header>
        <div class="hdr-srch-bx">
            <span class="srch-cls-btn"><i class="fa fa-close"></i></span>
            <form>
                <input type="text" placeholder="Pesquise suas palavras-chave..."/>
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>
        <div class="rspn-hdr">
            <div class="rspn-mdbr">
                <ul class="rspn-scil">
                    <li><a href="https://www.instagram.com/balaiodacriacao/" title="" itemprop="url" target="_blank"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="https://www.facebook.com/balaiodacriacao" title="" itemprop="url" target="_blank"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://wa.me/message/3OWBSARKT447D1" title="" itemprop="url" target="_blank"><i class="fa fa-whatsapp"></i></a></li> 
                    <li><a href="https://www.behance.net/balaiodacriacao" title="" itemprop="url" target="_blank"><i class="fa fa-behance"></i></a></li>
                </ul>
                <form class="rspn-srch">
                    <input type="text" placeholder="Enter Your Keyword" />
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
            <div class="lg-mn">
                <div class="logo"><a href="/" title="Logo" itemprop="url">
                <img src="assets/images/logo.png" alt="logo.png" itemprop="image"/></a></div>
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
        </div>
        
            </div>

        )
    }
}