# AGENTS.md: Dia na Ponta Oeste

## Projeto
Jogo educativo web (HTML, CSS e JavaScript puro, módulos ES, sem build) sobre a vida da comunidade caiçara da Ponta Oeste, no litoral do Paraná. Público: crianças e adolescentes de 10 a 16 anos, em computador ou celular. Projeto extensionista da UFPR (Gestão da Informação). Código, comentários e textos em português.

## Como rodar e verificar
- Rodar: `python -m http.server 8000` na raiz e abrir http://localhost:8000
- Não há testes automatizados nem build. Verifique no navegador e confira o console (zero erros).

## Estrutura
- index.html, css/estilo.css
- js/main.js (loop e entrada), js/mundo.js (mapa, NPCs, colisão, caminho BFS), js/sprites.js (desenho em Canvas), js/ui.js, js/dialogo.js, js/missoes.js, js/estado.js (estado e localStorage), js/acessibilidade.js, js/som.js
- dados/conteudo.js (textos, missões, cartas, evento), dados/personagens.js
- docs/NARRATIVA.md e docs/MISSOES_E_LOCAIS.md (conteúdo cultural: leia antes de escrever qualquer texto)

## Antes de editar
1. Leia os arquivos que a tarefa toca, inclusive js/main.js e js/sprites.js.
2. Escreva em 5 a 10 linhas o que entendeu e o plano. Só depois implemente.
3. Leia docs/NARRATIVA.md e docs/MISSOES_E_LOCAIS.md antes de criar texto, personagem, missão ou local.

## Regras invioláveis
- Sem dependências externas, CDN, imagens ou arquivos de áudio. Sprites via Canvas, sons via Web Audio.
- Mantenha a pixel art, a paleta das variáveis `:root` do CSS e `imageSmoothingEnabled = false`.
- Não quebre: acessibilidade (letra maior, leitura fácil, alto contraste, reduzir movimento, som, setas), salvamento em localStorage, caderno de saberes, indicadores, diálogos, tutorial, teclado e toque.
- Estado salvo antigo deve continuar carregando. Todo campo novo entra em `ESTADO_PADRAO` (estado.js) com valor padrão.
- Desempenho: fluido em celular médio. Desenhe cenário estático uma vez em cache (atlas ou canvas offscreen). Não redesenhe o mapa inteiro a cada quadro.
- Com `reduzirMovimento` ativo, todas as animações de cenário ficam paradas.
- Faça só o que a tarefa pede. Não renomeie nem reformate arquivos sem relação com ela.
- Se uma regra daqui conflitar com o pedido, pare e pergunte.

## Convenções de código
- Dado em um lugar só: nenhuma coordenada, nome ou texto duplicado. Quem precisa importa do cadastro.
- Os imports e o index.html usam sufixo de versão. Use o mesmo sufixo em todo import novo e, ao mudar, mude todos juntos. Sufixos diferentes carregam o mesmo módulo duas vezes.
- Mapa em tiles de 16 px. Pessoa: 1 tile de largura, cerca de 1,5 de altura. Porta um pouco mais alta que a pessoa. Casa com 3 a 4 vezes a altura da pessoa.
- IDs em minúsculas com hífen (`dona-cida`, `casa-de-farinha`).
- Funções pequenas, nomes em português, nenhuma lógica de jogo dentro dos arquivos de desenho.

## Textos
Siga a seção «Linguagem» de docs/NARRATIVA.md. Todo fato cultural, legal ou histórico novo entra com `validar: true`. Em dúvida, escreva de forma geral e marque.

## Definição de pronto
- [ ] Console do navegador sem erros e sem avisos novos.
- [ ] O jogo abre, passa por abertura, personalização e mapa, salva e recarrega.
- [ ] Testado com janela larga (1280 px) e estreita (390 px).
- [ ] Alto contraste e reduzir movimento ativos: nada quebra.
- [ ] README.md atualizado com o que mudou.
- [ ] Resposta final com arquivos alterados, o que mudou, como testar e o que ficou de fora.
