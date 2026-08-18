class SiteBanner extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `<section class="banner-destaque">
                <div class="texto-banner-destaque">
                    <h1 class="banner-title">Aprendizagem Profissional e Cursos de Qualificação</h1>
                    <a class="btn banner" href="formulario.html">Inscreva-se gratuitamente</a>
                </div>
            </section>`
            ;
    }
}

customElements.define('site-banner', SiteBanner);