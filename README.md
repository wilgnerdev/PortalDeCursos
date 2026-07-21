# Portal de Cursos — Fundação O Pão dos Pobres

Portal público para divulgação de cursos profissionalizantes gratuitos da **Fundação O Pão dos Pobres**, com formulário de inscrição online. Projeto desenvolvido como atividade prática da trilha **Dev Full Stack Jr. (+praTI / Codifica)** e, em paralelo, como base do meu Trabalho de Conclusão de Curso (TCC).

> 🎓 Cada entrega do +praTI é também um marco real do TCC — o roadmap completo está descrito na seção [Roadmap do Projeto](#-roadmap-do-projeto).

---

## Sobre a Fundação

A Fundação O Pão dos Pobres oferece cursos profissionalizantes gratuitos para jovens de Porto Alegre. Este portal tem como objetivo digitalizar e organizar o processo de divulgação dos cursos e de inscrição dos candidatos.

---

## ✅ Entregas desta atividade (Atividade 4-5)

- [x] Header com slogan da instituição e botão de call-to-action (CTA)
- [x] Seção "Sobre" e "Contato" com formulário de inscrição
- [x] Interação em JavaScript: mensagem de agradecimento após envio do formulário
- [x] Integração com a API **ViaCEP** para autopreenchimento de endereço
- [x] Paleta de cores e tipografia definidas
- [x] Repositório com branches `main` e `develop`, com histórico de commits granular

---

## 🎨 Identidade Visual

| Elemento | Definição |
|---|---|
| Tipografia (títulos) | [Outfit](https://fonts.google.com/specimen/Outfit) |
| Tipografia (corpo/formulários) | [Inter](https://fonts.google.com/specimen/Inter) |
| Ícones | [Tabler Icons](https://tabler.io/icons) |

---

## 🛠️ Tecnologias utilizadas

- **HTML5** semântico
- **CSS3** (Flexbox, Grid, Media Queries)
- **JavaScript (ES Modules)** — sem bundler, usando `import`/`export` nativos do navegador
- **ViaCEP API** — consulta de endereço por CEP

---

## 📁 Estrutura de pastas

```
/
├── index.html
├── paginas/
├── css/
│   └── style.css
├── js/
│   ├── cadastro.js       # Lógica do formulário e mensagem de sucesso
│   └── viacep.js         # Integração com a API ViaCEP
└── assets/
```

> ⚠️ Como o projeto usa ES Modules nativos, todos os imports entre arquivos `.js` precisam manter a extensão `.js` explícita.

---

## Como executar localmente

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Como o projeto usa ES Modules, é necessário servir os arquivos via um servidor local (abrir o `index.html` direto no navegador não funciona por causa do CORS de módulos). Sugestões:
   - Extensão **Live Server** (VS Code), ou
   - `npx serve .`
3. Acesse o endereço indicado pelo servidor local (ex: `http://localhost:5500`).

---

## Fluxo de Git

Este projeto segue um fluxo com branches dedicadas, integradas manualmente à `main` commit a commit, para preservar o histórico granular exigido pela atividade:

- `main` — versão estável
- `develop` — integração das features

---

## 🗺️ Roadmap do Projeto

| Fase | Descrição | Status |
|---|---|---|
| 0 | Site público estático (HTML/CSS/JS puro) | 🔵 Em andamento |
| 1 | Validações e interações em JS | ⚪ Planejado |
| 2 | Migração para React | ⚪ Planejado |
| 3 | Backend com Java + Spring Boot + PostgreSQL | ⚪ Planejado |
| 4 | Painel administrativo com autenticação JWT | ⚪ Planejado |
| 5 | Deploy, testes automatizados e chatbot (opcional) | ⚪ Planejado |

**Entregas:**
- 📄 Site público — entrega do TCC (outubro/2026)
- 💻 Aplicação full stack completa — projeto final +praTI (novembro/2026)

---

## Autor

Desenvolvido por **Will** — aluno da trilha Dev Full Stack Jr. (+praTI / Codifica), como parte do TCC para a Fundação O Pão dos Pobres.