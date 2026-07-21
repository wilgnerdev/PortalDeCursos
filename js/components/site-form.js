class SiteForm extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
        `<section class="formulario" id="inscreva-se">
            <form id="formCadastro" class="corpo-formulario">
            <h2 class="titulo__form">Faça sua inscrição</h2>
            <p class="form__paragrafo">Preencha os campos abaixo para se inscrever em nossos cursos</p>
                <fieldset class="fieldset__formulario">
                    <legend>Dados Pessoais</legend>
                    <label for="nome">Nome Completo</label>
                <input type="text" id="nome" placeholder="Digite seu nome completo" required>

                <label for="email">E-mail</label>
                <input type="email" id="email" placeholder="seu@email.com" required>

                <label for="telefone">Telefone</label>
                <input type="tel" id="telefone" placeholder="(51)99999-9999" required>

                <label for="cpf">CPF</label>
                <input type="text" id="cpf" placeholder="000.000.000-00" required>
                </fieldset>

                <fieldset class="fieldset__formulario">
                    <legend>Endereço</legend>
                    <label for="cep">CEP</label>
                <input type="text" id="cep" placeholder="00000-000" required>

                <div class="linha">
                    <div class="campo-largo">
                        <label for="logradouro">Rua</label>
                        <input type="text" id="logradouro">
                    </div>

                    <div class="campo-curto">
                        <label for="numero">Número</label>
                        <input type="text" id="numero">
                    </div>
                </div>

                <label for="bairro">Bairro</label>
                <input type="text" id="bairro">

                <div class="linha">
                    <div class="campo-largo">
                        <label for="cidade">Cidade</label>
                        <input type="text" id="cidade">
                    </div>

                    <div class="campo-curto">
                        <label for="uf">UF</label>
                        <input type="text" id="uf" maxlength="2">
                    </div>
                </div>
                </fieldset>

                <fieldset class="fieldset__formulario">
                    <legend>Curso de Interesse</legend>
                    <div class="linha">
                        <div class="campo-largo">
                            <label for="select-cursos">Selecione um curso</label>
                            <select id="select-cursos" required>
                            <option value="">Selecione um curso</option>
                            <option value="adm">Assistente Admnistrativo</option>
                            <option value="cabelo">Assistente de Cabeleireiro</option>
                            <option value="programacao">Auxiliar de Desenvolvimento Web (Programação)</option>
                            <option value="costura">Corte, Costura e Modelagem Sustentável</option>
                            <option value="desporto">Desporto</option>
                            <option value="elevadores">Eletromecânica de Elevadores</option>
                            <option value="gastro">Gastronomia</option>
                            <option value="mecanica">Mecânica Automotiva</option>
                            <option value="projetista">Projetista de Móveis</option>
                            <option value="refrigeracao">Refrigeração e Climatização</option>
                            <option value="ti">Suporte em T.I</option>
                            <option value="vendas">Vendas e Atendimento ao Cliente</option>
                            </select>
                        </div>

                        <div class="campo-curto periodo">
                            <label for="select-periodo">Período de Preferência</label>
                            <select id="select-periodo" required>
                                <option value="">Selecione</option>
                                <option value="manha">Manhã</option>
                                <option value="tarde">Tarde</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                <button type="submit" class="btn">Enviar inscrição</button>
        </form>
        </section>
        `
        ;
    }
}

customElements.define('site-form', SiteForm)