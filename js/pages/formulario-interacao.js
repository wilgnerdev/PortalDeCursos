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

    const estuda =
        escolaridadesQueEstudam.includes(escolaridade.value);

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


    // Envio do formulário
    formulario.addEventListener("submit", (evento) => {

        evento.preventDefault();

        const cursoId =
            document.getElementById("select-cursos").value;

        const escolaridadeSelecionada =
            document.getElementById("escolaridade").value;

        const deficienciaSelecionada =
            document.querySelector(
                'input[name="deficiencia"]:checked'
            );

        const pcd =
            deficienciaSelecionada?.value === "sim";

        const idade =
            calcularIdade(dataNascimento.value);


        const resultado = validarCandidato({
            cursoId,
            idade,
            escolaridade: escolaridadeSelecionada,
            pcd
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