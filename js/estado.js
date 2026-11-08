// Cabeçalho de autoria: Projeto final extensionista do curso de Gestão da Informação da UFPR.
// Equipe: Bianca Vasconcelos de Lima; Katryni Haaby dos Santos Bueno; Luana Harmatiuk Guimarães; Sophia Santana da Silva; Vanessa da Silva Costa.
// Disciplina: Design da Informação • 2026.

import { POSICAO_INICIAL_CACHORRO, POSICAO_INICIAL_JOGADOR } from './mundo.js?v=26';

export const ESTADO_PADRAO = {
  nomeJogador: 'Visitante',
  avatar: 'a1',
  fase: 'abertura',
  mapaAtivo: 'vila',
  interiorAtivo: null,
  indicadores: {
    Cultura: 5,
    Ambiente: 5,
    Comunidade: 5,
    Renda: 5
  },
  horario: '08:00',
  missoesConcluidas: [],
  progressoMissoes: {},
  missaoAtiva: null,
  cartasColetadas: [],
  inventario: {},
  itensArmazemColetados: [],
  eventoConcluido: false,
  progressoEvento: 0,
  peixesDisponiveis: 5,
  horariosDePesca: [],
  impactoBarcoAplicado: false,
  jogador: { ...POSICAO_INICIAL_JOGADOR, nome: 'Visitante' },
  cachorro: { ...POSICAO_INICIAL_CACHORRO },
  letraNivel: 1,
  altoContraste: false,
  reduzirMovimento: false,
  mostrarSetas: true,
  somLigado: false,
  pausa: false,
  tutorialIndex: 0,
  tutorialMovimentoVisto: false,
  tutorialInteracaoVisto: false,
  ultimaAcao: null,
  ultimaMensagem: null,
  progressoSalvo: false
};

export function carregarEstado() {
  try {
    const raw = localStorage.getItem('dia-na-ponta-oeste');
    if (!raw) {
      return structuredClone(ESTADO_PADRAO);
    }
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      throw new TypeError('O estado salvo do jogo não tem um formato válido.');
    }
    return {
      ...structuredClone(ESTADO_PADRAO),
      ...parsed,
      indicadores: { ...ESTADO_PADRAO.indicadores, ...parsed.indicadores },
      jogador: {
        ...ESTADO_PADRAO.jogador,
        ...parsed.jogador,
        nome: parsed.jogador?.nome || parsed.nomeJogador || ESTADO_PADRAO.jogador.nome
      },
      cachorro: { ...ESTADO_PADRAO.cachorro, ...parsed.cachorro },
      progressoMissoes: { ...ESTADO_PADRAO.progressoMissoes, ...parsed.progressoMissoes },
      inventario: parsed.inventario && typeof parsed.inventario === 'object' && !Array.isArray(parsed.inventario)
        ? Object.fromEntries(Object.entries(parsed.inventario).map(([id, quantidade]) => [
          id,
          Number.isFinite(quantidade) && quantidade > 0 ? Math.floor(quantidade) : 0
        ]))
        : {},
      itensArmazemColetados: Array.isArray(parsed.itensArmazemColetados)
        ? parsed.itensArmazemColetados.filter((item) => typeof item === 'string')
        : [],
      horariosDePesca: Array.isArray(parsed.horariosDePesca) ? parsed.horariosDePesca : []
    };
  } catch (error) {
    console.error('Não foi possível carregar o estado salvo do jogo.', error);
    return structuredClone(ESTADO_PADRAO);
  }
}

export function salvarEstado(estado) {
  try {
    localStorage.setItem('dia-na-ponta-oeste', JSON.stringify(estado));
    return true;
  } catch (error) {
    console.error('Não foi possível salvar o estado do jogo.', error);
    return false;
  }
}

export function clonarEstado(estado) {
  return JSON.parse(JSON.stringify(estado));
}

export function ajustarIndicadores(estado, efeitos) {
  const entrada = { ...estado.indicadores };
  for (const [nome, valor] of Object.entries(efeitos)) {
    if (nome in entrada) {
      entrada[nome] = Math.max(0, Math.min(10, entrada[nome] + valor));
    }
  }
  estado.indicadores = entrada;
  return estado;
}
