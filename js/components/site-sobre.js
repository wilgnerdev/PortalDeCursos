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

        <section class="info-section">
            <div class="info-grid">

                <div class="info-card">
                    <i class="fa-solid fa-bullseye"></i>
                    <h3 class="info-card-titulo">Objetivo</h3>
                    <p>Proporcionar a formação integral de adolescentes e jovens, visando sua inserção no mundo do trabalho, como cidadãos éticos e profissionais competentes.</p>
                </div>

                <div class="info-card">
                    <i class="fa-solid fa-user-group"></i>
                    <h3 class="info-card-titulo">Público-Alvo</h3>
                    <p>Adolescentes e jovens entre 14 e 24 anos (sem limite de idade para pessoas com deficiência), de famílias em situação de vulnerabilidade ou risco social.</p>
                </div>
                
            </div>
        </section>
        `
        ;
    }
}

customElements.define('site-sobre', SiteSobre)