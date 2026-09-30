import { cursos, escolaridades, regrasInscricao } from "../data/cursos.js";

export function calcularIdade(dataNascimento) {
    const [ano, mes, dia] = dataNascimento.split("-").map(Number);

    const hoje = new Date();
    const nascimento = new Date(ano, mes - 1, dia);

    let idade = hoje.getFullYear() - nascimento.getFullYear();

    const aniversarioAindaNaoChegou =
        hoje.getMonth() < nascimento.getMonth() ||
        (
            hoje.getMonth() === nascimento.getMonth() &&
            hoje.getDate() < nascimento.getDate()
        );

    if (aniversarioAindaNaoChegou) {
        idade--;
    }

    return idade;
}

export function validarCandidato({ cursoId, idade, escolaridade, pcd }) {
    const curso = cursos.find(curso => curso.id === cursoId);

    if (!curso) {
        return {
            valido: false,
            motivo: "curso",
            mensagem: "Curso não encontrado."
        };
    }

    const requisitos = curso.requisitos;

    // Idade mínima
    if (idade < requisitos.idadeMinima) {
        return {
            valido: false,
            motivo: "idade-minima",
            mensagem: `A idade mínima para o curso é ${requisitos.idadeMinima} anos.`
        };
    }

    // Idade máxima
    // PCD não possui limite máximo de idade
    if (
        !pcd &&
        regrasInscricao.pcdSemLimiteIdade &&
        idade > requisitos.idadeMaxima
    ) {
        return {
            valido: false,
            motivo: "idade-maxima",
            mensagem: `A idade máxima para o curso é ${requisitos.idadeMaxima} anos.`
        };
    }

    // Escolaridade existe no nosso mapa?
    if (!(escolaridade in escolaridades)) {
        return {
            valido: false,
            motivo: "escolaridade-invalida",
            mensagem: "Escolaridade não reconhecida."
        };
    }

    // Escolaridade mínima
    if (
        escolaridades[escolaridade] <
        escolaridades[requisitos.escolaridadeMinima]
    ) {
        return {
            valido: false,
            motivo: "escolaridade",
            mensagem: "A escolaridade informada não atende ao requisito mínimo do curso."
        };
    }

    return {
        valido: true,
        motivo: null,
        mensagem: "Candidato atende aos requisitos do curso."
    };
}