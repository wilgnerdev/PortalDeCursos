class SiteFaq extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
            `
            <section class="faq-container">
                <div class="faq-banner-home">
                    <div class="container">
                        <h1 class="titulo-faq-home">Como podemos ajudar?</h1>
                        <p class="paragrafo-faq-home">Tire suas dúvidas sobre inscrições, cursos e certificações.</p>
                    </div>
                </div>

                <div class="container">
                    <h2 class="faq-home-titulo">Perguntas Frequentes</h2>

                    <div class="faq">
                        <div class="faq-question">
                            <h3 class="faq-question-titulo">O curso é gratuito?</h3>

                            <svg class="svg-faq" viewBox="0 0 42 25">
                                <path d="M3 3L21 21L39 3" stroke="currentColor" stroke-width="7" stroke-linecap="round">
                                </path>
                            </svg>

                        </div>
                        <div class="faq-answer">
                            <p class="faq-answer-paragrafo">
                                Sim! Todos os cursos oferecidos pela Fundação O Pão dos Pobres são completamente gratuitos
                                para os participantes que atendem aos requisitos de elegibilidade.
                            </p>
                        </div>
                    </div>

                    <div class="faq">
                        <div class="faq-question">
                            <h3 class="faq-question-titulo">Quais os requisitos para me inscrever?</h3>

                            <svg class="svg-faq" width="15" height="10" viewBox="0 0 42 25">
                                <path d="M3 3L21 21L39 3" stroke="currentColor" stroke-width="7" stroke-linecap="round">
                                </path>
                            </svg>

                        </div>
                        <div class="faq-answer">
                            <p class="faq-answer-paragrafo">
                                É importante o candidato estar regularmente matriculado e frequentando as aulas caso não
                                tenha concluído o Ensino Médio; possuir a documentação completa RG, CPF, Carteira de
                                Trabalho digital, PIS, NIS ou NIT, título de eleitor (se maior de 18 anos) e liberação do
                                quartel (homens maiores de 18 anos).
                            </p>
                        </div>
                    </div>

                    <div class="faq">
                        <div class="faq-question">
                            <h3 class="faq-question-titulo">O curso emite certificado?</h3>

                            <svg class="svg-faq" width="15" height="10" viewBox="0 0 42 25">
                                <path d="M3 3L21 21L39 3" stroke="currentColor" stroke-width="7" stroke-linecap="round">
                                </path>
                            </svg>

                        </div>
                        <div class="faq-answer">
                            <p class="faq-answer-paragrafo">
                                Sim! Ao concluir o curso com aproveitamento satisfatório e frequência mínima, você receberá
                                um certificado reconhecido pela Fundação O Pão dos Pobres, que pode ser utilizado em
                                processos seletivos e no mercado de trabalho.
                            </p>
                        </div>
                    </div>

                    <button class="btn faq"><a href="/pages/faq.html">Ver mais perguntas</a></button>

                </div>
            </section>
            `
    }
}

customElements.define('site-faq', SiteFaq)