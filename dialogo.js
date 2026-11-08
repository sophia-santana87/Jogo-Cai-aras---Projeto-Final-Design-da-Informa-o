// Cabeçalho de autoria: Projeto final extensionista do curso de Gestão da Informação da UFPR.
// Equipe: Bianca Vasconcelos de Lima; Katryni Haaby dos Santos Bueno; Luana Harmatiuk Guimarães; Sophia Santana da Silva; Vanessa da Silva Costa.
// Disciplina: Design da Informação • 2026.

import { desenharCachorro, desenharNpc } from './sprites.js?v=24';

export class DialogoController {
  constructor(documentRef = document) {
    this.documentRef = documentRef;
    this.overlay = documentRef.getElementById('dialogo-overlay');
    this.box = this.overlay.querySelector('.dialogo-box');
    this.portrait = documentRef.getElementById('dialogo-retrato');
    this.portraitContext = this.portrait.getContext('2d');
    this.textoEl = documentRef.getElementById('dialogo-texto');
    this.nomeEl = documentRef.getElementById('dialogo-nome');
    this.choicesEl = documentRef.getElementById('dialogo-choices');
    this.botaoContinuar = documentRef.getElementById('btn-dialogo-continuar');
    this.onChoice = null;
    this.onContinue = null;
    this.onType = null;
    this.typingTimer = null;
    this.isTyping = false;
    this.botaoContinuar.addEventListener('click', () => {
      if (this.isTyping) {
        this.finishTyping();
        return;
      }
      if (this.onContinue) {
        this.onContinue();
      } else {
        this.close();
      }
    });
  }

  open({ nome, texto, choices = [], onChoice = null, onContinue = null, onType = null, typewriter = true, className = '', personagemId = null }) {
    this.clearTyping();
    this.documentRef.getElementById('tutorial-hint')?.classList.add('hidden');
    this.nomeEl.textContent = nome || 'Narrador';
    const characterId = personagemId || {
      'Dona Cida': 'dona-cida',
      'Seu Nelson': 'nelson',
      Jaque: 'jaque',
      Rita: 'rita',
      'Mestre Tião': 'tiao',
      Davi: 'davi',
      'Rita e Jaque': 'rita',
      'Caderno de Saberes': 'jogador'
    }[nome] || 'jogador';
    this.portraitContext.clearRect(0, 0, this.portrait.width, this.portrait.height);
    this.portraitContext.imageSmoothingEnabled = false;
    this.portraitContext.fillStyle = '#EBD39A';
    this.portraitContext.fillRect(0, 0, this.portrait.width, this.portrait.height);
    this.portraitContext.fillStyle = '#8CCB5E';
    this.portraitContext.fillRect(0, 92, this.portrait.width, 36);
    this.portraitContext.fillStyle = '#D9A441';
    this.portraitContext.fillRect(0, 88, this.portrait.width, 5);
    if (nome === 'Cachorro') {
      desenharCachorro(this.portraitContext, 64, 124, 64, 0, 'down');
    } else if (nome === 'Rita e Jaque') {
      desenharNpc(this.portraitContext, 42, 122, 40, 0, 'rita');
      desenharNpc(this.portraitContext, 88, 122, 40, 0, 'jaque');
    } else {
      desenharNpc(this.portraitContext, 64, 124, 64, 0, characterId);
    }
    const fullText = texto || '';
    this.fullText = fullText;
    this.textoEl.textContent = typewriter ? '' : fullText;
    this.box.classList.toggle('notebook-dialog', className === 'notebook');
    this.onChoice = onChoice;
    this.onContinue = onContinue;
    this.onType = onType;
    this.choicesEl.innerHTML = '';
    this.isTyping = Boolean(typewriter && fullText);
    this.textoEl.classList.toggle('is-typing', this.isTyping);
    this.botaoContinuar.classList.toggle('hidden', choices.length > 0 && !this.isTyping);
    this.botaoContinuar.textContent = this.isTyping ? 'Pular ⏩' : 'Continuar ▶';
    this.choicesEl.classList.toggle('hidden', this.isTyping);

    if (choices.length) {
      choices.forEach((choice, index) => {
        const button = this.documentRef.createElement('button');
        button.type = 'button';
        button.className = 'choice-button';
        button.textContent = choice.text;
        button.addEventListener('click', () => {
          const handleChoice = this.onChoice;
          this.close();
          if (handleChoice) handleChoice(index);
        });
        this.choicesEl.appendChild(button);
      });
    }

    this.overlay.classList.remove('hidden');
    if (this.isTyping) {
      let index = 0;
      let soundCounter = 0;
      this.typingTimer = setInterval(() => {
        index += 1;
        this.textoEl.textContent = fullText.slice(0, index);
        soundCounter += 1;
        if (soundCounter % 3 === 0 && this.onType) this.onType();
        if (index >= fullText.length) this.finishTyping();
      }, 24);
    }
    const first = this.isTyping ? this.botaoContinuar : (this.choicesEl.querySelector('button') || this.botaoContinuar);
    if (first) {
      setTimeout(() => first.focus(), 80);
    }
  }

  close() {
    this.clearTyping();
    this.overlay.classList.add('hidden');
    this.box.classList.remove('notebook-dialog');
    this.choicesEl.innerHTML = '';
    this.onChoice = null;
    this.onContinue = null;
    this.onType = null;
    this.fullText = '';
  }

  clearTyping() {
    if (this.typingTimer) {
      clearInterval(this.typingTimer);
      this.typingTimer = null;
    }
  }

  finishTyping() {
    this.clearTyping();
    this.isTyping = false;
    this.textoEl.textContent = this.fullText || this.textoEl.textContent;
    this.textoEl.classList.remove('is-typing');
    this.choicesEl.classList.remove('hidden');
    this.botaoContinuar.textContent = 'Continuar ▶';
    this.botaoContinuar.classList.toggle('hidden', this.choicesEl.children.length > 0);
  }
}
