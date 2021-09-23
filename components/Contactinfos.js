import React from "react";

const ContactInfos = () => {
  
  return (
    <section>
    <div class="spacing bottom-spac100">
    <div class="container">
        <div class="cnt-info-wrp remove-ext3">
            <div class="row">
                        <div class="col-md-4 col-sm-6 col-lg-4">
                            <div class="cnt-inf-bx brd-rd10">
                                <i class="fa fa-phone"></i>
                                <strong>Central de informação</strong>
                                <span>Telefone: (61) 3046.8284</span>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-lg-4">
                            <div class="cnt-inf-bx brd-rd10">
                                <i class="fa fa-map-marker"></i>
                                <strong>Endereço</strong>
                                <span>SCN, Quadra 1, Bloco G, Sala 911,
                                    Ed. Rossi Esplanada Business, Asa Norte, Brasília/DF
                                    </span>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-lg-4">
                            <div class="cnt-inf-bx brd-rd10">
                                <i class="fa fa-envelope-o"></i>
                                <strong>E-mail</strong>
                                <a href="mailto:atendimento@balaiodacriacao.com.br" title="" itemprop="url">atendimento@balaiodacriacao.com.br
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </section>
  );
};

export default ContactInfos;
