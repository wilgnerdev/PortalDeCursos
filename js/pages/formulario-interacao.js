import {
    calcularIdade,
    validarCandidato
} from "./formulario-validacoes.js";


function mostrarErro(campo, mensagem) {
    const erro = document.getElementById(`erro-${campo}`);

    if (!erro) {
        console.error(`Elemento de erro não encontrado: erro-${campo}`);
        return;
    }

    erro.textContent = mensagem;
    erro.style.display = "block";

    erro.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


function limparErro(campo) {
    const erro = document.getElementById(`erro-${campo}`);

    if (!erro) {
        return;
    }

    erro.textContent = "";
    erro.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("formCadastro");
    const caixa = document.getElementById("caixaAgradecimento");
    const fecharModal = document.getElementById("fecharModal");

    const dataNascimento = document.getElementById("data-nascimento");
    const idadeCalculada = document.getElementById("idade-calculada");

    const escolaridade = document.getElementById("escolaridade");
    const frequenciaEscolar = document.getElementById("frequencia-escolar");

    const acolhimento = document.querySelectorAll('input[name="acolhimento"]');
     const campoAcolhimentoQual = document.getElementById("acolhimento-qual");
    const containerAcolhimento = campoAcolhimentoQual.closest(".campo-condicional");

    const deficiencia = document.querySelectorAll('input[name="deficiencia"]');
    const campoDeficienciaQual = document.getElementById("deficiencia-qual");
    const containerDeficiencia = campoDeficienciaQual.closest(".campo-condicional");

function atualizarCampoDeficiencia() {

    const opcaoSelecionada =
        document.querySelector(
            'input[name="deficiencia"]:checked'
        );

    const possuiDeficiencia =
        opcaoSelecionada?.value === "sim";

    containerDeficiencia.classList.toggle(
        "oculto",
        !possuiDeficiencia
    );

    campoDeficienciaQual.required =
        possuiDeficiencia;

    if (!possuiDeficiencia) {
        campoDeficienciaQual.value = "";
    }
}

deficiencia.forEach(opcao => {
    opcao.addEventListener(
        "change",
        atualizarCampoDeficiencia
    );
});

atualizarCampoDeficiencia();

function atualizarCampoAcolhimento() {

    const opcaoSelecionada =
        document.querySelector('input[name="acolhimento"]:checked');

    const acolhido =
        opcaoSelecionada?.value === "sim";

    containerAcolhimento.classList.toggle(
        "oculto",
        !acolhido
    );

    campoAcolhimentoQual.required = acolhido;

    if (!acolhido) {
        campoAcolhimentoQual.value = "";
    }
}

    acolhimento.forEach(opcao => {
    opcao.addEventListener(
        "change",
        atualizarCampoAcolhimento
    );
});

atualizarCampoAcolhimento();

    
function atualizarCampoFrequencia() {
    const containerFrequencia =
        document.getElementById("container-frequencia");

    const campoFrequencia =
        document.getElementById("frequencia-escolar");

    const escolaridadesQueEstudam = [
        "fund-7",
        "fund-8",
        "fund-9",
        "medio-1",
        "medio-2",
        "medio-3"
    ];

    const estuda = escolaridadesQueEstudam.includes(escolaridade.value);

    containerFrequencia.classList.toggle("oculto", !estuda);

    campoFrequencia.required = estuda;

    if (!estuda) {
        campoFrequencia.value = "";
    }
    
}

    escolaridade.addEventListener("change", atualizarCampoFrequencia);

    atualizarCampoFrequencia();


    // Calcula a idade
    dataNascimento.addEventListener("change", () => {

        limparErro("data-nascimento");

        if (!dataNascimento.value) {
            idadeCalculada.value = "";
            return;
        }

        const idade = calcularIdade(dataNascimento.value);

        idadeCalculada.value = idade;
    });


    // Limpa o erro de escolaridade quando ela for alterada
    escolaridade.addEventListener("change", () => {
        limparErro("escolaridade");
    });

    frequenciaEscolar.addEventListener("input", () => {
    limparErro("frequencia-escolar");
    });


    // Envio do formulário
    formulario.addEventListener("submit", (evento) => {

        evento.preventDefault();

        const cursoId = document.getElementById("select-cursos").value;

        const escolaridadeSelecionada = document.getElementById("escolaridade").value;

        const deficienciaSelecionada =
            document.querySelector(
                'input[name="deficiencia"]:checked'
        );

        const pcd = deficienciaSelecionada?.value === "sim";

        const idade = calcularIdade(dataNascimento.value);

        const valorTexto = frequenciaEscolar.value.trim();
 
        const frequencia = valorTexto === "" ? null : Number(valorTexto);


        const resultado = validarCandidato({
            cursoId,
            idade,
            escolaridade: escolaridadeSelecionada,
            pcd,
            frequencia
        });


        if (!resultado.valido) {

            if (
                resultado.motivo === "idade-minima" ||
                resultado.motivo === "idade-maxima"
            ) {

                mostrarErro(
                    "data-nascimento",
                    resultado.mensagem
                );

            }

            if (
                resultado.motivo === "escolaridade" ||
                resultado.motivo === "escolaridade-invalida"
            ) {

                mostrarErro(
                    "escolaridade",
                    resultado.mensagem
                );

            }

               if (resultado.motivo === "frequencia") {
                mostrarErro(
                    "frequencia-escolar",
                    resultado.mensagem
                );
            }

            return;
        }


        caixa.style.display = "block";

        formulario.reset();
        idadeCalculada.value = "";
    });


    fecharModal.addEventListener("click", () => {
        caixa.style.display = "none";
    });

});