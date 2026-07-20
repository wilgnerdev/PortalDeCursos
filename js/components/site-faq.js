class SiteFaq extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
        `
            <section class="faq" id="faq">
                <h2 class="faq-titulo">Perguntas Frequentes (FAQ)</h2>
                <details>
                    <summary>O curso é gratuito?</summary>
                    <p class="paragrafo-faq">Sim! Todos os cursos oferecidos pela Fundação O Pão dos Pobres são completamente gratuitos para os participantes que atendem aos requisitos de elegibilidade.</p>
                </details>

                <details>
                    <summary>Quais os requisitos para me inscrever?</summary>
                    <p class="paragrafo-faq">É importante o candidato estar regularmente matriculado e frequentando as aulas caso não tenha concluído o Ensino Médio;  possuir a documentação completa RG, CPF, Carteira de Trabalho digital, PIS, NIS ou NIT, título de eleitor (se maior de 18 anos) e liberação do quartel (homens maiores de 18 anos).</p>
                </details>

                <details>
                    <summary>O curso emite certificado?</summary>
                    <p class="paragrafo-faq">Sim! Ao concluir o curso com aproveitamento satisfatório e frequência mínima, você receberá um certificado reconhecido pela Fundação O Pão dos Pobres, que pode ser utilizado em processos seletivos e no mercado de trabalho.</p>
                </details>
            </section>
        `
        ;
    }
}

customElements.define('site-faq', SiteFaq)