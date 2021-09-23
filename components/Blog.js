import React from 'react';
import Link from 'next/link';

const Blog = () => {

    return (

        <section className="blog-one blog-one__home blog-one__grid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-one__single">
                            <div className="blog-one__image">
                                <img src="/assets/images/blog/blog-1-1.jpg" alt=""/>
                            </div>
                            <div className="blog-one__content">
                                <ul className="blog-one__meta list-unstyled">
                                    <li><a href="#"><i className="far fa-clock"></i> 20 Fev</a></li>
                                    <li><a href="#"><i className="far fa-comments"></i> 2 Comentarios</a></li>
                                </ul>
                                <h3>
                                    <Link href="/blog-details">
                                    <a>Armadilhas de marketing de aplicativos móveis antes e depois do lançamento
                                        evitar
                                    </a>
                                    </Link>
                                </h3>
                                <Link href="/blog-details">
                                <a className="blog-one__link"><i
                                    className="zimed-icon-right-arrow"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-one__single">
                            <div className="blog-one__image">
                                <img src="/assets/images/blog/blog-1-2.jpg" alt=""/>
                            </div>
                            <div className="blog-one__content">
                                <ul className="blog-one__meta list-unstyled">
                                    <li><a href="#"><i className="far fa-clock"></i> 20 Fev</a></li>
                                    <li><a href="#"><i className="far fa-comments"></i> 2 Comentarios</a></li>
                                </ul>
                                <h3>
                                    <Link href="/blog-details">
                                    <a>Empreendedorismo na área da saúde: entenda como ter sucesso!
                                    </a>
                                    </Link>
                                </h3>
                                <Link href="/blog-details">
                                <a className="blog-one__link"><i
                                    className="zimed-icon-right-arrow"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-one__single">
                            <div className="blog-one__image">
                                <img src="/assets/images/blog/blog-1-3.jpg" alt=""/>
                            </div>
                            <div className="blog-one__content">
                                <ul className="blog-one__meta list-unstyled">
                                    <li><a href="#"><i className="far fa-clock"></i> 07 Jan</a></li>
                                    <li><a href="#"><i className="far fa-comments"></i> 2 Comentarios</a></li>
                                </ul>
                                <h3>
                                    <Link href="/blog-details">
                                    <a>marketing de conteúdo – tipos de conteúdo – white paper
                                    </a>
                                    </Link>
                                </h3>
                                <Link href="/blog-details">
                                <a className="blog-one__link"><i
                                    className="zimed-icon-right-arrow"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-one__single">
                            <div className="blog-one__image">
                                <img src="/assets/images/blog/blog-1-4.jpg" alt=""/>
                            </div>
                            <div className="blog-one__content">
                                <ul className="blog-one__meta list-unstyled">
                                    <li><a href="#"><i className="far fa-clock"></i> 16 de março</a></li>
                                    <li><a href="#"><i className="far fa-comments"></i> 8 Comentarios</a></li>
                                </ul>
                                <h3>
                                    <Link href="/blog-details">
                                    <a>Celular na Nuvem: swap partition
                                    </a>
                                    </Link>
                                </h3>
                                <Link href="/blog-details">
                                <a className="blog-one__link"><i
                                    className="zimed-icon-right-arrow"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-one__single">
                            <div className="blog-one__image">
                                <img src="/assets/images/blog/blog-1-5.jpg" alt=""/>
                            </div>
                            <div className="blog-one__content">
                                <ul className="blog-one__meta list-unstyled">
                                    <li><a href="#"><i className="far fa-clock"></i> 09 Julho</a></li>
                                    <li><a href="#"><i className="far fa-comments"></i> 2 Comentarios</a></li>
                                </ul>
                                <h3>
                                    <Link href="/blog-details">
                                    <a>Conheça os impactos da transformação digital para as empresas
                                    </a>
                                    </Link>
                                </h3>
                                <Link href="/blog-details">
                                <a className="blog-one__link"><i
                                    className="zimed-icon-right-arrow"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-one__single">
                            <div className="blog-one__image">
                                <img src="/assets/images/blog/blog-1-6.jpg" alt=""/>
                            </div>
                            <div className="blog-one__content">
                                <ul className="blog-one__meta list-unstyled">
                                    <li><a href="#"><i className="far fa-clock"></i> 06 Outubro</a></li>
                                    <li><a href="#"><i className="far fa-comments"></i> 2 Comentarios</a></li>
                                </ul>
                                <h3>
                                    <Link href="/blog-details">
                                    <a>Como utilizar as redes sociais na área da saúde?
                                    </a>
                                    </Link>
                                </h3>
                                <Link href="/blog-details">
                                <a className="blog-one__link"><i
                                    className="zimed-icon-right-arrow"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post-pagination">
                    <a href="#"><i className="fa fa-angle-left"></i></a>
                    <a href="#">1</a>
                    <a href="#" className="active">2</a>
                    <a href="#">3</a>
                    <a href="#"><i className="fa fa-angle-right"></i></a>
                </div>
            </div>
        </section>
    )
}
export default Blog;