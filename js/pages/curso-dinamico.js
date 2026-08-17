// js/pages/curso-dinamico.js
// Lê o parâmetro ?curso= da URL, busca o curso em cursos.js
// e injeta os dados no template estático de curso-detalhes.html

import { getCursoPorId, notaPcD } from "../data/cursos.js";

function montarPaginaCurso() {
    const params = new URLSearchParams(window.location.search);
    const cursoId = params.get("curso");
    const curso = getCursoPorId(cursoId);

    if (!curso) {
        exibirCursoNaoEncontrado();
        return;
    }

    preencherTextos(curso);
    preencherBanner(curso);
    preencherHabilidades(curso.habilidades);
    preencherFicha(curso);
}

function preencherTextos(curso) {
    document.title = `${curso.titulo} - Pão dos Pobres`;
    document.getElementById("curso-titulo").textContent = curso.titulo;
    document.getElementById("curso-resumo").textContent = curso.resumoBanner;
    document.getElementById("curso-sobre").textContent = curso.sobre;
    document.getElementById("curso-sidebar-titulo").textContent = curso.titulo;
}

function preencherBanner(curso) {
    const banner = document.getElementById("curso-banner");
    if (curso.imagemBanner) {
        banner.style.setProperty(
            "--curso-imagem-banner",
            `url('../../assets/images/${curso.imagemBanner}')`
        );
    }
}

function preencherHabilidades(habilidades) {
    const container = document.getElementById("curso-skills");
    container.innerHTML = "";

    if (!habilidades || habilidades.length === 0) {
        const aviso = document.createElement("p");
        aviso.className = "secao-texto";
        aviso.textContent = "Conteúdo programático em atualização.";
        container.appendChild(aviso);
        return;
    }

    habilidades.forEach((habilidade) => {
        container.appendChild(criarLinhaHabilidade(habilidade));
    });
}

function criarLinhaHabilidade(habilidade) {
    const row = document.createElement("div");
    row.className = "skill-row";

    const icone = document.createElement("div");
    icone.className = "skill-icone";
    const i = document.createElement("i");
    i.className = `ti ti-${habilidade.icone}`;
    icone.appendChild(i);

    const body = document.createElement("div");
    body.className = "skill-body";

    const titulo = document.createElement("p");
    titulo.className = "skill-titulo";
    titulo.textContent = habilidade.titulo;

    const sub = document.createElement("p");
    sub.className = "skill-sub";
    sub.textContent = habilidade.descricao;

    body.append(titulo, sub);
    row.append(icone, body);
    return row;
}

function preencherFicha(curso) {
    const { fichaTecnica, turnos } = curso;

    document.getElementById("curso-carga-horaria").textContent = fichaTecnica.cargaHoraria;
    document.getElementById("curso-modalidade").textContent = fichaTecnica.modalidade;
    document.getElementById("curso-idade").textContent = fichaTecnica.idade;
    document.getElementById("curso-escolaridade").textContent = fichaTecnica.escolaridadeMinima;
    document.getElementById("curso-nota-pcd").textContent = `*${notaPcD}`;

    const textoTurnos = turnos
        .map((t) => (t.observacao ? `${t.turno} (${t.observacao})` : t.turno))
        .join(" · ");
    document.getElementById("curso-turnos").textContent = textoTurnos;
}

function exibirCursoNaoEncontrado() {
    const main = document.querySelector(".curso-detalhes-main");
    const banner = document.getElementById("curso-banner");
    const formulario = document.querySelector("site-form");

    if (banner) banner.style.display = "none";
    if (formulario) formulario.style.display = "none";

    main.innerHTML = `
        <div class="secao-curso" style="grid-column: 1 / -1; text-align: center;">
            <h2 class="secao-titulo">Curso não encontrado</h2>
            <p class="secao-texto" style="max-width: 100%">
                O link acessado não corresponde a nenhum curso disponível.
                Volte para a <a href="index.html">página inicial</a> e escolha um curso na lista.
            </p>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", montarPaginaCurso);