class SiteModal extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
        `
        <div id="caixaAgradecimento" class="modal-fundo">
            <div class="modal-conteudo">
                <h2 class="titulo-modal-conteudo">Obrigado!</h2>
                <p class="paragrafo-modal-conteudo">Seus dados foram recebidos com sucesso.</p>
                <button id="fecharModal">Fechar</button>
            </div>
        </div>
        `
        ;
    }
}

customElements.define('site-modal', SiteModal)