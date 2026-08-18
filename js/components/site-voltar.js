class SiteVoltar extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
        `
        <section class="voltar">
            <div class="voltar-body">
                <h3 class="voltar-titulo">Quer explorar mais cursos?</h3>
                <p class="btn btn-voltar"><a href="index.html#cursos">Volte ao Ínicio</a></p>
            </div>
        </section>
        `
    }
}
customElements.define('site-voltar', SiteVoltar)