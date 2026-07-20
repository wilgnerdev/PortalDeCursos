class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `<footer class="footer">
                <div class="footer-conteudo">
                <div class="footer-col">
                    <img src="assets/img/logo-big.png" alt="Logo Fundação O Pão dos Pobres" class="footer-logo">
                    <p>Há mais de 150 anos formando profissionais em Porto Alegre.</p>
                </div>

                <div class="footer-col">
                    <h4 class="titulo-footer-col">Links Rápidos</h4>
                    <ul>
                        <li><a href="#cursos">Cursos</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#inscreva-se">Inscreva-se</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4 class="titulo-footer-col">Redes Sociais</h4>
                    <div class="footer-social">
                        <a href="https://www.facebook.com/paodospobres" target="_blank" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.linkedin.com/company/fundacao-pao-dos-pobres" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://www.instagram.com/fundacaopaodospobres" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
                </div>

                <div class="footer-copy">
                    <p>&copy; 2026 Fundação O Pão dos Pobres. Todos os direitos reservados.</p>
                </div>
            </footer>`
            ;
    }
}

customElements.define('site-footer', SiteFooter);