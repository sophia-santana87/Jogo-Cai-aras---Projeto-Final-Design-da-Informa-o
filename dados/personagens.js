export const PERSONAGENS = {
  'dona-cida': { id: 'dona-cida', nome: 'Dona Cida', fala: 'Oi! Que bom encontrar você. A farinha guarda histórias de trabalho coletivo e cuidado com a roça.', emoji: '👵' },
  nelson: { id: 'nelson', nome: 'Seu Nelson', fala: 'Oi! O mar muda com o vento, a maré e a lua. Vale observar tudo com calma antes de sair.', emoji: '🧔' },
  jaque: { id: 'jaque', nome: 'Jaque', fala: 'Oi! A cultura também vive nas redes. O importante é compartilhar com respeito e ouvir a comunidade.', emoji: '🧑‍🦱' },
  tiao: { id: 'tiao', nome: 'Mestre Tião', fala: 'Oi! A música precisa andar de pessoa para pessoa. Quer conhecer os instrumentos do fandango?', emoji: '🧔‍♂️' },
  rita: { id: 'rita', nome: 'Rita', fala: 'Oi! A gente pode receber visitantes com cuidado, respeitando a vida e os saberes daqui.', emoji: '👩‍🦱' },
  davi: { id: 'davi', nome: 'Davi', fala: 'Oi! Quer aprender a observar o mar, o vento e a maré comigo?', emoji: '🧒' },
  erveiro: {
    id: 'erveiro',
    nome: 'Seu Ari',
    fala: 'Oi! Sou um personagem fictício. Podemos conversar sobre plantas e frutos, mas os saberes locais precisam ser confirmados com a comunidade.',
    emoji: '🧓',
    ficticio: true,
    validar: true
  }
};

export const MISSOES_CADASTRO = {
  roca: { nome: 'Memória da Farinha', descricao: 'Conheça os saberes e as etapas da farinha.', npcId: 'dona-cida', marcador: { x: 1, y: 0 } },
  mar: { nome: 'A Leitura do Tempo', descricao: 'Observe o mar, o vento e a maré com a comunidade.', npcId: 'nelson', marcador: { x: 1, y: 0 } },
  fandango: { nome: 'Resgate Cultural', descricao: 'Conheça a música, a dança e a transmissão dos saberes.', npcId: 'tiao', marcador: { x: -1, y: 0 } },
  visitantes: { nome: 'O Conflito Contemporâneo', descricao: 'Converse sobre turismo, autoria e cuidado com o território.', npcId: 'rita', marcador: { x: 1, y: 0 } },
  mata: {
    nome: 'Trilha dos Saberes da Mata',
    descricao: 'Observe plantas da mata com cuidado e escute saberes a validar.',
    npcId: 'erveiro',
    marcador: { x: -1, y: 0 },
    ficticio: true,
    validar: true
  }
};

export const ORDEM_MISSOES = Object.keys(MISSOES_CADASTRO);

export const ROTINAS_VILA = {
  '08:00': {},
  '10:30': {
    'dona-cida': { x: 23, y: 8 },
    tiao: { x: 30, y: 15 },
    davi: { x: 15, y: 27 }
  },
  '13:30': {
    davi: { x: 13, y: 26 }
  },
  '16:00': {
    nelson: { x: 12, y: 27 },
    tiao: { x: 29, y: 14 }
  },
  '17:30': {
    nelson: { x: 12, y: 27 },
    tiao: { x: 29, y: 14 }
  }
};
