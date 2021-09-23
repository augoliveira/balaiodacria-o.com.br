import React, { Component } from 'react';
import Image from 'next/image'
import Img1 from '../public/assets/images/resources/srv-img6-1.jpg'
import Img2 from '../public/assets/images/resources/srv-img6-2.jpg'
import Img3 from '../public/assets/images/resources/srv-img6-3.jpg'
import Img4 from '../public/assets/images/resources/srv-img6-4.jpg'
import Img5 from '../public/assets/images/resources/srv-img6-5.jpg'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      startCounter: false
    }
  }

  onVisibilityChange = isVisible => {
    if (isVisible) {
      this.setState({ startCounter: true });
    }
  }

  render() {
    return (
      <div>
        <section>
          <div class="spacing remove-gap">
            <div class="container">
              <div class="srv-wrp6 remove-ext15">
                <div class="srv-bx6">
                  <div class="srv-thmb6">
                    <Image
                      src={Img1}
                      alt="srv-img6-1.jpg"
                    />
                  </div>
                  <div class="srv-inf6">
                    <span>SERVIÇO</span>
                    <h2 itemprop="headline">Identidade Visual e Corporativa</h2>
                    <p itemprop="description">
                      De forma inovadora, ousada e autêntica, nós criamos marcas
                      que expressam a identidade e objetivo da sua empresa.
                      Traduzimos visualmente o propósito do seu negócio com o
                      cuidado e a criatividade de uma equipe comprometida a
                      entregar o melhor design para sua marca.{" "}
                    </p>
                    <a class="brd-rd2" href="/solucoes" title="" itemprop="url"
                    >SAIBA MAIS</a
                    >
                  </div>
                </div>
                <div class="srv-bx6 rev">
                  <div class="srv-thmb6">
                    <Image
                      src={Img2}
                      alt="srv-img6-2.jpg"
                      itemprop="image"
                    />
                  </div>
                  <div class="srv-inf6">
                    <span>SERVIÇO</span>
                    <h2 itemprop="headline">Planejamento</h2>
                    <p itemprop="description">
                      O planejamento é o fundamento para o sucesso de qualquer
                      projeto, principalmente do seu negócio, produto e serviço.
                      Por isso, nossa tarefa é estudá-lo a fundo para comunicar da
                      maneira mais assertiva possível.
                    </p>
                    <a class="brd-rd2" href="/solucoes" title="" itemprop="url"
                    >SAIBA MAIS</a
                    >
                  </div>
                </div>
                <div class="srv-bx6">
                  <div class="srv-thmb6">
                    <Image
                      src={Img3}
                      alt="srv-img6-3.jpg"
                      itemprop="image"
                    />
                  </div>
                  <div class="srv-inf6">
                    <span>SERVIÇO</span>
                    <h2 itemprop="headline">Consultorias</h2>
                    <p itemprop="description">
                      Estudar a fundo o mercado e o seu negócio é o melhor caminho
                      para criar estratégias, propor novos desafios e aplicar
                      força, tempo e recursos naquilo que é fundamental para sua
                      empresa. Construímos em conjunto meios para aprimorar a
                      organização, criar métodos e caminhar rumo ao crescimento e
                      aos melhores resultados para sua marca.
                    </p>
                    <a class="brd-rd2" href="/solucoes" title="" itemprop="url"
                    >SAIBA MAIS</a
                    >
                  </div>
                </div>
                <div class="srv-bx6 rev">
                  <div class="srv-thmb6">
                    <Image
                      src={Img4}
                      alt="srv-img6-2.jpg"
                      itemprop="image"
                    />
                  </div>
                  <div class="srv-inf6">
                    <span>SERVIÇO</span>
                    <h2 itemprop="headline">
                      Produção audiovisual
                    </h2>
                    <p itemprop="description">
                      Desenvolvemos a construção visual e animação de vídeos
                      institucionais e comerciais para levar a sua marca ao maior
                      número de pessoas de forma interativa e versátil para
                      utilizar em sites, redes sociais e aplicativos de conversa.
                    </p>
                    <a class="brd-rd2" href="/solucoes" title="" itemprop="url"
                    >SAIBA MAIS</a
                    >
                  </div>

                </div>
                <div class="srv-bx6">
                  <div class="srv-thmb6">
                    <Image
                      src={Img5}
                      alt="srv-img6-3.jpg"
                      itemprop="image"
                    />
                  </div>
                  <div class="srv-inf6">
                    <span>SERVIÇO</span>
                    <h2 itemprop="headline">Presença Digital - Desenvolvimento Web</h2>
                    <p itemprop="description">
                    <h6 itemprop="headline">Desenvolvimento Web</h6>
                      Planejamos toda a arquitetura de sistemas que você precisa para sites, 
                      aplicativos, desenvolvimento web e oferecemos consultoria para gestão de processos e sistemas.</p>
                      <p itemprop="description">
                      <h6 itemprop="headline">Gerenciamento de redes sociais</h6>
                      O conteúdo é a parte central da comunicação com seu cliente, pois a medida que você entrega 
                      informação de qualidade esse conteúdo promove a aproximação e a interação do cliente com seu negócio. 
                      Ajudamos você a colocar sua empresa de forma estratégica no ambiente online.
                    </p>
                    <a class="brd-rd2" href="/solucoes" title="" itemprop="url"
                    >SAIBA MAIS</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}