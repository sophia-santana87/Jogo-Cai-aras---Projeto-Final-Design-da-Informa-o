// Cabeçalho de autoria: Projeto final extensionista do curso de Gestão da Informação da UFPR.
// Equipe: Bianca Vasconcelos de Lima; Katryni Haaby dos Santos Bueno; Luana Harmatiuk Guimarães; Sophia Santana da Silva; Vanessa da Silva Costa.
// Disciplina: Design da Informação • 2026.

const LARGURA_QUADRO = 16;
const ALTURA_QUADRO = 24;
const QUADROS_POR_DIRECAO = 3;
const DIRECOES = { down: 0, up: 1, left: 2, right: 3 };
const folhasDePersonagem = new Map();

export class SpriteSheet {
  constructor(imagem, larguraQuadro, alturaQuadro) {
    if (!imagem || !larguraQuadro || !alturaQuadro) {
      throw new TypeError('SpriteSheet precisa de uma imagem e das dimensões do quadro.');
    }
    this.imagem = imagem;
    this.larguraQuadro = larguraQuadro;
    this.alturaQuadro = alturaQuadro;
  }

  static load(url, larguraQuadro, alturaQuadro) {
    return new Promise((resolve, reject) => {
      const imagem = new Image();
      imagem.onload = () => resolve(new SpriteSheet(imagem, larguraQuadro, alturaQuadro));
      imagem.onerror = () => reject(new Error(`Não foi possível carregar a spritesheet: ${url}`));
      imagem.src = url;
    });
  }

  drawFrame(ctx, coluna, linha, x, y, largura, altura) {
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(
      this.imagem,
      coluna * this.larguraQuadro,
      linha * this.alturaQuadro,
      this.larguraQuadro,
      this.alturaQuadro,
      Math.round(x),
      Math.round(y),
      Math.round(largura),
      Math.round(altura)
    );
  }
}

function retanguloPixel(ctx, x, y, largura, altura, cor) {
  ctx.fillStyle = cor;
  ctx.fillRect(x, y, largura, altura);
}

function desenharQuadro(ctx, x, y, paleta, direcao, passo) {
  const c = paleta;
  const andando = passo > 0;
  const pernaEsquerda = andando && passo === 1 ? -1 : 0;
  const pernaDireita = andando && passo === 2 ? -1 : 0;
  const bracoEsquerdo = andando && passo === 2 ? -1 : 0;
  const bracoDireito = andando && passo === 1 ? -1 : 0;

  ctx.fillStyle = 'rgba(43,26,14,0.2)';
  ctx.beginPath();
  ctx.ellipse(x + 8, y + 22, 6, 1.5, 0, 0, Math.PI * 2);
  ctx.fill();

  if (direcao === 'up') {
    retanguloPixel(ctx, x + 5 + pernaEsquerda, y + 16, 3, 5, c.calca);
    retanguloPixel(ctx, x + 9 + pernaDireita, y + 16, 3, 5, c.calca);
    retanguloPixel(ctx, x + 4, y + 7, 8, 10, c.blusa);
    retanguloPixel(ctx, x + 3, y + 2, 10, 7, c.cabelo);
    retanguloPixel(ctx, x + 2, y + 4, 2, 4, c.cabelo);
    retanguloPixel(ctx, x + 12, y + 4, 2, 4, c.cabelo);
    retanguloPixel(ctx, x + 5, y + 10, 6, 1, c.detalhe);
  } else {
    retanguloPixel(ctx, x + 4 + pernaEsquerda, y + 16, 3, 5, c.calca);
    retanguloPixel(ctx, x + 9 + pernaDireita, y + 16, 3, 5, c.calca);
    retanguloPixel(ctx, x + 3 + pernaEsquerda, y + 20, 5, 2, c.sapato);
    retanguloPixel(ctx, x + 8 + pernaDireita, y + 20, 5, 2, c.sapato);
    retanguloPixel(ctx, x + 3, y + 10 + bracoEsquerdo, 2, 6, c.blusa);
    retanguloPixel(ctx, x + 11, y + 10 + bracoDireito, 2, 6, c.blusa);
    retanguloPixel(ctx, x + 4, y + 9, 8, 8, c.blusa);
    retanguloPixel(ctx, x + 5, y + 15, 6, 2, c.detalhe);
    retanguloPixel(ctx, x + 2, y + 12 + bracoEsquerdo, 2, 3, c.pele);
    retanguloPixel(ctx, x + 12, y + 12 + bracoDireito, 2, 3, c.pele);

    if (direcao === 'left' || direcao === 'right') {
      const lado = direcao === 'left' ? -1 : 1;
      retanguloPixel(ctx, x + (lado < 0 ? 4 : 6), y + 3, 7, 7, c.pele);
      retanguloPixel(ctx, x + (lado < 0 ? 3 : 6), y + 2, 8, 3, c.cabelo);
      retanguloPixel(ctx, x + (lado < 0 ? 3 : 12), y + 4, 2, 5, c.cabelo);
      retanguloPixel(ctx, x + (lado < 0 ? 5 : 10), y + 6, 1, 1, c.olho);
    } else {
      retanguloPixel(ctx, x + 5, y + 3, 6, 7, c.pele);
      retanguloPixel(ctx, x + 4, y + 2, 8, 3, c.cabelo);
      retanguloPixel(ctx, x + 3, y + 4, 2, 4, c.cabelo);
      retanguloPixel(ctx, x + 11, y + 4, 2, 4, c.cabelo);
      retanguloPixel(ctx, x + 6, y + 6, 1, 1, c.olho);
      retanguloPixel(ctx, x + 9, y + 6, 1, 1, c.olho);
      retanguloPixel(ctx, x + 7, y + 8, 2, 1, c.boca);
    }

    if (c.cabeloTipo === 'crespo') {
      retanguloPixel(ctx, x + 3, y + 1, 10, 3, c.cabelo);
      retanguloPixel(ctx, x + 2, y + 3, 2, 5, c.cabelo);
      retanguloPixel(ctx, x + 12, y + 3, 2, 5, c.cabelo);
    } else if (c.cabeloTipo === 'cacheado') {
      retanguloPixel(ctx, x + 3, y + 1, 10, 2, c.cabelo);
      retanguloPixel(ctx, x + 2, y + 4, 2, 2, c.cabelo);
      retanguloPixel(ctx, x + 12, y + 3, 2, 3, c.cabelo);
      retanguloPixel(ctx, x + 3, y + 7, 1, 2, c.cabelo);
      retanguloPixel(ctx, x + 12, y + 7, 1, 2, c.cabelo);
    } else if (c.cabeloTipo === 'trancas') {
      retanguloPixel(ctx, x + 3, y + 3, 2, 9, c.cabelo);
      retanguloPixel(ctx, x + 11, y + 3, 2, 9, c.cabelo);
      retanguloPixel(ctx, x + 3, y + 8, 1, 1, c.detalhe);
      retanguloPixel(ctx, x + 12, y + 10, 1, 1, c.detalhe);
    } else if (c.cabeloTipo === 'liso') {
      retanguloPixel(ctx, x + 3, y + 2, 10, 3, c.cabelo);
      retanguloPixel(ctx, x + 3, y + 4, 2, 7, c.cabelo);
      retanguloPixel(ctx, x + 11, y + 4, 2, 7, c.cabelo);
    }

    if (c.chapeu) {
      retanguloPixel(ctx, x + 3, y + 2, 10, 2, c.chapeu);
      retanguloPixel(ctx, x + 5, y, 6, 3, c.chapeu);
      retanguloPixel(ctx, x + 6, y + 2, 4, 1, c.faixa || c.detalhe);
    }
  }

  if (c.celular) {
    retanguloPixel(ctx, x + 12, y + 12, 2, 4, '#2B1A0E');
    retanguloPixel(ctx, x + 12, y + 12, 1, 3, c.celular);
    retanguloPixel(ctx, x + 12, y + 15, 1, 1, '#F0D9A0');
  } else if (c.acessorio) {
    retanguloPixel(ctx, x + 3, y + 9, 2, 2, c.acessorio);
  }
}

function chavePaleta(paleta) {
  return Object.values(paleta).join('|');
}

function criarFolhaPersonagem(paleta) {
  const chave = chavePaleta(paleta);
  if (folhasDePersonagem.has(chave)) return folhasDePersonagem.get(chave);

  const canvas = document.createElement('canvas');
  canvas.width = LARGURA_QUADRO * QUADROS_POR_DIRECAO;
  canvas.height = ALTURA_QUADRO * Object.keys(DIRECOES).length;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  Object.entries(DIRECOES).forEach(([direcao, linha]) => {
    for (let coluna = 0; coluna < QUADROS_POR_DIRECAO; coluna += 1) {
      desenharQuadro(ctx, coluna * LARGURA_QUADRO, linha * ALTURA_QUADRO, paleta, direcao, coluna);
    }
  });

  const folha = new SpriteSheet(canvas, LARGURA_QUADRO, ALTURA_QUADRO);
  folhasDePersonagem.set(chave, folha);
  return folha;
}

const PALETAS = {
  jogador: { pele: '#B87449', cabelo: '#35251D', blusa: '#2F6B3A', calca: '#496A79', detalhe: '#D9A441', sapato: '#5A3A1E', olho: '#2B1A0E', boca: '#8A3D2B' },
  cida: { pele: '#9B5D3F', cabelo: '#D5C6A0', blusa: '#8A4F47', calca: '#56483E', detalhe: '#D9A441', sapato: '#5A3A1E', olho: '#2B1A0E', boca: '#8A3D2B', acessorio: '#C94848' },
  nelson: { pele: '#B87449', cabelo: '#4B382A', blusa: '#3D7180', calca: '#5E5040', detalhe: '#F0D9A0', sapato: '#5A3A1E', olho: '#2B1A0E', boca: '#8A3D2B', chapeu: '#8A5A33', faixa: '#D9A441' },
  jaque: { pele: '#9B5D3F', cabelo: '#35251D', blusa: '#7A4F8A', calca: '#394A65', detalhe: '#F0D9A0', sapato: '#5A3A1E', olho: '#2B1A0E', boca: '#8A3D2B', celular: '#3D7180' },
  tiao: { pele: '#B87449', cabelo: '#35251D', blusa: '#D9A441', calca: '#496A79', detalhe: '#8A5A33', sapato: '#8A5A33', olho: '#2B1A0E', boca: '#8A3D2B', chapeu: '#5A3A1E', faixa: '#D9A441' },
  rita: { pele: '#B87449', cabelo: '#35251D', blusa: '#A64C3A', calca: '#496A79', detalhe: '#F0D9A0', sapato: '#5A3A1E', olho: '#2B1A0E', boca: '#8A3D2B', celular: '#3D7180' },
  davi: { pele: '#C9865A', cabelo: '#35251D', blusa: '#3F813D', calca: '#496A79', detalhe: '#D9A441', sapato: '#5A3A1E', olho: '#2B1A0E', boca: '#8A3D2B', chapeu: '#8A5A33', faixa: '#D9A441' }
};

const AVATAR_PALETAS = {
  a1: { ...PALETAS.jogador, cabeloTipo: 'cacheado' },
  a2: { ...PALETAS.jogador, pele: '#5D382E', cabeloTipo: 'crespo', blusa: '#3D7180', calca: '#5E5040' },
  a3: { ...PALETAS.jogador, pele: '#E1B78E', cabelo: '#35251D', cabeloTipo: 'liso', blusa: '#A64C3A' },
  a4: { ...PALETAS.jogador, pele: '#4B302A', cabeloTipo: 'trancas', blusa: '#7A4F8A' },
  a5: { ...PALETAS.jogador, pele: '#E1B78E', cabelo: '#5B3827', cabeloTipo: 'cacheado', blusa: '#D9A441', calca: '#496A79' },
  a6: { ...PALETAS.jogador, pele: '#9B5D3F', cabeloTipo: 'trancas', blusa: '#3D7180', calca: '#56483E' },
  a7: { ...PALETAS.jogador, pele: '#4B302A', cabeloTipo: 'liso', blusa: '#5FA844', calca: '#394A65' },
  a8: { ...PALETAS.jogador, pele: '#C9865A', cabeloTipo: 'crespo', blusa: '#A64C3A', calca: '#5E5040' }
};

const PALETAS_MORADORES = [
  { ...PALETAS.jogador, blusa: '#F0D9A0', calca: '#496A79', chapeu: '#A78354' },
  { ...PALETAS.jogador, blusa: '#A64C3A', calca: '#5E5040', chapeu: '#D9A441' },
  { ...PALETAS.jogador, blusa: '#3D7180', calca: '#56483E', chapeu: '#8A5A33' }
];

const NPC_PALETAS = {
  'dona-cida': PALETAS.cida,
  nelson: PALETAS.nelson,
  jaque: PALETAS.jaque,
  tiao: PALETAS.tiao,
  rita: PALETAS.rita,
  davi: PALETAS.davi,
  erveiro: { ...PALETAS.nelson, pele: '#5D382E', cabelo: '#D5C6A0', blusa: '#2F6B3A', cabeloTipo: 'crespo' }
};

const TIPOS_DE_PISO = ['vila', 'grama', 'mato', 'roca', 'plantacao', 'praia', 'mar', 'mar-fundo', 'caminho', 'madeira', 'ceu', 'lagoa'];
const TIPOS_DE_OBJETO = [
  'arvore', 'palmeira', 'mangue', 'casa', 'casaFarinha', 'casaRural', 'pavilhao', 'barraca', 'canoa', 'saco',
  'forno', 'prensa', 'peneira', 'rede', 'bandeira', 'luminaria', 'viola', 'rabeca', 'adufo',
  'peixe', 'biju', 'cataia', 'placa', 'lixeiraOrganica', 'lixeiraReciclavel',
  'arbusto', 'flor', 'pedra', 'capim', 'cerca'
];
const OBJETOS_GRANDES = new Set([
  'arvore', 'palmeira', 'mangue', 'casa', 'casaFarinha', 'casaRural', 'pavilhao', 'barraca', 'canoa'
]);
const COLUNAS_ATLAS = 8;
const VARIANTES_PISO = 4;
let atlasDePisos = null;
let atlasDeObjetos = null;

function novoAtlas(larguraQuadro, alturaQuadro, quadros) {
  const canvas = document.createElement('canvas');
  canvas.width = larguraQuadro * COLUNAS_ATLAS;
  canvas.height = alturaQuadro * Math.ceil(quadros / COLUNAS_ATLAS);
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  return { canvas, ctx, sheet: new SpriteSheet(canvas, larguraQuadro, alturaQuadro) };
}

function pintarPiso(ctx, tipo, variante) {
  const cores = {
    vila: ['#78B85A', '#80BC5D', '#73B353', '#86C361'],
    grama: ['#61A950', '#5FA844', '#68AF49', '#59A347'],
    mato: ['#2F6B3A', '#326F3D', '#2C6538', '#367442'],
    roca: ['#9C6B3F', '#A27142', '#93633C', '#A87546'],
    plantacao: ['#9C6B3F', '#A27142', '#93633C', '#A87546'],
    praia: ['#F0D9A0', '#EBD39A', '#F3DDA7', '#E8D09A'],
    mar: ['#2BB5C9', '#26ACC1', '#30B8C9', '#25A9BD'],
    lagoa: ['#2BB5C9', '#26ACC1', '#30B8C9', '#25A9BD'],
    'mar-fundo': ['#1B7FA0', '#1A7899', '#207F9D', '#187694'],
    caminho: ['#D9BE82', '#D4B97D', '#DFC78D', '#D2B77B'],
    madeira: ['#8A5A33', '#915E35', '#82552F', '#94623A'],
    ceu: ['#F4C47A', '#F6CB82', '#F1BF70', '#F7D18D']
  };
  const paleta = cores[tipo] || cores.vila;
  ctx.fillStyle = paleta[variante];
  ctx.fillRect(0, 0, 16, 16);

  if (tipo === 'ceu') {
    ctx.fillStyle = '#F8DEA9';
    ctx.fillRect(2 + variante * 2, 4, 3, 1);
    ctx.fillRect(10 - variante, 11, 2, 1);
  } else if (tipo === 'mar' || tipo === 'mar-fundo' || tipo === 'lagoa') {
    ctx.fillStyle = tipo === 'mar-fundo' ? '#45A2B5' : '#8ADDE0';
    ctx.fillRect(2 + (variante % 2) * 5, 4, 4, 1);
    ctx.fillRect(10 - (variante % 2) * 3, 11, 3, 1);
    ctx.fillStyle = tipo === 'mar-fundo' ? '#146581' : '#2098AE';
    ctx.fillRect(5, 8, 3, 1);
  } else if (tipo === 'praia') {
    ctx.fillStyle = '#D9BE82';
    ctx.fillRect(3 + variante, 4, 1, 1);
    ctx.fillRect(11 - variante, 12, 1, 1);
    ctx.fillStyle = '#FFF0C4';
    ctx.fillRect(8, 2 + variante, 1, 1);
  } else if (tipo === 'roca' || tipo === 'plantacao') {
    ctx.fillStyle = '#7E5736';
    ctx.fillRect(0, 13, 16, 2);
    ctx.fillStyle = '#B4824E';
    ctx.fillRect(2, 3 + variante, 2, 1);
    ctx.fillRect(11 - variante, 8, 3, 1);
  } else if (tipo === 'madeira') {
    ctx.fillStyle = '#5A3A1E';
    ctx.fillRect(0, 5, 16, 1);
    ctx.fillRect(0, 11, 16, 1);
    ctx.fillStyle = '#B17A45';
    ctx.fillRect(2 + variante, 2, 2, 1);
    ctx.fillRect(10 - variante, 8, 2, 1);
  } else {
    ctx.fillStyle = tipo === 'mato' ? '#4C8A48' : '#4F9845';
    ctx.fillRect(2 + variante, 3, 1, 1);
    ctx.fillRect(11 - variante, 10, 1, 1);
    ctx.fillStyle = '#D9A441';
    if (variante === 0) ctx.fillRect(7, 7, 1, 1);
  }
}

function pintarObjeto(ctx, tipo, variante) {
  if (tipo === 'arvore') {
    ctx.fillStyle = 'rgba(43,26,14,0.28)';
    ctx.fillRect(5, 25, 22, 4);
    ctx.fillStyle = '#68452B';
    ctx.fillRect(14, 17, 5, 11);
    ctx.fillStyle = '#214F31';
    ctx.fillRect(4, 10, 24, 11);
    ctx.fillRect(7, 5, 18, 12);
    ctx.fillRect(10, 2, 12, 8);
    ctx.fillStyle = '#2F6B3A';
    ctx.fillRect(7 + variante, 8, 14, 9);
    ctx.fillRect(5, 12 + variante, 7, 6);
    ctx.fillStyle = '#5FA844';
    ctx.fillRect(9, 7, 7, 4);
    ctx.fillRect(19 - variante, 12, 5, 4);
    ctx.fillStyle = '#8CCB5E';
    ctx.fillRect(11, 8, 3, 2);
  } else if (tipo === 'palmeira') {
    ctx.fillStyle = 'rgba(43,26,14,0.26)';
    ctx.fillRect(5, 26, 22, 3);
    ctx.fillStyle = '#8A5A33';
    ctx.fillRect(14, 10, 4, 18);
    ctx.fillRect(13, 16, 6, 2);
    ctx.fillStyle = '#2F6B3A';
    ctx.fillRect(3, 7, 12, 3);
    ctx.fillRect(7, 3, 10, 4);
    ctx.fillRect(16, 6, 13, 3);
    ctx.fillRect(18, 10, 10, 3);
    ctx.fillRect(10, 1, 4, 8);
    ctx.fillStyle = '#5FA844';
    ctx.fillRect(5, 6, 9, 2);
    ctx.fillRect(19, 5, 8, 2);
    ctx.fillStyle = '#D9A441';
    ctx.fillRect(13, 8, 2, 2);
    ctx.fillRect(17, 8, 2, 2);
  } else if (tipo === 'mangue') {
    ctx.fillStyle = 'rgba(43,26,14,0.25)';
    ctx.fillRect(3, 26, 26, 3);
    ctx.fillStyle = '#68452B';
    ctx.fillRect(13, 13, 6, 13);
    ctx.fillRect(12, 19, 2, 8);
    ctx.fillRect(18, 18, 2, 9);
    ctx.fillRect(7, 23, 8, 2);
    ctx.fillRect(17, 22, 8, 2);
    ctx.fillStyle = '#214F31';
    ctx.fillRect(5, 7, 22, 10);
    ctx.fillRect(9, 3, 15, 8);
    ctx.fillStyle = '#3F813D';
    ctx.fillRect(8 + variante, 6, 9, 5);
    ctx.fillRect(18, 10, 6, 4);
    ctx.fillStyle = '#8CCB5E';
    ctx.fillRect(10, 5, 3, 2);
  } else if (tipo === 'casa' || tipo === 'casaFarinha' || tipo === 'casaRural') {
    ctx.fillStyle = 'rgba(43,26,14,0.28)';
    ctx.fillRect(2, 28, 28, 3);
    ctx.fillStyle = tipo === 'casaFarinha' ? '#9C6B3F' : '#8A5A33';
    ctx.fillRect(3, 10, 26, 19);
    ctx.fillStyle = tipo === 'casaFarinha' ? '#D9BE82' : '#F6E7C1';
    ctx.fillRect(5, 11, 22, 17);
    ctx.fillStyle = tipo === 'casaRural' ? '#A78354' : tipo === 'casaFarinha' ? '#8A5A33' : '#8A3D2B';
    ctx.fillRect(1, 8, 30, 5);
    ctx.fillRect(5, 4, 22, 6);
    ctx.fillRect(9, 1, 14, 5);
    ctx.fillStyle = '#D9A441';
    ctx.fillRect(3, 11, 26, 2);
    ctx.fillStyle = '#2BB5C9';
    ctx.fillRect(6, 15, 5, 5);
    ctx.fillRect(21, 15, 5, 5);
    ctx.fillStyle = '#8A5A33';
    ctx.fillRect(5, 14, 7, 2);
    ctx.fillRect(20, 14, 7, 2);
    ctx.fillRect(8, 15, 1, 5);
    ctx.fillRect(23, 15, 1, 5);
    ctx.fillStyle = '#5A3A1E';
    ctx.fillRect(12, 13, 8, 16);
    ctx.fillStyle = '#A78354';
    ctx.fillRect(14, 16, 4, 13);
    ctx.fillStyle = '#D9A441';
    ctx.fillRect(17, 22, 1, 1);
    ctx.fillStyle = '#8A5A33';
    ctx.fillRect(11, 28, 10, 2);
    if (tipo === 'casaFarinha') {
      ctx.fillStyle = '#5A3A1E';
      ctx.fillRect(23, 1, 4, 8);
      ctx.fillStyle = '#B8A48A';
      ctx.fillRect(24, 0, 2, 3);
      ctx.fillStyle = '#D9A441';
      ctx.fillRect(7, 21, 4, 3);
    } else if (tipo === 'casaRural') {
      ctx.fillStyle = '#5A3A1E';
      ctx.fillRect(24, 1, 4, 8);
      ctx.fillStyle = '#B8A48A';
      ctx.fillRect(25, 0, 2, 3);
      ctx.fillStyle = '#8A5A33';
      ctx.fillRect(4, 8, 24, 1);
    }
  } else if (tipo === 'pavilhao') {
    ctx.fillStyle = 'rgba(43,26,14,0.27)';
    ctx.fillRect(2, 25, 28, 4);
    ctx.fillStyle = '#68452B';
    ctx.fillRect(5, 12, 3, 15);
    ctx.fillRect(24, 12, 3, 15);
    ctx.fillRect(8, 20, 16, 2);
    ctx.fillStyle = '#D9A441';
    ctx.fillRect(2, 9, 28, 4);
    ctx.fillRect(6, 5, 20, 5);
    ctx.fillRect(10, 2, 12, 4);
    ctx.fillStyle = '#8A5A33';
    ctx.fillRect(7, 14, 18, 2);
    ctx.fillStyle = '#F0D9A0';
    ctx.fillRect(10, 15, 12, 4);
  } else if (tipo === 'barraca') {
    ctx.fillStyle = 'rgba(43,26,14,0.22)';
    ctx.fillRect(4, 25, 24, 4);
    ctx.fillStyle = '#8A5A33';
    ctx.fillRect(5, 16, 22, 3);
    ctx.fillRect(7, 18, 2, 9);
    ctx.fillRect(23, 18, 2, 9);
    ctx.fillStyle = '#A64C3A';
    ctx.fillRect(4, 10, 24, 6);
    ctx.fillStyle = '#F0D9A0';
    ctx.fillRect(4, 14, 24, 2);
    ctx.fillStyle = '#D9A441';
    ctx.fillRect(5, 8, 22, 3);
  } else if (tipo === 'canoa') {
    ctx.fillStyle = '#5A3A1E';
    ctx.fillRect(3, 17, 4, 2);
    ctx.fillRect(7, 19, 18, 2);
    ctx.fillRect(25, 17, 4, 2);
    ctx.fillStyle = '#8A5A33';
    ctx.fillRect(5, 14, 22, 4);
    ctx.fillRect(8, 12, 16, 2);
    ctx.fillStyle = '#D9A441';
    ctx.fillRect(8, 15, 16, 1);
    ctx.fillStyle = '#F0D9A0';
    ctx.fillRect(10, 17, 1, 2);
    ctx.fillRect(21, 17, 1, 2);
  } else if (tipo === 'saco') {
    ctx.fillStyle = 'rgba(43,26,14,0.18)';
    ctx.fillRect(5, 25, 22, 3);
    ctx.fillStyle = '#A78354';
    ctx.fillRect(7, 14, 8, 11);
    ctx.fillRect(17, 12, 9, 13);
    ctx.fillStyle = '#D9BE82';
    ctx.fillRect(8, 12, 6, 3);
    ctx.fillRect(19, 10, 5, 3);
    ctx.fillStyle = '#68452B';
    ctx.fillRect(8, 17, 6, 1);
    ctx.fillRect(18, 16, 7, 1);
  } else if (tipo === 'forno') {
    ctx.fillStyle = '#68452B';
    ctx.fillRect(4, 19, 24, 8);
    ctx.fillStyle = '#A64C3A';
    ctx.fillRect(6, 12, 20, 9);
    ctx.fillRect(10, 7, 12, 7);
    ctx.fillStyle = '#5A3A1E';
    ctx.fillRect(12, 18, 8, 7);
    ctx.fillStyle = '#D9A441';
    ctx.fillRect(13, 20, 6, 4);
    ctx.fillStyle = '#F0D9A0';
    ctx.fillRect(15, 21, 2, 2);
  } else if (tipo === 'prensa') {
    ctx.fillStyle = '#5A3A1E';
    ctx.fillRect(6, 5, 3, 23);
    ctx.fillRect(23, 5, 3, 23);
    ctx.fillRect(5, 5, 22, 3);
    ctx.fillRect(10, 15, 12, 3);
    ctx.fillRect(13, 8, 6, 8);
    ctx.fillStyle = '#A78354';
    ctx.fillRect(9, 20, 15, 5);
    ctx.fillStyle = '#D9BE82';
    ctx.fillRect(11, 18, 11, 3);
  } else if (tipo === 'peneira') {
    ctx.fillStyle = '#8A5A33';
    ctx.fillRect(6, 9, 20, 3);
    ctx.fillRect(4, 12, 3, 10);
    ctx.fillRect(25, 12, 3, 10);
    ctx.fillRect(7, 22, 18, 3);
    ctx.fillStyle = '#D9BE82';
    ctx.fillRect(8, 13, 16, 8);
    ctx.fillStyle = '#A78354';
    ctx.fillRect(10, 14, 1, 6);
    ctx.fillRect(14, 14, 1, 6);
    ctx.fillRect(18, 14, 1, 6);
    ctx.fillRect(22, 14, 1, 6);
  } else if (tipo === 'rede') {
    ctx.fillStyle = '#68452B';
    ctx.fillRect(5, 4, 2, 25);
    ctx.fillRect(26, 4, 2, 25);
    ctx.fillStyle = '#F0D9A0';
    ctx.fillRect(7, 8, 18, 2);
    ctx.fillRect(7, 14, 18, 1);
    ctx.fillRect(7, 20, 18, 1);
    ctx.fillRect(7, 26, 18, 2);
    for (let x = 9; x < 25; x += 4) {
      ctx.fillRect(x, 10, 1, 4);
      ctx.fillRect(x + 2, 15, 1, 5);
      ctx.fillRect(x, 21, 1, 5);
    }
  } else if (tipo === 'bandeira') {
    ctx.fillStyle = '#68452B';
    ctx.fillRect(7, 4, 2, 26);
    ctx.fillStyle = '#D9A441';
    ctx.fillRect(9, 5, 15, 2);
    ctx.fillRect(9, 7, 12, 2);
    ctx.fillRect(9, 9, 9, 2);
    ctx.fillStyle = '#A64C3A';
    ctx.fillRect(9, 11, 6, 2);
  } else if (tipo === 'luminaria') {
    ctx.fillStyle = '#68452B';
    ctx.fillRect(15, 3, 2, 26);
    ctx.fillRect(10, 27, 12, 2);
    ctx.fillStyle = '#5A3A1E';
    ctx.fillRect(10, 8, 12, 3);
    ctx.fillRect(12, 7, 8, 2);
    ctx.fillStyle = '#FFE59B';
    ctx.fillRect(12, 11, 8, 9);
    ctx.fillStyle = '#D9A441';
    ctx.fillRect(11, 10, 10, 2);
    ctx.fillRect(11, 19, 10, 2);
  } else if (tipo === 'viola' || tipo === 'rabeca') {
    ctx.fillStyle = '#68452B';
    ctx.fillRect(15, 4, 3, 18);
    ctx.fillRect(12, 3, 9, 3);
    ctx.fillRect(13, 20, 7, 4);
    ctx.fillStyle = tipo === 'viola' ? '#A64C3A' : '#D9A441';
    ctx.fillRect(10, 13, 7, 9);
    ctx.fillRect(12, 11, 4, 3);
    ctx.fillStyle = '#F0D9A0';
    ctx.fillRect(16, 5, 1, 17);
    ctx.fillRect(12, 17, 1, 2);
    ctx.fillRect(14, 16, 1, 2);
  } else if (tipo === 'adufo') {
    ctx.fillStyle = '#8A5A33';
    ctx.fillRect(7, 8, 18, 16);
    ctx.fillRect(10, 5, 12, 3);
    ctx.fillRect(10, 24, 12, 3);
    ctx.fillStyle = '#F0D9A0';
    ctx.fillRect(10, 11, 12, 10);
    ctx.fillStyle = '#D9A441';
    ctx.fillRect(12, 13, 2, 2);
    ctx.fillRect(18, 17, 2, 2);
  } else if (tipo === 'peixe') {
    ctx.fillStyle = '#7A8790';
    ctx.fillRect(7, 12, 16, 9);
    ctx.fillRect(4, 14, 4, 5);
    ctx.fillRect(22, 14, 5, 5);
    ctx.fillStyle = '#F0D9A0';
    ctx.fillRect(10, 14, 2, 2);
    ctx.fillStyle = '#5A3A1E';
    ctx.fillRect(10, 15, 1, 1);
  } else if (tipo === 'biju') {
    ctx.fillStyle = '#D9A441';
    ctx.fillRect(7, 12, 18, 9);
    ctx.fillRect(9, 9, 14, 3);
    ctx.fillStyle = '#F0D9A0';
    ctx.fillRect(10, 13, 12, 2);
    ctx.fillStyle = '#A78354';
    ctx.fillRect(11, 18, 10, 1);
  } else if (tipo === 'cataia') {
    ctx.fillStyle = '#68452B';
    ctx.fillRect(15, 15, 2, 13);
    ctx.fillStyle = '#2F6B3A';
    ctx.fillRect(7, 10, 9, 4);
    ctx.fillRect(17, 6, 9, 4);
    ctx.fillRect(6, 17, 10, 4);
    ctx.fillRect(17, 14, 9, 4);
    ctx.fillStyle = '#8CCB5E';
    ctx.fillRect(9, 11, 4, 2);
    ctx.fillRect(19, 7, 4, 2);
  } else if (tipo === 'placa') {
    ctx.fillStyle = '#68452B';
    ctx.fillRect(15, 15, 3, 14);
    ctx.fillStyle = '#8A5A33';
    ctx.fillRect(4, 7, 24, 12);
    ctx.fillStyle = '#D9A441';
    ctx.fillRect(6, 9, 20, 8);
    ctx.fillStyle = '#5A3A1E';
    ctx.fillRect(9, 11, 14, 1);
    ctx.fillRect(12, 14, 8, 1);
  } else if (tipo === 'arbusto') {
    ctx.fillStyle = 'rgba(43,26,14,0.18)';
    ctx.fillRect(4, 26, 24, 3);
    ctx.fillStyle = '#214F31';
    ctx.fillRect(4, 16, 10, 10);
    ctx.fillRect(11, 10, 12, 16);
    ctx.fillRect(20, 17, 8, 9);
    ctx.fillStyle = '#3F813D';
    ctx.fillRect(6 + variante, 14, 9, 9);
    ctx.fillRect(15, 11 + variante, 8, 11);
    ctx.fillStyle = '#8CCB5E';
    ctx.fillRect(8, 15, 3, 3);
    ctx.fillRect(18, 13, 3, 2);
  } else if (tipo === 'flor') {
    const cores = ['#D9A441', '#A64C3A', '#F0D9A0'];
    const cor = cores[variante];
    ctx.fillStyle = '#3F813D';
    ctx.fillRect(15, 15, 2, 14);
    ctx.fillRect(12, 20, 4, 2);
    ctx.fillRect(16, 23, 4, 2);
    ctx.fillStyle = cor;
    ctx.fillRect(13, 10, 3, 3);
    ctx.fillRect(17, 10, 3, 3);
    ctx.fillRect(15, 8, 3, 3);
    ctx.fillRect(15, 13, 3, 3);
    ctx.fillStyle = '#D9A441';
    ctx.fillRect(15, 11, 3, 3);
  } else if (tipo === 'pedra') {
    ctx.fillStyle = 'rgba(43,26,14,0.18)';
    ctx.fillRect(5, 25, 22, 3);
    ctx.fillStyle = variante === 1 ? '#7E8581' : '#9A9B8C';
    ctx.fillRect(5, 19, 9, 7);
    ctx.fillRect(11, 14, 12, 12);
    ctx.fillRect(20, 18, 7, 8);
    ctx.fillStyle = '#C3BBA0';
    ctx.fillRect(13, 16, 5, 3);
    ctx.fillRect(7, 20, 3, 2);
  } else if (tipo === 'capim') {
    ctx.fillStyle = '#2F6B3A';
    ctx.fillRect(8, 14, 2, 14);
    ctx.fillRect(12, 9 + variante, 2, 19);
    ctx.fillRect(17, 12, 2, 16);
    ctx.fillRect(22, 16, 2, 12);
    ctx.fillStyle = '#8CCB5E';
    ctx.fillRect(6, 17, 3, 2);
    ctx.fillRect(13, 13, 3, 2);
    ctx.fillRect(19, 16, 3, 2);
    if (variante === 0) {
      ctx.fillStyle = '#D9A441';
      ctx.fillRect(11, 6, 3, 3);
    }
  } else if (tipo === 'cerca') {
    ctx.fillStyle = '#68452B';
    if (variante === 2) {
      ctx.fillRect(6, 2, 4, 27);
      ctx.fillRect(22, 2, 4, 27);
      ctx.fillRect(8, 7, 16, 3);
      ctx.fillRect(8, 19, 16, 3);
    } else {
      ctx.fillRect(2, 20, 28, 4);
      ctx.fillRect(5, 10, 4, 19);
      ctx.fillRect(23, 10, 4, 19);
      ctx.fillRect(4, 13, 24, 3);
    }
    ctx.fillStyle = '#A78354';
    ctx.fillRect(6, 11, 2, 2);
    ctx.fillRect(24, 11, 2, 2);
  } else if (tipo === 'lixeiraOrganica' || tipo === 'lixeiraReciclavel') {
    ctx.fillStyle = '#68452B';
    ctx.fillRect(8, 10, 16, 17);
    ctx.fillRect(6, 8, 20, 3);
    ctx.fillStyle = tipo === 'lixeiraOrganica' ? '#5FA844' : '#3D7180';
    ctx.fillRect(10, 12, 12, 12);
    ctx.fillStyle = '#F0D9A0';
    ctx.fillRect(12, 14, 8, 1);
    ctx.fillRect(12, 18, 8, 1);
  }
}

function atlasIndex(atlas, index) {
  return { coluna: index % COLUNAS_ATLAS, linha: Math.floor(index / COLUNAS_ATLAS) };
}

function criarAtlasPisos() {
  if (atlasDePisos) return atlasDePisos;
  const atlas = novoAtlas(16, 16, TIPOS_DE_PISO.length * VARIANTES_PISO);
  TIPOS_DE_PISO.forEach((tipo, tipoIndex) => {
    for (let variante = 0; variante < VARIANTES_PISO; variante += 1) {
      const index = tipoIndex * VARIANTES_PISO + variante;
      const { coluna, linha } = atlasIndex(atlas, index);
      atlas.ctx.save();
      atlas.ctx.translate(coluna * 16, linha * 16);
      pintarPiso(atlas.ctx, tipo, variante);
      atlas.ctx.restore();
    }
  });
  atlasDePisos = atlas.sheet;
  return atlasDePisos;
}

function criarAtlasObjetos() {
  if (atlasDeObjetos) return atlasDeObjetos;
  const atlas = novoAtlas(32, 32, TIPOS_DE_OBJETO.length * 3);
  TIPOS_DE_OBJETO.forEach((tipo, tipoIndex) => {
    for (let variante = 0; variante < 3; variante += 1) {
      const index = tipoIndex * 3 + variante;
      const { coluna, linha } = atlasIndex(atlas, index);
      atlas.ctx.save();
      atlas.ctx.translate(coluna * 32, linha * 32);
      pintarObjeto(atlas.ctx, tipo, variante);
      atlas.ctx.restore();
    }
  });
  atlasDeObjetos = atlas.sheet;
  return atlasDeObjetos;
}

export function desenharPiso(ctx, tipo, x, y, tile, seed = 0, fundoProfundo = false) {
  const piso = tipo === 'mar' && fundoProfundo ? 'mar-fundo'
    : ['casa', 'casaFarinha', 'casaRural', 'pavilhao', 'barraca', 'canoa', 'saco'].includes(tipo) ? 'vila'
      : tipo;
  const pisoIndex = Math.max(0, TIPOS_DE_PISO.indexOf(piso));
  const pisoAtlas = criarAtlasPisos();
  const pisoFrame = atlasIndex(pisoAtlas, pisoIndex * VARIANTES_PISO + Math.abs(seed) % VARIANTES_PISO);
  pisoAtlas.drawFrame(ctx, pisoFrame.coluna, pisoFrame.linha, x, y, tile, tile);
}

export function desenharObjeto(ctx, tipo, x, y, tile, seed = 0) {
  let objeto = null;
  let variante = Math.abs(seed) % 3;
  const tipoDesenho = tipo.startsWith('planta-medicinal-') ? 'cataia' : tipo;
  if (tipo === 'mato') {
    if (Math.abs(seed * 13 + 7) % 5 === 0) objeto = 'palmeira';
    else if (Math.abs(seed * 7 + 3) % 7 === 0) objeto = 'mangue';
    else if (Math.abs(seed * 5 + 1) % 3 !== 0) objeto = 'arvore';
  } else if (TIPOS_DE_OBJETO.includes(tipoDesenho)) {
    objeto = tipoDesenho;
  }

  if (objeto) {
    const objetoAtlas = criarAtlasObjetos();
    const objetoIndex = TIPOS_DE_OBJETO.indexOf(objeto) * 3 + variante;
    const objetoFrame = atlasIndex(objetoAtlas, objetoIndex);
    const tamanho = ['casa', 'casaFarinha', 'casaRural'].includes(objeto)
      ? tile * 3.6
      : OBJETOS_GRANDES.has(objeto) ? tile * 2 : tile;
    objetoAtlas.drawFrame(
      ctx,
      objetoFrame.coluna,
      objetoFrame.linha,
      x - tamanho / 2,
      y - tamanho,
      tamanho,
      tamanho
    );
  }
}

export function desenharPersonagem(ctx, centroX, baseY, tile, paleta, tick = 0, direcao = 'down', andando = false) {
  const folha = criarFolhaPersonagem(paleta);
  const escala = (tile / LARGURA_QUADRO) * 0.6;
  const quadro = andando ? 1 + (Math.floor(tick / 7) % 2) : Math.floor(tick / 30) % 2;
  const linha = DIRECOES[direcao] ?? DIRECOES.down;
  const respiracao = andando ? 0 : (Math.floor(tick / 30) % 2) * escala;
  folha.drawFrame(
    ctx,
    quadro,
    linha,
    centroX - (LARGURA_QUADRO * escala) / 2,
    baseY - ALTURA_QUADRO * escala - respiracao,
    LARGURA_QUADRO * escala,
    ALTURA_QUADRO * escala
  );
}

export function desenharJogador(ctx, centroX, baseY, tile, tick, direcao, andando, avatar) {
  desenharPersonagem(ctx, centroX, baseY, tile, AVATAR_PALETAS[avatar] || AVATAR_PALETAS.a1, tick, direcao, andando);
}

export function desenharNpc(ctx, centroX, baseY, tile, tick, id) {
  desenharPersonagem(ctx, centroX, baseY, tile, NPC_PALETAS[id] || PALETAS.jogador, tick, 'down');
}

export function desenharMorador(ctx, centroX, baseY, tile, tick, direcao = 'down', andando = false, variante = 0) {
  desenharPersonagem(ctx, centroX, baseY, tile, PALETAS_MORADORES[variante % PALETAS_MORADORES.length], tick, direcao, andando);
}

export function desenharDancarino(ctx, centroX, baseY, tile, tick, indice, estilo = 'homem') {
  const px = tile / 16;
  const passo = Math.floor(tick / 8 + indice) % 2;
  const base = Math.round(baseY);
  const x = Math.round(centroX);
  const mulher = estilo === 'mulher';
  const pele = indice % 2 ? '#9B5D3F' : '#B87449';
  const camisa = indice % 3 === 0 ? '#F6E7C1' : '#F0D9A0';

  retanguloPixel(ctx, x - 5 * px, base - 2 * px, 10 * px, 2 * px, 'rgba(43,26,14,0.22)');
  retanguloPixel(ctx, x - 2 * px, base - 15 * px, 4 * px, 4 * px, pele);
  retanguloPixel(ctx, x - 4 * px, base - 17 * px, 8 * px, 2 * px, '#D9BE82');
  retanguloPixel(ctx, x - 3 * px, base - 19 * px, 6 * px, 2 * px, '#A78354');
  retanguloPixel(ctx, x - 3 * px, base - 11 * px, 6 * px, 6 * px, camisa);
  retanguloPixel(ctx, x - 5 * px, base - 10 * px + passo * px, 2 * px, 5 * px, camisa);
  retanguloPixel(ctx, x + 3 * px, base - 10 * px - passo * px, 2 * px, 5 * px, camisa);

  if (mulher) {
    const saia = indice % 2 ? '#A64C3A' : '#7A4F8A';
    retanguloPixel(ctx, x - 5 * px, base - 6 * px, 10 * px, 4 * px, saia);
    retanguloPixel(ctx, x - 6 * px, base - 3 * px, 12 * px, 2 * px, '#D9A441');
    retanguloPixel(ctx, x - 2 * px, base - 2 * px, 2 * px, 2 * px, '#5A3A1E');
    retanguloPixel(ctx, x + 1 * px, base - 2 * px, 2 * px, 2 * px, '#5A3A1E');
  } else {
    retanguloPixel(ctx, x - 3 * px, base - 6 * px, 2 * px, 4 * px + passo * px, '#496A79');
    retanguloPixel(ctx, x + 1 * px, base - 6 * px, 2 * px, 4 * px - passo * px, '#496A79');
    retanguloPixel(ctx, x - 4 * px, base - 2 * px, 4 * px, 2 * px, '#68452B');
    retanguloPixel(ctx, x, base - 2 * px, 4 * px, 2 * px, '#68452B');
    retanguloPixel(ctx, x - 4 * px, base - 2 * px, 4 * px, 1 * px, '#D9A441');
    retanguloPixel(ctx, x, base - 2 * px, 4 * px, 1 * px, '#D9A441');
  }
}

export function desenharMusico(ctx, centroX, baseY, tile, tick, instrumento) {
  const px = tile / 16;
  const x = Math.round(centroX);
  const base = Math.round(baseY);
  const camisa = instrumento === 'rabeca' ? '#F0D9A0' : '#F6E7C1';

  retanguloPixel(ctx, x - 3 * px, base - 2 * px, 6 * px, 2 * px, 'rgba(43,26,14,0.22)');
  retanguloPixel(ctx, x - 2 * px, base - 15 * px, 4 * px, 4 * px, '#B87449');
  retanguloPixel(ctx, x - 4 * px, base - 17 * px, 8 * px, 2 * px, '#D9BE82');
  retanguloPixel(ctx, x - 3 * px, base - 19 * px, 6 * px, 2 * px, '#A78354');
  retanguloPixel(ctx, x - 3 * px, base - 11 * px, 6 * px, 6 * px, camisa);
  retanguloPixel(ctx, x - 4 * px, base - 5 * px, 2 * px, 3 * px, '#496A79');
  retanguloPixel(ctx, x + 2 * px, base - 5 * px, 2 * px, 3 * px, '#496A79');

  if (instrumento === 'adufo') {
    retanguloPixel(ctx, x + 3 * px, base - 11 * px, 7 * px, 7 * px, '#8A5A33');
    retanguloPixel(ctx, x + 4 * px, base - 10 * px, 5 * px, 5 * px, '#F0D9A0');
    retanguloPixel(ctx, x + 5 * px, base - 9 * px, 1 * px, 1 * px, '#D9A441');
    retanguloPixel(ctx, x + 7 * px, base - 7 * px, 1 * px, 1 * px, '#D9A441');
  } else {
    const cor = instrumento === 'viola' ? '#A64C3A' : '#D9A441';
    retanguloPixel(ctx, x + 3 * px, base - 12 * px, 4 * px, 7 * px, cor);
    retanguloPixel(ctx, x + 5 * px, base - 17 * px, 2 * px, 7 * px, '#68452B');
    retanguloPixel(ctx, x + 7 * px, base - 12 * px, 1 * px, 8 * px, '#F0D9A0');
    if (instrumento === 'rabeca') {
      retanguloPixel(ctx, x + 8 * px, base - 14 * px, 1 * px, 10 * px, '#5A3A1E');
    }
  }
}

export function desenharAve(ctx, x, y, tile, tick, pousada = false) {
  const px = Math.max(2, tile / 32);
  const flap = Math.floor(tick / 8) % 2;
  ctx.fillStyle = '#5A3A1E';
  if (pousada) {
    ctx.fillRect(x - 3 * px, y, 6 * px, 2 * px);
    ctx.fillRect(x + 2 * px, y + px, 2 * px, px);
    ctx.fillRect(x - px, y + 2 * px, px, 2 * px);
    ctx.fillRect(x + 2 * px, y + 2 * px, px, 2 * px);
    ctx.fillRect(x - 2 * px, y + 3 * px, px, 2 * px);
  } else {
    ctx.fillRect(x - 4 * px, y, 3 * px, px);
    ctx.fillRect(x + px, y, 3 * px, px);
    ctx.fillRect(x - px, y + px, 2 * px, 2 * px);
    ctx.fillRect(x - (flap ? 4 : 2) * px, y + (flap ? -2 : -px), 3 * px, px);
    ctx.fillRect(x + px, y + (flap ? -2 : -px), 3 * px, px);
  }
}

export function desenharCachorro(ctx, centroX, baseY, tile, tick, direcao = 'down', andando = false) {
  const pixel = Math.max(2, Math.floor(tile / 16));
  const y = Math.round(baseY - 12 * pixel + (andando ? 0 : Math.sin(tick / 18) * pixel));
  const corpo = '#8A5A33';
  const focinho = '#D9A441';
  retanguloPixel(ctx, centroX - 5 * pixel, y + 4 * pixel, 10 * pixel, 5 * pixel, corpo);
  const passo = andando && Math.floor(tick / 6) % 2 ? pixel : 0;
  const pata = '#5A3A1E';
  retanguloPixel(ctx, centroX - 4 * pixel, y + 8 * pixel, 2 * pixel, 3 * pixel + passo, pata);
  retanguloPixel(ctx, centroX + 2 * pixel, y + 8 * pixel, 2 * pixel, 3 * pixel - passo, pata);

  if (direcao === 'up' || direcao === 'down') {
    retanguloPixel(ctx, centroX - 4 * pixel, y + (direcao === 'up' ? 1 : 2) * pixel, 8 * pixel, 5 * pixel, corpo);
    retanguloPixel(ctx, centroX - 5 * pixel, y + 2 * pixel, 2 * pixel, 3 * pixel, corpo);
    retanguloPixel(ctx, centroX + 3 * pixel, y + 2 * pixel, 2 * pixel, 3 * pixel, corpo);
    if (direcao === 'down') {
      retanguloPixel(ctx, centroX - 2 * pixel, y + 2 * pixel, 4 * pixel, 3 * pixel, focinho);
      retanguloPixel(ctx, centroX - pixel, y + 2 * pixel, pixel, pixel, '#2B1A0E');
      retanguloPixel(ctx, centroX + pixel, y + 2 * pixel, pixel, pixel, '#2B1A0E');
    }
  } else {
    const lado = direcao === 'left' ? -1 : 1;
    retanguloPixel(ctx, centroX + lado * 2 * pixel, y + 2 * pixel, 5 * pixel, 5 * pixel, corpo);
    retanguloPixel(ctx, centroX + lado * 5 * pixel, y + 4 * pixel, 3 * pixel, 2 * pixel, focinho);
    retanguloPixel(ctx, centroX + lado * 3 * pixel, y + 3 * pixel, pixel, pixel, '#2B1A0E');
    retanguloPixel(ctx, centroX - 5 * pixel, y + 2 * pixel, 2 * pixel, 3 * pixel, corpo);
  }
}

const RETRATOS = {
  'Dona Cida': PALETAS.cida,
  'Seu Nelson': PALETAS.nelson,
  'Jaque': PALETAS.jaque,
  'Rita': PALETAS.rita,
  'Mestre Tião': PALETAS.tiao,
  'Davi': PALETAS.davi,
  'Rita e Jaque': PALETAS.rita,
  'Caderno de Saberes': PALETAS.jogador
};

export function paletaRetrato(nome) {
  return RETRATOS[nome] || PALETAS.jogador;
}
