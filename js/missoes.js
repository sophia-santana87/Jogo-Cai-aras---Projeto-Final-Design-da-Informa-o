// Cabeçalho de autoria: Projeto final extensionista do curso de Gestão da Informação da UFPR.
// Equipe: Bianca Vasconcelos de Lima; Katryni Haaby dos Santos Bueno; Luana Harmatiuk Guimarães; Sophia Santana da Silva; Vanessa da Silva Costa.
// Disciplina: Design da Informação • 2026.

import { MISSOES_CADASTRO, ORDEM_MISSOES } from '../dados/personagens.js?v=26';

export const MISSION_ORDER = ORDEM_MISSOES;
export const MISSOES_INFO = MISSOES_CADASTRO;

export function getDescricaoMissao(id) {
  return MISSOES_INFO[id]?.nome || 'Missão';
}

export function getMissaoPorId(id) {
  return MISSOES_INFO[id] || { nome: 'Missão', descricao: 'Missão sem descrição' };
}
