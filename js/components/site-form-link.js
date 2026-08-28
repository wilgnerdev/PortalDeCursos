class SiteFormLink extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
        `
        <section class="link-formulario">
            <div class="link-formulario-body">
                <h2 class="link-formulario-titulo">Pronto para transformar seu futuro?</h2>
                <p class="link-formulario-paragrafo">Inscreva-se no botão abaixo e dê o primeiro passo para uma carreira de sucesso.</p>
                <a href="formulario.html" class="btn-link-formulario btn">Inscreva-se</a>
            </div>
        </section>
        `
        ;
    }
}

customElements.define('site-form-link', SiteFormLink);