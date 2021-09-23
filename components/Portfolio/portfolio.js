import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const portfolio = () => {

    return (
      <>
<section>
            <div class="spacing black-layer3 opc8">
                <div class="fixed-bg" style={{backgroundImage: `url(assets/images/resources/portfolio-bg.jpg);`}}></div>
                <div class="container">
                    <div class="pg-tp-wrp text-center">
                        <div class="pg-tp-inr">
                            <h1 itemprop="headline">Portfólio </h1>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/" title="" itemprop="url">Home</a></li>
                                <li class="breadcrumb-item active">Portfólio</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
        <div class="spacing">
                    <div class="sec-tl2 text-center">
                        <i>IDEIAS PRINCIPAIS</i>
                        <h2 class="no-bf" itemprop="headline">Nossos projetos</h2>
                    </div>
            <div class="spacing remove-bottom top-spac70">
                <div class="prjcts-wrp style2 text-center">
                    <div class="prjcts-inr">
                        <ul class="fltr-btns style2">
                            <li class="active"><a class="brd-rd3" data-filter="*" href="#" itemprop="url">TODOS</a></li>
                            <li><a class="brd-rd3" data-filter=".fltr-itm1" href="#" itemprop="url">IDENTIDADE VISUAL</a></li>
                            <li><a class="brd-rd3" data-filter=".fltr-itm2" href="#" itemprop="url">PRESENÇA DIGITAL</a></li>
                        </ul>
                        <div class="fltr-dta style2">
                            <div class="row masonry mrg">
                                <div class="col-md-3 col-sm-12 col-lg-3 fltr-itm fltr-itm1">
                                    <div class="prtfl-bx style2 theme-bf-bg text-center">
                                        <img src="assets/images/resources/prtfl-img2-2.jpg" alt="prtfl-img2-2.jpg" itemprop="image"/>
                                        <div class="prtfl-inf">
                                            <div class="prtfl-inf-btns">
                                            <span class="prj-cat">Identidade visual</span>
                                            <h3 itemprop="headline"><a href="/fouet" title="" itemprop="url">Mais detalhe</a></h3>
                                            <a class="brd-rd50" href="/fouet" title="" itemprop="url"><i class="fa fa-link"></i></a>
                                            <a class="brd-rd50" data-fancybox="gallery" href="assets/images/resources/prtfl-img2-2.jpg" title="" itemprop="url"><i class="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-12 col-lg-3 fltr-itm fltr-itm2">
                                    <div class="prtfl-bx style2 theme-bf-bg text-center">
                                        <img src="assets/images/resources/prtfl-img2-1.jpg" alt="prtfl-img2-2.jpg" itemprop="image"/>
                                        <div class="prtfl-inf">
                                            <div class="prtfl-inf-btns">
                                            <span class="prj-cat">Identidade Visual</span>
                                            <h3 itemprop="headline"><a href="/visitebrasilia" title="" itemprop="url">Mais detalhe</a></h3>
                                            <a class="brd-rd50" href="/visitebrasilia" title="" itemprop="url"><i class="fa fa-link"></i></a>
                                                <a class="brd-rd50" data-fancybox="gallery" href="assets/images/resources/prtfl-img2-1.jpg" title="" itemprop="url"><i class="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-3 col-sm-6 col-lg-3 fltr-itm fltr-itm1">
                                    <div class="prtfl-bx style2 theme-bf-bg text-center">
                                        <img src="assets/images/resources/prtfl-img2-3.jpg" alt="prtfl-img2-3.jpg" itemprop="image"/>
                                        <div class="prtfl-inf">
                                            <div class="prtfl-inf-btns">
                                            <span class="prj-cat">Identidade Visual</span>
                                            <h3 itemprop="headline"><a href="/marcielmarinho" title="" itemprop="url">Mais detalhe</a></h3>
                                            <a class="brd-rd50" href="/marcielmarinho" title="" itemprop="url"><i class="fa fa-link"></i></a>
                                                <a class="brd-rd50" data-fancybox="gallery" href="assets/images/resources/prtfl-img2-3.jpg" title="" itemprop="url"><i class="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6 col-lg-3 fltr-itm fltr-itm1 fltr-itm1">
                                    <div class="prtfl-bx style2 theme-bf-bg text-center">
                                        <img src="assets/images/resources/prtfl-img2-5.jpg" alt="prtfl-img2-5.jpg" itemprop="image"/>
                                        <div class="prtfl-inf">
                                            <div class="prtfl-inf-btns">
                                            <span class="prj-cat">Identidade visual</span>
                                            <h3 itemprop="headline"><a href="/unum" title="" itemprop="url">Mais detalhe</a></h3>
                                            <a class="brd-rd50" href="/unum" title="" itemprop="url"><i class="fa fa-link"></i></a>
                                                <a class="brd-rd50" data-fancybox="gallery" href="assets/images/resources/prtfl-img2-5.jpg" title="" itemprop="url"><i class="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-md-3 col-sm-6 col-lg-3 fltr-itm fltr-itm1">
                                    <div class="prtfl-bx style2 theme-bf-bg text-center">
                                        <img src="assets/images/resources/prtfl-img2-7.jpg" alt="prtfl-img2-7.jpg" itemprop="image"/>
                                        <div class="prtfl-inf">
                                            <div class="prtfl-inf-btns">
                                            <span class="prj-cat">Identidade Visual</span>
                                            <h3 itemprop="headline"><a href="/cha" title="" itemprop="url">Mais detalhe</a></h3>
                                            <a class="brd-rd50" href="/cha" title="" itemprop="url"><i class="fa fa-link"></i></a>
                                            <a class="brd-rd50" data-fancybox="gallery" href="assets/images/resources/prtfl-img2-7.jpg" title="" itemprop="url"><i class="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6 col-lg-3 fltr-itm fltr-itm2">
                                    <div class="prtfl-bx style2 theme-bf-bg text-center">
                                        <img src="assets/images/resources/prtfl-img2-9.jpg" alt="prtfl-img2-7.jpg" itemprop="image"/>
                                        <div class="prtfl-inf">
                                            <div class="prtfl-inf-btns">
                                            <span class="prj-cat">Presença digital</span>
                                            <h3 itemprop="headline"><a href="/reserva61" title="" itemprop="url">Mais detalhe</a></h3>
                                            <a class="brd-rd50" href="/reserva61" title="" itemprop="url"><i class="fa fa-link"></i></a>
                                                <a class="brd-rd50" data-fancybox="gallery" href="assets/images/resources/prtfl-img2-9.jpg" title="" itemprop="url"><i class="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6 col-lg-3 fltr-itm fltr-itm2">
                                    <div class="prtfl-bx style2 theme-bf-bg text-center">
                                        <img src="assets/images/resources/prtfl-img2-8.jpg" alt="prtfl-img2-8.jpg" itemprop="image"/>
                                        <div class="prtfl-inf">
                                            <div class="prtfl-inf-btns">
                                            <span class="prj-cat">Presença digital</span>
                                            <h3 itemprop="headline"><a href="/easycare" title="" itemprop="url">Mais detalhe</a></h3>
                                            <a class="brd-rd50" href="/easycare" title="" itemprop="url"><i class="fa fa-link"></i></a>
                                                <a class="brd-rd50" data-fancybox="gallery" href="assets/images/resources/prtfl-img2-8.jpg" title="" itemprop="url"><i class="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6 col-lg-3 fltr-itm fltr-itm2">
                                <div class="prtfl-bx style2 theme-bf-bg text-center">
                                    <img src="assets/images/resources/prtfl-img2-10.jpg" alt="prtfl-img2-10.jpg" itemprop="image"/>
                                    <div class="prtfl-inf">
                                        <div class="prtfl-inf-btns">
                                        <span class="prj-cat">Presença digital</span>
                                            <h3 itemprop="headline"><a href="/balaio" title="" itemprop="url">Mais detalhe</a></h3>
                                            <a class="brd-rd50" href="/balaio" title="" itemprop="url"><i class="fa fa-link"></i></a>
                                            <a class="brd-rd50" data-fancybox="gallery" href="assets/images/resources/prtfl-img2-10.jpg" title="" itemprop="url"><i class="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div class="col-md-3 col-sm-12 col-lg-3 fltr-itm fltr-itm1">
                                    <div class="prtfl-bx style2 theme-bf-bg text-center">
                                        <img src="assets/images/resources/prtfl-img2-6.jpg" alt="prtfl-img2-6.jpg" itemprop="image"/>
                                        <div class="prtfl-inf">
                                            <div class="prtfl-inf-btns">
                                            <span class="prj-cat">Identidade Visual</span>
                                            <h3 itemprop="headline"><a href="/planejamente" title="" itemprop="url">Mais detalhe</a></h3>
                                            <a class="brd-rd50" href="/planejamente" title="" itemprop="url"><i class="fa fa-link"></i></a>
                                                <a class="brd-rd50" data-fancybox="gallery" href="assets/images/resources/prtfl-img2-6.jpg" title="" itemprop="url"><i class="fa fa-search"></i></a>
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
            
        </section>
        
        
        </>

            )
}
            export default portfolio;