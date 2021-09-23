import React from 'react';
import Image from 'next/image'
const Banner = () => {

    return(
        <section className="banner-one" id="banner" style={{backgroundImage: `url(/assets/images/resources/slide_balaio-1.jpg)`}}>
            <div className="container">
            
                <div className="row">
                    <div className="col-lg-7">
                        <div className="banner-one__content">
                            <p className="banner-one__tag-line">Bem-vindo a balaio da criação </p>
                            <h3>soluções personalizadas</h3>
                            <h2 style={{letterspacing: `-.75px;color: #fff;font-weight:400;font-family: poppins;`}}><span style={{color: `#fab702;`}}> Com estratégias</span>  direcionadas. <br/> Criação  <span style={{color: `#fab702;`}}>de planejamento</span> e produção  <br/> de conteúdo <span class="theme-clr">de valor para sua </span> <br/> <span class="theme-clr">audiência.</span></h2>
                            <a href="#contact" data-target="#contact" className="thm-btn banner-one__btn scroll-to-target">Fale com nossa equipe</a>
                        </div>
                    </div>
                    <img src="/assets/images/mocs/banner-moc-1-1.png"  alt="" className="banner-one__moc" />
                </div>
            </div>
            </section>
    )
}
export default Banner;