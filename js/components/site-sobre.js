class SiteSobre extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
        <section class="sobre">
            <div class="card-sobre">
                <h2 class="sobre-titulo">Sobre a Fundação</h2>
                <p class="texto-sobre">Há mais de 150 anos, a Fundação O Pão dos Pobres atua na educação e na
                    assistência social em Porto Alegre, oferecendo formação profissional gratuita para jovens e adultos.
                </p>
            </div>

            <div class="box-card-destaque">
                <span class="card-destaque">
                <span>150+</span>
                <span>Anos de História</span>
            </span>

            <span class="card-destaque">
                <span>Cursos Profissionalizantes</span>
                <span>Gratuitos</span>
            </span>
            </div>
        </section>
        `
        ;
    }
}

customElements.define('site-sobre', SiteSobre)