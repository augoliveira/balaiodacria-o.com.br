import React from 'react';

const BlogDetails = () => {
    return (
        <section className="blog-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-details__content">
                            <div className="blog-details__image">
                                <img src="/assets/images/blog/blog-d-1.jpg" alt="" />
                            </div>
                            <ul className="blog-one__meta list-unstyled">
                                <li><a href="#"><i className="far fa-clock"></i> 07 Janeiro</a></li>
                                <li><a href="#"><i className="far fa-comments"></i> 2 Comentarios</a></li>
                            </ul>
                            <h3>Celular na Nuvem: swap partition</h3>
                            <p>O smartphone vai trocar aplicações com a nuvem. Estamos vivendo o limiar no uso de uma nova 
                                técnica para tornar os celulares mais poderosos. Similar de quando estávamos aumentando 
                                velozmente a capacidade de armazenamento magnético dos computadores de mesa nos discos rígidos, 
                                mas a memória RAM não comportava mais sistema.</p>
                            <p>Estamos vivendo o limiar no uso de uma nova técnica para tornar os celulares mais poderosos. Similar de quando estávamos aumentando velozmente a capacidade de armazenamento magnético dos computadores de mesa nos discos rígidos, mas a memória RAM não comportava mais sistema de boot, sistema operacional, aplicativos, utilitários e dados do usuário ao mesmo tempo.

Foi quando adotaram uma técnica paliativa para dar mais fôlego pra tecnologia flash se recuperar e andar melhor em parceria com os dispositivos magnéticos de armazenamento. Essa técnica é a do swap, que no inglês mais rasteiro significa troca.

O que acontecia era que quando a memória RAM não suportava mais a quantidade de dados trabalhada, mas precisaria dar continuidade ao processamento, então ela poderia se apropriar de um pedaço do disco rígido como uma memoria estendida e poder continuar o seu trabalho sem comprometimento do sistema.

Isso pode estar em vias de acontecer com o celular e a nuvem, visto que os sistemas de armazenamentos internos, tanto de memória RAM como a de dados ainda não acompanham a demanda de serviços que deva ser atendida e precisamos desinstalar alguns aplicativos para comportar outros.

Mas o dispositivo precisa ser virtual para não significar aumento do hardware do celular, portanto nada mais adequado do que a técnica de swap aliada à nuvem. A nuvem já nos auxilia nos backups de nossos dados. Sabe, quando ao trocamos de celular e precisamos restaurar os dados do celular anterior? Essa restauração se faz através de dados da nuvem que foram guardados antes de trocarmos os celulares.

A diferença é que o uso da nuvem como partição swap do celular exigirá processamento instantâneo, on-line, processamento em tempo real. Então vamos precisar de mais velocidade e conexão estável e permanente. A rede 5G já poderá prover essa necessidade.

Claro que esta narrativa se trata de uma suposição, até por que outras técnicas possam estar sendo desenvolvidas. Esta narrativa é apenas uma possibilidade, é uma viagem na tentativa de encontrar um porto seguro, nada mais que um sonho, que pode ser realizado… ou não!

“Ai de quem se colocar contra a evolução da humanidade” (anônimo. quase EU)</p>
                        </div>
                        <div className="blog-details__bottom">
                            <p className="blog-details__tags">
                                <span>Tags:</span>
                                <a href="#">Planejamento,</a>
                                <a href="#">Planejamento,</a>
                                <a href="#">Presença Digital - Desenvolvimento Web</a>
                            </p>
                            <div className="blog-details__social site-footer__social">
                                <a className="fab fa-facebook-f" href="https://www.facebook.com/balaiodacriacao/"></a>
                                <a className="fab fa-linkedin" href="https://www.linkedin.com/company/balaio-da-criacao/"></a>
                                <a className="fab fa-instagram" href="https://www.instagram.com/balaiodacriacao/"></a>
                                <a className="fab fa-pinterest-p" href="#"></a>
                            </div>
                        </div>

                        <div className="author-one">
                            <div className="author-one__image">
                                <img src="/assets/images/blog/author-1-1.jpg" alt="" />
                            </div>

                            <div className="author-one__content">
                                <h3>Joao Dinaldo Kzam</h3>
                                <p>João Kzam, #osenhordabusca, facilitador, palestrante, comunicador, jornalista digital,
                                conteudista, content maker, podcast maker da Balaio da Criação e uma das vozes do Minuto B do PodAí da Balaio.</p>
                            </div>

                        </div>

                        <div className="comment-form">
                            <h3 className="comment-form__title">Deixe um comentário</h3>
                            <form action="#" className="contact-one__form contact-form-validated"
                                noValidate="novalidate">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" name="name" placeholder="Nome" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="email" placeholder="E-mail" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="website" placeholder="Website" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="subject" placeholder="Asunto" />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea name="message" placeholder="Memssagen"></textarea>
                                        <button type="submit" className="thm-btn contact-one__form-btn">Publicar
                                            Comente
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sidebar">
                            <div className="sidebar-single sidebar__search">
                                <form action="#" className="sidebar__search-form">
                                    <input type="text" placeholder="Procure aqui" />
                                    <button type="submit"><i className="fa fa-search"></i></button>
                                </form>

                            </div>
                            <div className="sidebar-single sidebar__post">
                                <h3 className="sidebar__title">últimas postagens</h3>
                                <div className="sidebar__post-single">
                                    <img src="/assets/images/blog/lp-1-1.jpg" alt="" />
                                    <h3><a href="/blog-details">Como fazer propaganda se a sua empresa é pequena?</a>
                                    </h3>
                                </div>
                                <div className="sidebar__post-single">
                                    <img src="/assets/images/blog/lp-1-2.jpg" alt="" />
                                    <h3><a href="/blog-details">Empreendedorismo na área da saúde: entenda como ter sucesso!</a>
                                    </h3>
                                </div>
                                <div className="sidebar__post-single">
                                    <img src="/assets/images/blog/lp-1-3.jpg" alt="" />
                                    <h3><a href="/blog-details">Conheça os impactos da transformação digital para as empresas</a>
                                    </h3>
                                </div>
                            </div>
                            <div className="sidebar-single sidebar__cat">
                                <h3 className="sidebar__title">Categorias</h3>
                                <ul className="list-unstyled sidebar__cat-list">
                                    <li><a href="#">Negócio</a></li>
                                    <li><a href="#">Apresentações</a></li>
                                    <li><a href="#">Langepage</a></li>
                                    <li><a href="#">Marketing Digital</a></li>
                                    <li><a href="#">Nova Tecnologia</a></li>
                                    <li><a href="#">Video Maker</a></li>
                                </ul>
                            </div>
                            <div className="sidebar-single sidebar__tags">
                                <h3 className="sidebar__title">Tags</h3>
                                <div className="sidebar__tags-list">
                                    <a href="#">Negócio,</a>
                                    <a href="#">Agência,</a>
                                    <a href="#">Tecnologia,</a>
                                    <a href="#">website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BlogDetails;