import React,{ Component } from 'react';
import Link from 'next/link';

const BlogHome = () => {
        return (

            <section>
            <div class="spacing">
                <div class="container">
                <div class="sec-tl2 text-center">
                        <i>ÚLTIMAS NOTÍCIAS</i>
                        <h2 class="no-bf" itemprop="headline">Blog </h2>
                    </div>
                    <div class="remove-ext5">
                        <div class="row">
                            <div class="col-md-4 col-sm-6 col-lg-4">
                                <div class="post-bx text-center">
                                    <div class="post-thumb hrz brd-rd3">
                                        <a href="/BlogDetails" title="" itemprop="url">
                                            <img src="/assets/images/blog/blog-1-1.jpg" alt="post-img1-1.jpg" itemprop="image"/></a>
                                    </div>
                                    <div class="post-info">
                                    <h4>
                                    <Link href="/blog-details">
                                    <a>Armadilhas de marketing de aplicativos móveis antes e depois do lançamento
                                        evitar
                                    </a>
                                    </Link>
                                    </h4>
                                        
                                        
                                        <a class="theme-btn hrz brd-rd3 theme-bf-bg" href="/blog-details" title="" itemprop="url">SAIBA MAIS</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-lg-4">
                                <div class="post-bx text-center">
                                    <div class="post-thumb brd-rd3">
                                        <div class="post-thmb-car2 owl-carousel">
                                            <img src="/assets/images/blog/blog-1-2.jpg" alt="post-img1-7.jpg" itemprop="image"/>
                                            <img src="/assets/images/blog/blog-1-7.jpg" alt="post-img1-8.jpg" itemprop="image"/>
                                            <img src="/assets/images/blog/blog-1-8.jpg" alt="post-img1-9.jpg" itemprop="image"/>
                                        </div>
                                    </div>
                                    <div class="post-info">
                                    <h4>
                                    <Link href="/blog-details">
                                    <a>Empreendedorismo na área da saúde: entenda como ter sucesso!
                                    </a>
                                    </Link>
                                </h4>
                                        
                                        <a class="theme-btn hrz brd-rd3 theme-bf-bg" href="/blog-details" title="" itemprop="url">SAIBA MAIS</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-lg-4">
                                <div class="post-bx text-center">
                                    <div class="post-thumb hrz brd-rd3">
                                        <a href="/blog-details" title="" itemprop="url">
                                            <img src="/assets/images/blog/blog-1-3.jpg" alt="post-img1-2.jpg" itemprop="image"/></a>
                                    </div>
                                    <div class="post-info">
                                    <h4>
                                    <Link href="/blog-details">
                                    <a>marketing de conteúdo – tipos de conteúdo – white paper
                                    </a>
                                    </Link>
                                </h4>
                                        
                                        <a class="theme-btn hrz brd-rd3 theme-bf-bg" href="/blog-details" title="" itemprop="url">SAIBA MAIS</a>
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
export default BlogHome;