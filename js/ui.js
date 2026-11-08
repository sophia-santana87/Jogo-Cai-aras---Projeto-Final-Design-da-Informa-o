// Cabeçalho de autoria: Projeto final extensionista do curso de Gestão da Informação da UFPR.
// Equipe: Bianca Vasconcelos de Lima; Katryni Haaby dos Santos Bueno; Luana Harmatiuk Guimarães; Sophia Santana da Silva; Vanessa da Silva Costa.
// Disciplina: Design da Informação • 2026.

import { CONTEUDO } from '../dados/conteudo.js?v=27';
import { MISSION_ORDER, MISSOES_INFO, getDescricaoMissao } from './missoes.js?v=27';

export function renderHorario(estado, root) {
  const periodo = {
    '08:00': 'Manhã',
    '10:30': 'Manhã',
    '13:30': 'Tarde',
    '16:00': 'Entardecer',
    '17:30': 'Entardecer'
  }[estado.horario] || 'Manhã';
  root.innerHTML = `
    <div class="clock-label">☀️ ${estado.horario} · ${periodo}</div>
    <small>Peixes disponíveis: ${estado.peixesDisponiveis}</small>
  `;
}

export function renderIndicadores(estado, root) {
  const simbolos = {
    Cultura: '♪',
    Ambiente: '❀',
    Comunidade: '⌂',
    Renda: '◈'
  };
  root.innerHTML = Object.entries(estado.indicadores)
    .map(([nome, valor]) => `
      <div class="indicator-row">
        <span class="indicator-name"><span class="indicator-icon" aria-hidden="true">${simbolos[nome] || '•'}</span>${nome}</span>
        <strong>${valor}/10</strong>
        <div class="bar" role="progressbar" aria-label="${nome}" aria-valuemin="0" aria-valuemax="10" aria-valuenow="${valor}"><div class="bar-fill" style="width:${(valor / 10) * 100}%"></div></div>
      </div>
    `)
    .join('');
}

export function renderMissoes(estado, root) {
  const ativa = estado.missaoAtiva;
  const progressoAtivo = ativa ? estado.progressoMissoes?.[ativa] : null;
  const dadosAtivos = CONTEUDO.missoes.find((missao) => missao.id === ativa);
  const etapaAtiva = dadosAtivos?.etapas[progressoAtivo?.passo];
  root.replaceChildren();

  if (ativa && dadosAtivos && progressoAtivo) {
    const destaque = document.createElement('section');
    destaque.className = 'missao-atual';
    const titulo = document.createElement('h3');
    titulo.textContent = MISSOES_INFO[ativa]?.nome || getDescricaoMissao(ativa);
    const objetivo = document.createElement('p');
    objetivo.textContent = etapaAtiva?.texto || 'Etapas concluídas. Converse com a pessoa que iniciou a missão.';
    const avancamento = document.createElement('small');
    const totalAlvos = etapaAtiva?.alvos?.length || 0;
    const alvosConcluidos = progressoAtivo.alvosConcluidos?.length || 0;
    avancamento.textContent = totalAlvos
      ? `Etapa ${Math.min(progressoAtivo.passo + 1, progressoAtivo.total)} de ${progressoAtivo.total} · ${alvosConcluidos}/${totalAlvos} objetivos`
      : `Etapa ${Math.min(progressoAtivo.passo + 1, progressoAtivo.total)} de ${progressoAtivo.total}`;
    const barra = document.createElement('div');
    barra.className = 'missao-progress';
    barra.setAttribute('role', 'progressbar');
    barra.setAttribute('aria-label', 'Progresso da missão');
    barra.setAttribute('aria-valuemin', '0');
    barra.setAttribute('aria-valuemax', String(progressoAtivo.total));
    barra.setAttribute('aria-valuenow', String(progressoAtivo.passo));
    const preenchimento = document.createElement('span');
    preenchimento.style.width = `${(progressoAtivo.passo / progressoAtivo.total) * 100}%`;
    barra.appendChild(preenchimento);
    destaque.append(titulo, objetivo, avancamento, barra);
    root.appendChild(destaque);
  }

  MISSION_ORDER.forEach((id) => {
    const concluida = estado.missoesConcluidas.includes(id);
    const item = document.createElement('div');
    item.className = `missao-item ${concluida ? 'done' : ''}`;
    const check = document.createElement('span');
    check.className = 'missao-check';
    check.textContent = concluida ? '✔' : '';
    const nome = document.createElement('span');
    nome.textContent = getDescricaoMissao(id);
    item.append(check, nome);
    root.appendChild(item);
  });
}

export function renderCaderno(estado, cartas) {
  const cont = document.getElementById('caderno-contador');
  if (cont) cont.textContent = String(estado.cartasColetadas.length);

  const card = document.getElementById('card-caderno');
  if (!card) return;
  card.innerHTML = estado.cartasColetadas
    .map((cardName) => `<div class="caderno-item">${cardName}</div>`)
    .join('') || '<p>Nenhuma carta ainda.</p>';
}
