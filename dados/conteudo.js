// Cabeçalho de autoria: Projeto final extensionista do curso de Gestão da Informação da UFPR.
// Equipe: Bianca Vasconcelos de Lima; Katryni Haaby dos Santos Bueno; Luana Harmatiuk Guimarães; Sophia Santana da Silva; Vanessa da Silva Costa.
// Disciplina: Design da Informação • 2026.

export const CONTEUDO = {
  titulo: 'Dia na Ponta Oeste',
  equipe: [
    'Bianca Vasconcelos de Lima',
    'Katryni Haaby dos Santos Bueno',
    'Luana Harmatiuk Guimarães',
    'Sophia Santana da Silva',
    'Vanessa da Silva Costa'
  ],
  universidade: 'Universidade Federal do Paraná',
  curso: 'Bacharelado em Gestão da Informação',
  disciplina: 'Disciplina de Design da Informação',
  professor: 'Profa. Dra. Joana Lemos',
  aviso: 'Protótipo educativo. Não substitui a voz das comunidades.',
  paleta: {
    marRaso: '#2BB5C9',
    marFundo: '#1B7FA0',
    areia: '#F0D9A0',
    areiaUmida: '#D9BE82',
    grama: '#5FA844',
    mata: '#2F6B3A',
    folhaClara: '#8CCB5E',
    madeira: '#8A5A33',
    madeiraEscura: '#5A3A1E',
    palha: '#D9A441',
    terraRoça: '#9C6B3F',
    ceuManha: '#F2B84B',
    ceuEntardecer: '#F28C38',
    painelFundo: '#F6E7C1',
    borda: '#5A3A1E',
    texto: '#2B1A0E',
    botaoPrincipal: '#2F6B3A',
    botaoPrincipalTexto: '#FFFFFF',
    botaoSecundario: '#F6E7C1',
    destaque: '#FFE066'
  },
  tutorial: [
    'Use as setas ou WASD para caminhar. No celular, toque em um ponto acessível do mapa.',
    'Aproxime-se de uma pessoa e pressione E, Enter ou o botão de interação para conversar.',
    'Os brilhos amarelos mostram pontos importantes. Abra o caderno para ver objetivos e cartas.'
  ],
  avatares: [
    { id: 'a1', nome: 'Viajante', descricao: 'Pele morena · cabelo cacheado · roupa verde' },
    { id: 'a2', nome: 'Pescadora ou pescador', descricao: 'Pele negra · cabelo crespo · roupa azul' },
    { id: 'a3', nome: 'Moradora ou morador', descricao: 'Pele clara · cabelo liso · roupa vermelha' },
    { id: 'a4', nome: 'Aventureira ou aventureiro', descricao: 'Pele retinta · tranças · roupa roxa' },
    { id: 'a5', nome: 'Viajante', descricao: 'Pele clara · cabelo cacheado · roupa amarela' },
    { id: 'a6', nome: 'Moradora ou morador', descricao: 'Pele morena · tranças · roupa azul-petróleo' },
    { id: 'a7', nome: 'Pescadora ou pescador', descricao: 'Pele retinta · cabelo liso · roupa verde-água' },
    { id: 'a8', nome: 'Aventureira ou aventureiro', descricao: 'Pele dourada · cabelo crespo · roupa terracota' }
  ],
  periodos: {
    '08:00': 'Manhã',
    '10:30': 'Manhã',
    '13:30': 'Tarde',
    '16:00': 'Entardecer',
    '17:30': 'Entardecer'
  },
  indicadores: [
    'Cultura',
    'Ambiente',
    'Comunidade',
    'Renda'
  ],
  nomePadrao: 'Visitante',
  missoes: [
    {
      id: 'roca',
      abertura: 'Dona Cida convida você a entender como a farinha guarda a memória da comunidade.',
      validar: true,
      etapas: [
        { tipo: 'ir-ate', alvo: 'casa-de-farinha', texto: 'Entre na casa de farinha para conhecer o espaço de trabalho.' },
        { tipo: 'ordenar', texto: 'Organize as etapas apresentadas por Dona Cida.', itens: ['Descascar', 'Ralar', 'Prensar', 'Peneirar', 'Torrar'], validar: true },
        { tipo: 'conversar', alvo: 'dona-cida', texto: 'Converse com Dona Cida sobre o trabalho coletivo.' }
      ],
      escolhas: [
        {
          texto: 'Registrar as histórias dos mais velhos.',
          efeito: { Cultura: 2, Comunidade: 1, Ambiente: 0, Renda: -1 },
          explicacao: 'Guardar memória fortalece a passagem de saberes e mostra que existem opiniões diferentes sobre o futuro da área.'
        },
        {
          texto: 'Conversar com a escola e com a gestão da área.',
          efeito: { Cultura: 1, Comunidade: 2, Ambiente: 1, Renda: 0 },
          explicacao: 'A conversa com a escola e a gestão ajuda a encontrar caminhos próprios para a comunidade, sem esquecer as diferentes visões.'
        },
        {
          texto: 'Ouvir e guardar sem decidir agora.',
          efeito: { Cultura: 1, Comunidade: 0, Ambiente: 0, Renda: 0 },
          explicacao: 'A escuta também é parte do cuidado. Nem toda memória precisa ser resolvida de uma vez.'
        }
      ],
      carta: {
        titulo: 'Carta de Memória',
        texto: 'A farinha guarda histórias de trabalho coletivo, cuidado e tempo da roça.',
        categoria: 'Receitas e Causos'
      }
    },
    {
      id: 'mar',
      abertura: 'Na ponta do píer, o vento e a maré apontam o tempo do mar.',
      validar: true,
      etapas: [
        { tipo: 'observar', texto: 'Observe três sinais do entorno: maré, vento e céu.', alvos: ['mare', 'vento', 'ceu'], validar: true },
        { tipo: 'conversar', alvo: 'davi', texto: 'Converse com Davi sobre o que você observou.' }
      ],
      escolhas: [
        {
          texto: 'Sair de canoa agora.',
          efeito: { Renda: 2, Ambiente: -1, Comunidade: 0, Cultura: 0 },
          explicacao: 'A pesca artesanal ainda é renda principal na Ponta Oeste, mas o tempo do mar pede atenção e cuidado.'
        },
        {
          texto: 'Esperar e observar melhor.',
          efeito: { Renda: 0, Ambiente: 2, Comunidade: 1, Cultura: 0 },
          explicacao: 'Esperar é uma forma de leitura do mar. A canoa não usa motor e a pesca da tainha exige respeito ao tempo do local.'
        },
        {
          texto: 'Ensinar o Davi a ler o tempo primeiro.',
          efeito: { Cultura: 2, Comunidade: 2, Ambiente: 1, Renda: 0 },
          explicacao: 'Ensinar a leitura do tempo é também manter viva a memória da pesca artesanal e as formas de aprender em comunidade.'
        }
      ],
      carta: {
        titulo: 'Carta de Mar',
        texto: 'A leitura do mar é uma sabedoria feita de atenção: maré, vento, lua e memória.',
        categoria: 'Natureza e Mar'
      }
    },
    {
      id: 'fandango',
      abertura: 'No pavilhão, a música pede que os instrumentos voltem a circular pela comunidade.',
      validar: true,
      etapas: [
        { tipo: 'encontrar', texto: 'Encontre a viola, a rabeca e o adufo pela vila.', alvos: ['viola', 'rabeca', 'adufo'], validar: true },
        { tipo: 'ir-ate', alvo: 'pavilhao-fandango', texto: 'Leve os instrumentos ao terreiro do fandango.' }
      ],
      escolhas: [
        {
          texto: 'Convidar os jovens para tocar e dançar.',
          efeito: { Cultura: 2, Comunidade: 2, Ambiente: 0, Renda: 1 },
          explicacao: 'A cultura viva se fortalece quando a festa abre espaço para a juventude e para novos encontros.'
        },
        {
          texto: 'Manter a festa só com os mais velhos.',
          efeito: { Cultura: 1, Comunidade: 0, Ambiente: 0, Renda: 0 },
          explicacao: 'A tradição continua viva quando é cuidada por quem a viveu, mas ela também precisa de passagem e acolhimento.'
        },
        {
          texto: 'Abrir a festa para os visitantes.',
          efeito: { Cultura: 1, Comunidade: 1, Ambiente: 0, Renda: 2 },
          explicacao: 'Festa e encontro são parte da cultura viva, desde que haja respeito e atenção a quem a desenha e a guarda.'
        }
      ],
      carta: {
        titulo: 'Carta de Música',
        texto: 'O fandango é encontro, memória e expressão do corpo em movimento.',
        categoria: 'Festas e Música'
      }
    },
    {
      id: 'visitantes',
      abertura: 'Na barraca, a comunidade conversa sobre o que crescer e o que proteger.',
      validar: true,
      etapas: [
        { tipo: 'conversar', alvo: 'rita', texto: 'Converse com Rita sobre como receber visitantes com cuidado.' },
        { tipo: 'conversar', alvo: 'jaque', texto: 'Converse com Jaque sobre autoria e compartilhamento de imagens.' },
        { tipo: 'separar', texto: 'Observe as lixeiras e registre como os resíduos são separados.', alvos: ['lixeiraOrganica', 'lixeiraReciclavel'] }
      ],
      escolhas: [
        {
          texto: 'Aumentar vendas de artesanato e comida para ganhar mais, cobrindo o risco do lixo.',
          efeito: { Renda: 2, Ambiente: -2, Comunidade: 0, Cultura: 1 },
          explicacao: 'Quando a renda cresce, a questão do lixo e do cuidado com o território precisa ser pensada junto com o comércio.'
        },
        {
          texto: 'Explicar que o artesanato não pode ser copiado sem a comunidade.',
          efeito: { Cultura: 2, Comunidade: 2, Ambiente: 0, Renda: -1 },
          explicacao: 'Cultura viva exige reconhecimento e respeito. O uso de redes sociais e celulares faz parte da cultura contemporânea, mas não elimina o direito de autoria.'
        },
        {
          texto: 'Divulgar a vila nas redes sociais com cuidado e critério.',
          efeito: { Comunidade: 1, Cultura: 1, Ambiente: -1, Renda: 2 },
          explicacao: 'As redes são parte da vida atual. Quando usadas com cuidado, ajudam a contar a história da comunidade sem perder o respeito pelas pessoas.'
        }
      ],
      carta: {
        titulo: 'Carta de Renda e Cuidado',
        texto: 'Cultura e trabalho podem crescer juntos, se houver diálogo e cuidado com a comunidade e o ambiente.',
        categoria: 'Natureza e Mar'
      }
    },
    {
      id: 'mata',
      abertura: 'Seu Ari, um personagem fictício, convida você a conversar sobre plantas e frutos da mata. Os saberes locais precisam ser validados com a comunidade.',
      validar: true,
      etapas: [
        { tipo: 'conversar', alvo: 'erveiro', texto: 'Converse com Seu Ari sobre usos de plantas medicinais e frutos locais, como a cataia. Confirme esses saberes antes de publicar.', validar: true },
        { tipo: 'encontrar', texto: 'Encontre três plantas na trilha. Observe sem retirar partes delas.', alvos: ['planta-medicinal-a', 'planta-medicinal-b', 'planta-medicinal-c'], validar: true },
        { tipo: 'observar', texto: 'Observe o ponto indicado e converse sobre como cuidar da planta mãe. A orientação depende dos saberes locais.', alvos: ['manejo-mata'], validar: true }
      ],
      escolhas: [
        {
          texto: 'Registrar o que foi compartilhado e pedir validação à comunidade.',
          efeito: { Cultura: 2, Comunidade: 2, Ambiente: 1, Renda: 0 },
          explicacao: 'Registrar com cuidado ajuda a preservar a autoria. A comunidade decide o que pode ser compartilhado.'
        },
        {
          texto: 'Compartilhar somente informações autorizadas.',
          efeito: { Cultura: 1, Comunidade: 2, Ambiente: 1, Renda: 0 },
          explicacao: 'Pedir autorização respeita quem guarda os saberes e evita divulgar informações sem consentimento.'
        },
        {
          texto: 'Agradecer e continuar observando sem coletar.',
          efeito: { Cultura: 1, Comunidade: 1, Ambiente: 2, Renda: 0 },
          explicacao: 'Observar sem retirar nada é uma forma de cuidado. Cada orientação sobre coleta precisa ser confirmada localmente.'
        }
      ],
      carta: {
        titulo: 'Carta da Mata e dos Remédios da Terra',
        texto: 'Os saberes sobre plantas e frutos pertencem a quem os compartilha. Pergunte, escute e confirme com a comunidade antes de registrar ou divulgar.',
        categoria: 'Natureza e Mar',
        validar: true
      }
    }
  ],
  evento: {
    id: 'barco-de-fora',
    nome: 'Barco de Fora',
    abertura: 'Às 17:30, uma embarcação de fora aparece perto da área de pesca da comunidade.',
    validar: true,
    etapas: [
      {
        texto: 'O que fazer primeiro?',
        opcoes: [
          { texto: 'Registrar com o celular à distância.', efeito: { Ambiente: -1, Comunidade: 1, Cultura: 0, Renda: 0 }, explicacao: 'A imagem ajuda a documentar o que está acontecendo, mas precisa ser usada com cuidado.' },
          { texto: 'Conversar com Seu Nelson e Rita.', efeito: { Comunidade: 2, Cultura: 1, Ambiente: 0, Renda: 0 }, explicacao: 'Falar com a comunidade é o primeiro passo para decidir juntos.' },
          { texto: 'Avisar o grupo da comunidade.', efeito: { Comunidade: 2, Ambiente: 1, Cultura: 0, Renda: 0 }, explicacao: 'A atenção coletiva ajuda a agir em tempo e junto com as pessoas que dependem do mar.' }
        ]
      },
      {
        texto: 'Como seguir?',
        opcoes: [
          { texto: 'Levar o registro a quem fiscaliza.', efeito: { Comunidade: 1, Ambiente: 2, Renda: 0, Cultura: 0 }, explicacao: 'A fiscalização e a comunidade precisam agir em conjunto para proteger o mar e quem vive dele.' },
          { texto: 'Reunir a comunidade para decidir juntos.', efeito: { Comunidade: 2, Ambiente: 1, Cultura: 1, Renda: 0 }, explicacao: 'Decisões com prazo e risco precisam ser compartilhadas.' },
          { texto: 'Esperar o dia seguinte.', efeito: { Comunidade: 0, Ambiente: -1, Cultura: 0, Renda: 0 }, explicacao: 'A espera pode dar tempo para pensar, mas nem sempre é suficiente diante de risco real.' }
        ]
      }
    ]
  },
  cartas: [
    { id: 'registro-pesca', titulo: 'Pesca com atenção', categoria: 'Natureza e Mar', texto: 'A pesca cuidadosa considera o tempo, a quantidade disponível e os saberes compartilhados pela comunidade.' },
    { titulo: 'Receita de maré', categoria: 'Receitas e Causos', texto: 'A farinha e o peixe são memória de trabalho e de comida compartilhada.' },
    { titulo: 'Pé de mangue', categoria: 'Natureza e Mar', texto: 'O mangue guarda vida, alimento e proteção para o litoral.' },
    { titulo: 'Pau de viola', categoria: 'Festas e Música', texto: 'A música leva a história da vila para o presente, de mãos dadas com a dança.' },
    { titulo: 'Redes e mar', categoria: 'Natureza e Mar', texto: 'A pesca artesanal depende do cuidado com o mar, a lua e a atenção ao tempo.' },
    { titulo: 'Conversa na barraca', categoria: 'Receitas e Causos', texto: 'A comunidade conversa sobre trabalho, comida e futuro em pequenos encontros cotidianos.' },
    { titulo: 'Festa do povo', categoria: 'Festas e Música', texto: 'Festa é encontro e também forma de manter a cultura viva e em movimento.' },
    { titulo: 'Cuidado em cada passo', categoria: 'Natureza e Mar', texto: 'O litoral pede atenção, acolhimento e responsabilidade para todo mundo.' },
    { titulo: 'Pito de memória', categoria: 'Receitas e Causos', texto: 'Cada receita carrega uma história de família, de troca e de saberes que se renovam.' },
    { titulo: 'Som da praça', categoria: 'Festas e Música', texto: 'Os ritmos da vila lembram que a cultura se espalha por pessoas, corpos e histórias.' },
    { titulo: 'Rumo da roça', categoria: 'Receitas e Causos', texto: 'A roça ensina que o cuidado com a terra também é cuidado com a comunidade.' },
    { titulo: 'Canoa e vento', categoria: 'Natureza e Mar', texto: 'A canoa e o vento falam de trabalho, risco e de uma relação íntima com o mar.' },
    { titulo: 'Pelas trilhas', categoria: 'Natureza e Mar', texto: 'A trilha é caminho de chegada, passagem e encontro com o território.' }
  ],
  perguntas: [
    'O que você já conhecia sobre os caiçaras?',
    'Qual decisão foi mais difícil?',
    'O que você perguntaria a alguém da comunidade?'
  ],
  meusDados: {
    validar: true,
    nota: 'Textos marcados como “a validar” exigem revisão com a comunidade e com o Instituto Raízes Caiçaras.'
  }
};
