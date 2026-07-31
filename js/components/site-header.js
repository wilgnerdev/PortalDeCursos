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
                <a class="logo" href="#"><img src="assets/images/logo-pao-dos-pobres.png" alt="Logo Fundação O Pão dos Pobres"></a>
                <button class="mobile-menu" aria-label="Abrir menu" aria-expanded="false">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
                </button>
                <ul class="nav-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#cursos">Cursos</a></li>
                    <li><a href="#faq">Faq</a></li>
                    <li><a class="btn list" href="#inscreva-se">Inscrever-se</a></li>
                    <!-- <li><a href="https://www.paodospobres.org.br/" target="_blank">Site oficial</a></li> -->
                </ul>
            </nav>
        </header>
        `
            ;

        class MobileNavbar {
            constructor(mobileMenu, navList, navLinks) {
                this.mobileMenu = document.querySelector(mobileMenu);
                this.navList = document.querySelector(navList);
                this.navLinks = document.querySelectorAll(navLinks);
                this.activeClass = "active";
                this.mobileQuery = window.matchMedia('(max-width: 999px)');

                this.handleClick = this.handleClick.bind(this);
                this.syncInert = this.syncInert.bind(this);
            }

            animateLinks() {
                this.navLinks.forEach((link, index) => {
                    link.style.animation
                        ? (link.style.animation = "")
                        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
                });
            }

            // Decide se o menu deve estar bloqueado (inert) com base
            // no breakpoint atual E no estado aberto/fechado.
            syncInert() {
                const isMobile = this.mobileQuery.matches;
                const isOpen = this.navList.classList.contains(this.activeClass);

                // Só bloqueia em mobile E com o menu fechado.
                // Em desktop, ou com o menu aberto, nunca fica inert.
                this.navList.toggleAttribute('inert', isMobile && !isOpen);
            }

            handleClick() {
            const isOpen = this.navList.classList.toggle(this.activeClass);
            this.mobileMenu.classList.toggle(this.activeClass);
            this.mobileMenu.setAttribute('aria-expanded', isOpen);
            this.syncInert();
            this.animateLinks();
            }

            addClickEvent() {
                this.mobileMenu.addEventListener("click", this.handleClick);
            }

            init() {
                if (this.mobileMenu) {
                    this.addClickEvent();
                }
                // Estado inicial correto ao carregar a página.
                this.syncInert();
                // Recalcula sempre que a tela cruzar o breakpoint
                // (ex: usuário gira o celular, ou redimensiona a janela).
                this.mobileQuery.addEventListener('change', this.syncInert);
                return this;
            }
        }

        const mobileNavbar = new MobileNavbar(
            ".mobile-menu",
            ".nav-list",
            ".nav-list li",
        );
        mobileNavbar.init();
    }
}

customElements.define('site-header', SiteHeader);