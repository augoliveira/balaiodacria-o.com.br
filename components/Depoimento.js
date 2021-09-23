import React,{ Component } from 'react';

export default class Pricing extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            month: true,
            year: false
        }
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(){
        const month = this.state.month;
        const year = this.state.year;

        if(month){
            this.setState({year: true, month: false})
        }
        if(year){
            this.setState({year: false, month: true})
        }


    }

    render(){
        return (

            <section>
            <div class="spacing top-spac100 bottom-spac155">
              <div class="container">
                <div class="testi-spnsr">
                  <div class="row">
                    <div class="col-md-6 col-sm-12 col-lg-6">
                      <div class="testi-car owl-carousel">
                        <div class="testi-bx">
                          <img
                            class="brd-rd50"
                            src="assets/images/resources/testi-img1-1.jpg"
                            alt="testi-img1-1.jpg"
                            itemprop="image"
                          />
                          <h6 itemprop="headline">
                            Fernanda Medeiros, <br />Superintendente de negócios
                            SLAM
                          </h6>
                          <p itemprop="description">
                            Nossa parceria começou com a comunicação de um evento e
                            hoje eles são nossa agência full. São incríveis, sempre
                            disponíveis e em todos os momentos que precisamos o
                            retorno é muito rápido. A balaio cuida da nossa
                            comunicação para que possamos cuidar da saúde dos nossos
                            clientes
                          </p>
                        </div>
                        <div class="testi-bx">
                          <img
                            class="brd-rd50"
                            src="assets/images/resources/testi-img1-2.jpg"
                            alt="testi-img1-2.jpg"
                            itemprop="image"
                          />
                          <h6 itemprop="headline">
                            Rene Mioto,<br />
                            Proprietário BOAZ ORGÂNICOS
                          </h6>
                          <p itemprop="description">
                            Foi uma satisfação imensa receber os serviços da Balaio.
                            A paciência e persistência que a equipe demonstrou na
                            criação de nossa marca fez toda a diferença.
                          </p>
                        </div>
                        <div class="testi-bx">
                          <img
                            class="brd-rd50"
                            src="assets/images/resources/testi-img1-3.jpg"
                            alt="testi-img1-2.jpg"
                            itemprop="image"
                          />
                          <h6 itemprop="headline">
                            Thiago Emerick, <br />
                            Proprietário STB Informática.
                          </h6>
                          <p itemprop="description">
                            Nós da STB tivemos nosso horizonte digital expandido
                            depois do primeiro contato com a Balaio. O site foi se
                            moldando além das nossas expectativas, isso graças a
                            disposição da equipe, que sempre nos orientou com uma
                            linguagem acessível e com muita paciência.
                          </p>
                        </div>
                      </div>
                      
                    </div>
                    <div class="col-md-6 col-sm-12 col-lg-6">
                      <div class="spnsr-car text-center owl-carousel">
                        <div class="spnsr-bx">
                          <a href="#" title="" itemprop="url"
                            ><img
                              src="assets/images/resources/spnsr1.png"
                              alt="spnsr1.png"
                              itemprop="image"
                          /></a>
                        </div>
                        <div class="spnsr-bx">
                          <a href="#" title="" itemprop="url"
                            ><img
                              src="assets/images/resources/spnsr2-1.png"
                              alt="spnsr2.png"
                              itemprop="image"
                          /></a>
                        </div>
                        <div class="spnsr-bx">
                          <a href="#" title="" itemprop="url"
                            ><img
                              src="assets/images/resources/spnsr2-3.png"
                              alt="spnsr3.png"
                              itemprop="image"
                          /></a>
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
}