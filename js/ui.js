// Cabeçalho de autoria: Projeto final extensionista do curso de Gestão da Informação da UFPR.
// Equipe: Bianca Vasconcelos de Lima; Katryni Haaby dos Santos Bueno; Luana Harmatiuk Guimarães; Sophia Santana da Silva; Vanessa da Silva Costa.
// Disciplina: Design da Informação • 2026.

import { MISSION_ORDER, getDescricaoMissao } from './missoes.js?v=25';

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
  root.innerHTML = MISSION_ORDER.map((id) => {
    const concluida = estado.missoesConcluidas.includes(id);
    const progresso = estado.progressoMissoes?.[id];
    const andamento = !concluida && progresso
      ? `<small>Em andamento · etapa ${Math.min(progresso.passo + 1, progresso.total)}/${progresso.total}</small>`
      : '';
    return `
      <div class="missao-item ${concluida ? 'done' : ''}">
        <div class="missao-check">${concluida ? '✔' : ''}</div>
        <div>${getDescricaoMissao(id)}${andamento}</div>
      </div>
    `;
  }).join('');
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
