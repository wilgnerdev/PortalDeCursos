// js/data/cursos.js
// Fonte única da verdade para os dados de cada curso.
// Conteúdo base: formulário oficial de inscrição (Google Forms) + descrições/imagens
// já em uso no site-grid.js (consolidadas aqui em 17/08/2026).
// Campo "habilidades" dos cursos além de suporte-ti é RASCUNHO — revisar quando possível.

// Nota geral válida para TODOS os cursos (não duplicar por curso)
export const notaPcD = "Pessoas com deficiência são bem-vindas e não há limite de idade.";

export const cursos = [
  {
    id: "suporte-ti",
    titulo: "Suporte em T.I.",
    resumoBanner: "Montagem, manutenção de hardware e software, e administração de redes",
    imagemBanner: "aprendizagem-profissional-suporte-ti.webp",
    sobre: "Capacita para montagem e manutenção de hardware e software, instalação e atualização de sistemas operacionais e equipamentos.",
    habilidades: [
      { icone: "device-desktop", titulo: "Montagem e manutenção de computadores", descricao: "Da troca de peças ao diagnóstico de falhas de hardware." },
      { icone: "download", titulo: "Instalação de sistemas operacionais", descricao: "Instalação, configuração e atualização de softwares." },
      { icone: "network", titulo: "Configuração de redes básicas", descricao: "Cabeamento, roteadores e conexão de dispositivos em rede." },
      { icone: "headset", titulo: "Suporte técnico ao usuário", descricao: "Atendimento, escuta do problema e resolução guiada." },
      { icone: "shield-lock", titulo: "Segurança da informação: noções básicas", descricao: "Boas práticas para proteger dados e equipamentos." }
    ],
    fichaTecnica: {
      cargaHoraria: "1 ano",
      modalidade: "Presencial",
      idade: "14 a 22 anos",
      escolaridadeMinima: "8º ano do Ensino Fundamental",
      exigeVulnerabilidadeSocial: false
    },
    turnos: [
      { turno: "Manhã", observacao: "Início imediato" },
      { turno: "Tarde", observacao: "Cadastro reserva" }
    ]
  },

  {
    id: "mecanica-automotiva",
    titulo: "Mecânica Automotiva",
    resumoBanner: "Manutenção, reparo e diagnóstico de veículos automotores.",
    imagemBanner: "aprendizagem-profissional-mecanica.webp",
    sobre: "O jovem aprende a realizar diagnósticos, manutenção preventiva (revisão) e corretiva (reparo) em veículos automotores. Jovens do curso irão realizar prática na empresa.",
    habilidades: [
      { icone: "tool", titulo: "Diagnóstico de falhas veiculares", descricao: "Identificação de problemas mecânicos e elétricos em veículos." },
      { icone: "settings", titulo: "Manutenção preventiva", descricao: "Revisões periódicas para evitar falhas futuras." },
      { icone: "engine", titulo: "Manutenção corretiva", descricao: "Reparo de componentes mecânicos apresentando defeito." },
      { icone: "briefcase", titulo: "Prática em empresa parceira", descricao: "Vivência real de oficina durante o curso." }
    ],
    fichaTecnica: {
      cargaHoraria: "1 ano",
      modalidade: "Presencial",
      idade: "18 a 22 anos",
      escolaridadeMinima: "8º ano do Ensino Fundamental",
      exigeVulnerabilidadeSocial: false
    },
    turnos: [
      { turno: "Manhã", observacao: "" },
      { turno: "Tarde", observacao: "" }
    ]
  },

  {
    id: "corte-costura-modelagem",
    titulo: "Corte, Costura e Modelagem Sustentável",
    resumoBanner: "Confecção de roupas com foco em moda sustentável e técnicas de modelagem.",
    imagemBanner: "costura_aluno.jpg",
    sobre: "Oferece formação profissional com conhecimentos e habilidades básicas e específicas ao exercício da função. Ao final do curso, os jovens deverão apresentar competências para organizar o trabalho em etapas, prever recursos, distribuir o tempo, tomar decisões, localizar e selecionar informações, atender procedimentos de segurança e legislação específica, aplicar princípios de preservação ambiental e Gestão pela Qualidade, e trabalhar eficazmente com outras pessoas.",
    habilidades: [
      { icone: "scissors", titulo: "Técnicas de corte e costura", descricao: "Fundamentos práticos do ofício, do tecido à peça pronta." },
      { icone: "ruler-2", titulo: "Modelagem de peças", descricao: "Construção de moldes e ajuste de medidas." },
      { icone: "recycle", titulo: "Moda sustentável", descricao: "Reaproveitamento de materiais e consciência ambiental na produção." },
      { icone: "clipboard-list", titulo: "Organização do trabalho", descricao: "Planejamento de etapas, recursos e prazos de produção." }
    ],
    fichaTecnica: {
      cargaHoraria: "1 ano",
      modalidade: "Presencial",
      idade: "15 a 22 anos",
      escolaridadeMinima: "7º ano do Ensino Fundamental",
      exigeVulnerabilidadeSocial: true
    },
    turnos: [
      { turno: "Manhã", observacao: "" },
      { turno: "Tarde", observacao: "" }
    ]
  },

  {
    id: "projetista-moveis",
    titulo: "Projetista de Móveis",
    resumoBanner: "Planejamento e execução de projetos de móveis e marcenaria.",
    imagemBanner: "projetista.jpg",
    sobre: "Ao final do curso o aprendiz adquire competências compatíveis com o ofício de Auxiliar de Marcenaria e com as necessidades das empresas, promovendo sua inserção no mercado de trabalho e na sociedade. Também terá noções de como projetar móveis.",
    habilidades: [
      { icone: "ruler-2", titulo: "Fundamentos de marcenaria", descricao: "Técnicas básicas do ofício de Auxiliar de Marcenaria." },
      { icone: "armchair", titulo: "Noções de projeto de móveis", descricao: "Introdução ao desenho e planejamento de peças de mobiliário." },
      { icone: "tool", titulo: "Uso de ferramentas e equipamentos", descricao: "Manuseio seguro de instrumentos de marcenaria." },
      { icone: "briefcase", titulo: "Preparação para o mercado de trabalho", descricao: "Competências alinhadas às necessidades reais das empresas do setor." }
    ],
    fichaTecnica: {
      cargaHoraria: "1 ano",
      modalidade: "Presencial",
      idade: "16 a 22 anos",
      escolaridadeMinima: "1º ano do Ensino Médio",
      exigeVulnerabilidadeSocial: true
    },
    turnos: [
      { turno: "Manhã", observacao: "" },
      { turno: "Tarde", observacao: "" }
    ]
  },

  {
    id: "eletromecanica-elevadores",
    titulo: "Eletromecânica de Elevadores",
    resumoBanner: "Manutenção, operação e segurança de sistemas de elevadores.",
    imagemBanner: "elevators.jpg",
    sobre: "Conhecer as tecnologias relacionadas à prestação de serviços de manutenção, troca de peças e assistência técnica. Proporciona experimentações práticas no ambiente de manutenção em equipamentos e reconhece a importância das relações humanas no trabalho, identificando possibilidades e limites da atuação profissional.",
    habilidades: [
      { icone: "elevator", titulo: "Tecnologias de elevadores", descricao: "Fundamentos dos sistemas eletromecânicos de elevação." },
      { icone: "tool", titulo: "Manutenção e troca de peças", descricao: "Serviços práticos de reparo e substituição de componentes." },
      { icone: "shield-check", titulo: "Assistência técnica segura", descricao: "Procedimentos de segurança no ambiente de manutenção." },
      { icone: "users", titulo: "Relações humanas no trabalho", descricao: "Postura profissional e limites de atuação em equipe." }
    ],
    fichaTecnica: {
      cargaHoraria: "1 ano",
      modalidade: "Presencial",
      idade: "17 a 22 anos",
      escolaridadeMinima: "2º ano do Ensino Médio",
      exigeVulnerabilidadeSocial: true
    },
    turnos: [
      { turno: "Tarde", observacao: "" }
    ]
  },

  {
    id: "cabeleireiro",
    titulo: "Assistente de Cabeleireiro",
    resumoBanner: "Técnicas de corte, coloração, tratamentos capilares e atendimento em salões.",
    imagemBanner: "cabeleireiro-aluno.jpg",
    sobre: "Capacita os jovens a atuarem como assistentes em salões de beleza, no tratamento de cabelos. Oferece formação profissional com conhecimentos e habilidades básicas e específicas ao exercício da função.",
    habilidades: [
      { icone: "scissors", titulo: "Tratamento capilar", descricao: "Técnicas básicas de cuidado e tratamento de cabelos." },
      { icone: "droplet", titulo: "Produtos e procedimentos", descricao: "Uso correto de produtos usados em salão de beleza." },
      { icone: "users", titulo: "Atendimento ao cliente", descricao: "Postura profissional no atendimento em salão." },
      { icone: "certificate", titulo: "Prática assistida", descricao: "Habilidades específicas para atuar como assistente." }
    ],
    fichaTecnica: {
      cargaHoraria: "1 ano",
      modalidade: "Presencial",
      idade: "17 a 22 anos",
      escolaridadeMinima: "8º ano do Ensino Fundamental",
      exigeVulnerabilidadeSocial: true
    },
    turnos: [
      { turno: "Manhã", observacao: "" },
      { turno: "Tarde", observacao: "" }
    ]
  },

  {
    id: "vendas-atendimento",
    titulo: "Vendas e Atendimento ao Cliente",
    resumoBanner: "Técnicas de vendas, atendimento ao cliente e negociação comercial.",
    imagemBanner: "vendas.jpg",
    sobre: "Reconhecer o panorama do varejo no mercado atual. Oferece um conjunto de experiências teórico-práticas na área de Vendas e reconhece os princípios da qualidade na prestação de serviços.",
    habilidades: [
      { icone: "shopping-cart", titulo: "Panorama do varejo", descricao: "Entendimento do mercado de vendas atual." },
      { icone: "headset", titulo: "Atendimento ao cliente", descricao: "Práticas de comunicação e resolução de demandas." },
      { icone: "chart-bar", titulo: "Técnicas de vendas", descricao: "Experiências teórico-práticas na área comercial." },
      { icone: "star", titulo: "Qualidade na prestação de serviços", descricao: "Princípios de excelência no atendimento." }
    ],
    fichaTecnica: {
      cargaHoraria: "1 ano",
      modalidade: "Presencial",
      idade: "15 a 22 anos",
      escolaridadeMinima: "8º ano do Ensino Fundamental",
      exigeVulnerabilidadeSocial: true
    },
    turnos: [
      { turno: "Manhã", observacao: "" },
      { turno: "Tarde", observacao: "" }
    ]
  },

  {
    id: "desporto",
    titulo: "Desporto",
    resumoBanner: "Formação em educação física, esportes e atividades recreativas.",
    imagemBanner: "desporto.jpg",
    sobre: "Oferece um conjunto de experiências teórico-práticas na área do Desporto. Executa as rotinas básicas do processo de trabalho da prática desportiva e reconhece o panorama da prática desportiva no mercado atual.",
    habilidades: [
      { icone: "activity", titulo: "Prática desportiva", descricao: "Rotinas básicas do trabalho na área do desporto." },
      { icone: "users", titulo: "Trabalho em equipe", descricao: "Vivências práticas em atividades esportivas coletivas." },
      { icone: "target", titulo: "Panorama do mercado esportivo", descricao: "Reconhecimento das oportunidades na área desportiva." }
    ],
    fichaTecnica: {
      cargaHoraria: "1 ano",
      modalidade: "Presencial",
      idade: "14 a 22 anos",
      escolaridadeMinima: "7º ano do Ensino Fundamental",
      exigeVulnerabilidadeSocial: true
    },
    turnos: [
      { turno: "Manhã", observacao: "" },
      { turno: "Tarde", observacao: "" }
    ]
  },

  {
    id: "gastronomia",
    titulo: "Gastronomia",
    resumoBanner: "Técnicas culinárias profissionais e preparação de alimentos.",
    imagemBanner: "gastronomia_pao.jpeg",
    sobre: "Ensina informações técnicas sobre Gastronomia. Capacita os jovens a desenvolver atividades de rotina do setor de cozinha, atendimento e restaurantes.",
    habilidades: [
      { icone: "chef-hat", titulo: "Técnicas de cozinha", descricao: "Fundamentos técnicos do preparo de alimentos." },
      { icone: "tools-kitchen-2", titulo: "Rotina do setor de cozinha", descricao: "Organização e boas práticas no ambiente de cozinha." },
      { icone: "users", titulo: "Atendimento em restaurantes", descricao: "Noções de atendimento ao cliente no setor gastronômico." }
    ],
    fichaTecnica: {
      cargaHoraria: "1 ano",
      modalidade: "Presencial",
      idade: "18 a 22 anos",
      escolaridadeMinima: "8º ano do Ensino Fundamental",
      exigeVulnerabilidadeSocial: true
    },
    turnos: [
      { turno: "Manhã", observacao: "" },
      { turno: "Tarde", observacao: "" }
    ]
  },

  {
    id: "refrigeracao-climatizacao",
    titulo: "Refrigeração e Climatização",
    resumoBanner: "Instalação e manutenção de sistemas de ar condicionado e refrigeração.",
    imagemBanner: "refrigeracao.jpg",
    sobre: "Prepara os aprendizes para auxiliar os serviços de instalação, reparação e manutenção de máquinas e equipamentos de ar-condicionado em ambientes residenciais, comerciais e industriais.",
    habilidades: [
      { icone: "snowflake", titulo: "Instalação de climatização", descricao: "Auxílio na instalação de equipamentos de ar-condicionado." },
      { icone: "tool", titulo: "Reparação de equipamentos", descricao: "Diagnóstico e correção de falhas em máquinas de refrigeração." },
      { icone: "settings", titulo: "Manutenção preventiva", descricao: "Rotinas de manutenção em ambientes residenciais, comerciais e industriais." }
    ],
    fichaTecnica: {
      cargaHoraria: "1 ano",
      modalidade: "Presencial",
      idade: "18 a 22 anos",
      escolaridadeMinima: "2º ano do Ensino Médio",
      exigeVulnerabilidadeSocial: true
    },
    turnos: [
      { turno: "Manhã", observacao: "" },
      { turno: "Tarde", observacao: "" }
    ]
  },

  {
    id: "assistente-administrativo",
    titulo: "Assistente Administrativo",
    resumoBanner: "Gestão de documentos, atendimento e rotinas administrativas empresariais.",
    imagemBanner: "foto-adm.webp",
    sobre: "Oferece formação profissional básica voltada ao desenvolvimento de competências técnicas e socioemocionais necessárias ao exercício de atividades administrativas em empresas públicas e privadas. Prepara o jovem para atuar em rotinas de escritório, controle de documentos, atendimento ao público, elaboração de relatórios, apoio em processos de gestão e execução de tarefas relacionadas à administração de recursos materiais e humanos.",
    habilidades: [
      { icone: "file-text", titulo: "Rotinas de escritório", descricao: "Controle de documentos e organização administrativa." },
      { icone: "users", titulo: "Atendimento ao público", descricao: "Comunicação profissional em ambiente corporativo." },
      { icone: "clipboard-list", titulo: "Elaboração de relatórios", descricao: "Apoio em processos de gestão e documentação." },
      { icone: "briefcase", titulo: "Administração de recursos", descricao: "Noções de gestão de recursos materiais e humanos." }
    ],
    fichaTecnica: {
      cargaHoraria: "1 ano",
      modalidade: "Presencial",
      idade: "14 a 22 anos",
      escolaridadeMinima: "8º ano do Ensino Fundamental",
      exigeVulnerabilidadeSocial: true
    },
    turnos: [
      { turno: "Manhã", observacao: "" },
      { turno: "Tarde", observacao: "" }
    ]
  },

  {
    id: "auxiliar-dev-web",
    titulo: "Auxiliar de Desenvolvimento Web (Programação)",
    resumoBanner: "Criação e arquitetura de softwares e sites modernos.",
    imagemBanner: "prog.webp",
    sobre: "Forma o aluno em desenvolvimento web e tecnologias digitais, começando por fundamentos de informática, lógica de programação e uso de IDEs. Ensina a criar sites responsivos com HTML5 e CSS3, desenvolver backend em PHP, estruturar e manipular bancos de dados em SQL e construir aplicações completas com operações CRUD usando PHP, SQL e Bootstrap. Inclui introdução ao desenvolvimento mobile, uso de Git e GitHub, metodologias ágeis (Scrum e Kanban) e integração prática de conceitos de Inteligência Artificial e Machine Learning em projetos web.",
    habilidades: [
      { icone: "code", titulo: "Lógica de programação", descricao: "Fundamentos de informática e uso de IDEs." },
      { icone: "device-laptop", titulo: "Sites responsivos com HTML5 e CSS3", descricao: "Construção de páginas web do zero." },
      { icone: "database", titulo: "Backend em PHP e banco de dados SQL", descricao: "Aplicações completas com operações CRUD e Bootstrap." },
      { icone: "git-branch", titulo: "Versionamento com Git e GitHub", descricao: "Metodologias ágeis: Scrum e Kanban." },
      { icone: "brain", titulo: "Introdução a IA e Machine Learning", descricao: "Integração prática de conceitos de IA em projetos web." }
    ],
    fichaTecnica: {
      cargaHoraria: "1 ano",
      modalidade: "Presencial",
      idade: "17 a 22 anos",
      escolaridadeMinima: "2º ano do Ensino Médio",
      exigeVulnerabilidadeSocial: true
    },
    turnos: [
      { turno: "Tarde", observacao: "" }
    ]
  }
];

// Helper de busca — usado pelo template dinâmico via ?curso=<id> na URL
export function getCursoPorId(id) {
  return cursos.find((curso) => curso.id === id) ?? null;
}