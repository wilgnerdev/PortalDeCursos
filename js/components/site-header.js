class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
        <header>
            <div class="nav-social">
                <nav>
                    <a href="https://www.facebook.com/paodospobres" target="_blank" aria-label="Facebook"><i
                            class="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.linkedin.com/company/fundacao-pao-dos-pobres" target="_blank"
                        aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://www.youtube.com/channel/UCRcI7jAkBA8TSzFRFHqW1tQ" target="_blank"
                        aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
                    <a href="https://www.instagram.com/fundacaopaodospobres" target="_blank" aria-label="Instagram"><i
                            class="fa-brands fa-instagram"></i></a>
                </nav>
            </div>

            <nav class="navbar">
                <a class="logo" href="/"><img src="assets/img/logo-pao-dos-pobres.png" alt="Logo Fundação O Pão dos Pobres"></a>
                <ul class="nav-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#cursos">Cursos</a></li>
                    <li><a href="#faq">Faq</a></li>
                    <li><a href="#inscreva-se">Inscrever-se</a></li>
                    <!-- <li><a href="https://www.paodospobres.org.br/" target="_blank">Site oficial</a></li> -->
                </ul>
            </nav>
        </header>
        `
            ;
    }
}

customElements.define('site-header', SiteHeader);