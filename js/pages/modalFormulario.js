const formulario = document.getElementById('formCadastro');
const caixa = document.getElementById('caixaAgradecimento');
const fecharModal = document.getElementById('fecharModal');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    caixa.style.display = 'block';
    formulario.reset();
});

fecharModal.addEventListener('click', () => {
    caixa.style.display = 'none';

});