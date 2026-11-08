// Cabeçalho de autoria: Projeto final extensionista do curso de Gestão da Informação da UFPR.
// Equipe: Bianca Vasconcelos de Lima; Katryni Haaby dos Santos Bueno; Luana Harmatiuk Guimarães; Sophia Santana da Silva; Vanessa da Silva Costa.
// Disciplina: Design da Informação • 2026.

export function aplicarAcessibilidade(estado) {
  const body = document.body;
  body.classList.toggle('large-text', estado.letraNivel === 2);
  body.classList.toggle('big-text', estado.letraNivel === 3);
  body.classList.toggle('high-contrast', estado.altoContraste);
  const root = document.documentElement;
  root.style.setProperty('--font', estado.letraNivel === 2 ? 'Verdana, system-ui, sans-serif' : '"Trebuchet MS", Verdana, system-ui, sans-serif');
  root.style.setProperty('letter-spacing', estado.letraNivel === 2 ? '0.04em' : 'normal');
}

export function moverFoco(element) {
  if (element && typeof element.focus === 'function') {
    setTimeout(() => element.focus(), 50);
  }
}
