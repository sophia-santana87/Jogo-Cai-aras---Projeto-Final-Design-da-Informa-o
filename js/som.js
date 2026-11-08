// Cabeçalho de autoria: Projeto final extensionista do curso de Gestão da Informação da UFPR.
// Equipe: Bianca Vasconcelos de Lima; Katryni Haaby dos Santos Bueno; Luana Harmatiuk Guimarães; Sophia Santana da Silva; Vanessa da Silva Costa.
// Disciplina: Design da Informação • 2026.

export class SomManager {
  constructor() {
    this.audioCtx = null;
    this.enabled = false;
  }

  ativar() {
    if (!this.audioCtx && window.AudioContext) {
      this.audioCtx = new window.AudioContext();
    }
    this.enabled = true;
  }

  tocar(freq = 440, duration = 0.06, volume = 0.02) {
    if (!this.enabled || !this.audioCtx) return;
    const oscillator = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    oscillator.type = 'square';
    oscillator.frequency.value = freq;
    gain.gain.value = volume;
    oscillator.connect(gain);
    gain.connect(this.audioCtx.destination);
    oscillator.start();
    oscillator.stop(this.audioCtx.currentTime + duration);
  }
}
