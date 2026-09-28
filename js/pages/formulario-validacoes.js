import { cursos, escolaridades, regrasInscricao } from "../data/cursos.js";

export function validarCandidato({ cursoId, idade, escolaridade, pcd }) {
    const curso = cursos.find(curso => curso.id === cursoId);

    // Curso não encontrado
    if (!curso) {
        return {
            valido: false,
            motivo: "curso",
            mensagem: "Curso não encontrado."
        };
    }

    const requisitos = curso.requisitos;

    // Verifica idade mínima
    if (idade < requisitos.idadeMinima) {
        return {
            valido: false,
            motivo: "idade-minima",
            mensagem: `A idade mínima para o curso é ${requisitos.idadeMinima} anos.`
        };
    }

    // Verifica idade máxima
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

    // Verifica se a escolaridade informada existe
    if (!(escolaridade in escolaridades)) {
        return {
            valido: false,
            motivo: "escolaridade-invalida",
            mensagem: "Escolaridade não reconhecida."
        };
    }

    // Verifica se a escolaridade atende ao requisito do curso
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
console.log(validarCandidato({
    cursoId: "refrigeracao-climatizacao",
    idade: '17',
    escolaridade: "medio-2",
    pcd: true
})
)