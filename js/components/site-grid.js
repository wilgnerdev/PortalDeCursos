const cursos = [
    {
        id: "assistente-administrativo",
        titulo: "Assistente Administrativo",
        img: "foto-adm.webp",
        desc: "Gestão de documentos, atendimento e rotinas administrativas empresariais."
    },
    {
        id: "cabeleireiro",
        titulo: "Assistente de Cabeleireiro",
        img: "cabeleireiro-aluno.jpg",
        desc: "Técnicas de corte, coloração, tratamentos capilares e atendimento em salões."
    },
    {
        id: "auxiliar-dev-web",
        titulo: "Auxiliar de Desenvolvimento Web (Programação)",
        img: "prog.webp",
        desc: "Criação e arquitetura de softwares e sites modernos."
    },
    {
        id: "corte-costura-modelagem",
        titulo: "Corte, Costura e Modelagem Sustentável",
        img: "costura_aluno.jpg",
        desc: "Confecção de roupas com foco em moda sustentável e técnicas de modelagem."
    },
    {
        id: "desporto",
        titulo: "Desporto",
        img: "desporto.jpg",
        desc: "Formação em educação física, esportes e atividades recreativas."
    },
    {
        id: "eletromecanica-elevadores",
        titulo: "Eletromecânica de Elevadores",
        img: "elevators.jpg",
        desc: "Manutenção, operação e segurança de sistemas de elevadores."
    },
    {
        id: "gastronomia",
        titulo: "Gastronomia",
        img: "gastronomia_pao.jpeg",
        desc: "Técnicas culinárias profissionais e preparação de alimentos."
    },
    {
        id: "projetista-moveis",
        titulo: "Projetista de Móveis",
        img: "projetista.jpg",
        desc: "Planejamento e execução de projetos de móveis e marcenaria."
    },
    {
        id: "refrigeracao-climatizacao",
        titulo: "Refrigeração e Climatização",
        img: "refrigeracao.jpg",
        desc: "Instalação e manutenção de sistemas de ar condicionado e refrigeração."
    },
    {
        id: "suporte-ti",
        titulo: "Suporte em T.I.",
        img: "aprendizagem-profissional-suporte-ti.webp",
        desc: "Manutenção, reparo e diagnóstico de computadores e instalação de sistemas operacionais."
    },
    {
        id: "vendas-atendimento",
        titulo: "Vendas e Atendimento ao Cliente",
        img: "vendas.jpg",
        desc: "Técnicas de vendas, atendimento ao cliente e negociação comercial."
    },
    {
        id: "mecanica-automotiva",
        titulo: "Mecânica Automotiva",
        img: "aprendizagem-profissional-mecanica.webp",
        desc: "Manutenção, reparo e diagnóstico de veículos automotores."
    }
];

class SiteGrid extends HTMLElement {
    connectedCallback() {
        const cards = cursos.map(curso => `
             <div class="card-curso">
                <div class="top-card">
                    <img src="assets/images/${curso.img}" loading="lazy" alt="Foto do curso de ${curso.titulo}">
                    <span class="card-badge">Aprendizagem</span>
                </div>
                <div class="card-conteudo">
                    <h3 class="titulo-card-conteudo">${curso.titulo}</h3>
                    <p class="paragrafo-card-conteudo">${curso.desc}</p>
                   <a href="curso-detalhes.html?curso=${curso.id}" class="ver-detalhes">Ver Detalhes
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M9 5l7 7-7 7"></path></svg>
                   </a>
                </div>
            </div>
            `).join('');

            this.innerHTML = `
            <section class="curso-section">
                <h2 class="curso-titulo" id="cursos">Cursos disponíveis</h2>
                <p class="curso-paragrafo">Escolha uma área e conheça os detalhes de cada curso.</p>
                <div class="cursos-grid">${cards}</div>
            </section>
        `;
    }
}

customElements.define('site-grid', SiteGrid);