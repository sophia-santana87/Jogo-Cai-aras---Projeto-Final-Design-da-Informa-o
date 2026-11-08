# Dia na Ponta Oeste

Projeto final extensionista em HTML, CSS e JavaScript para um MVP de jogo educativo web inspirado na cultura caiçara da Ponta Oeste.

## Equipe
- Bianca Vasconcelos de Lima
- Katryni Haaby dos Santos Bueno
- Luana Harmatiuk Guimarães
- Sophia Santana da Silva
- Vanessa da Silva Costa

## Contexto
Jogo educativo com foco em escuta, pesquisa e cultura caiçara, pensado para crianças e adolescentes, com textos curtos, aprendizado por escolhas e uma abordagem respeitosa com a comunidade.

## Como executar
1. Abra a pasta do projeto em um navegador moderno.
2. Para ambiente local, rode um servidor estático simples:
   ```bash
   python -m http.server 8000
   ```
3. Acesse: http://localhost:8000

## Telas e acessibilidade
- A interface se adapta a celulares, tablets e computadores, em retrato ou paisagem.
- O mapa Canvas ajusta o enquadramento ao tamanho da janela sem esticar os pixels.
- Controles de toque, áreas seguras de celular, diálogos roláveis e opções de acessibilidade são mantidos.
- Para verificar diferentes tamanhos, redimensione a janela ou use a simulação de dispositivos do navegador.

## Publicar no GitHub
1. Crie um repositório no GitHub. Para publicar o jogo, deixe-o público.
2. Envie os arquivos desta pasta, incluindo `index.html`, `.nojekyll` e `.gitignore`. Não envie pastas de editor, dependências ou segredos.
3. Para publicar também no GitHub Pages, abra **Settings → Pages**, escolha **Deploy from a branch**, selecione `main` e a pasta `/ (root)`, e salve.
4. O GitHub exibirá o endereço da página na mesma seção. A publicação pode levar alguns minutos.

O projeto é estático: não requer instalação de pacotes, compilação ou configuração de servidor no GitHub Pages.
Antes de tornar o repositório público, a equipe deve definir a licença do projeto e concluir as validações culturais descritas nesta documentação.

## Estrutura
- `index.html`
- `css/estilo.css`
- `js/main.js`
- `js/mundo.js`
- `js/sprites.js`
- `js/ui.js`
- `js/dialogo.js`
- `js/missoes.js`
- `js/acessibilidade.js`
- `js/estado.js`
- `js/som.js`
- `dados/conteudo.js`
- `dados/personagens.js`
- `docs/NARRATIVA.md`
- `docs/MISSOES_E_LOCAIS.md`
- `referencias/`

## Observações
- As imagens da pasta `referencias/` não entram na versão publicada.
- O conteúdo e textos marcados como "a validar" ficam em dados separados para revisão.
- `js/sprites.js` gera e reutiliza atlas em Canvas para terrenos, cenários e personagens; o desenho mantém a suavização desligada para preservar os pixels.
- O terreno estático é armazenado em uma camada Canvas. `EDIFICIOS` deriva dos símbolos do mapa e define áreas bloqueadas e entradas.
- Personagens, ordem e títulos das missões vêm do cadastro em `dados/personagens.js`; as etapas, escolhas e cartas estão em `dados/conteudo.js`.
- As missões agora registram etapas retomáveis: observar sinais do mar, encontrar instrumentos, visitar locais, conversar e ordenar as etapas da farinha no interior.
- A casa de farinha e o armazém têm interiores interativos. O progresso das missões, a pesca e o evento final são persistidos no navegador.
- A lagoa tem margens acessíveis para pesca limitada, e moradores mudam de atividade conforme os horários do dia.
- O evento do Barco de Fora apresenta escolhas e explicações sem indicar uma resposta correta. Se a comunidade não agir, o cenário registra a redução de peixes.
- `AGENTS.md` e os guias em `docs/` registram o escopo, a linguagem e os pontos que ainda precisam de validação cultural.
- `MAPA_DECORACOES`, em `js/mundo.js`, reúne os objetos de apoio das áreas da farinha, do píer, do fandango e da barraca sem alterar a navegação do mapa.
- A opção de reduzir movimento também pausa as animações de cenário; contraste e tamanho de texto continuam aplicados pela interface de acessibilidade.
- O personagem caminha com transição entre casas do mapa; o cachorro passeia pela vila e pode receber carinho quando está por perto.
- Indicadores ficam recolhidos até serem abertos, e conversas comuns começam com a opção de dizer oi.
- A abertura tem atalhos para jogar, personalizar e acessar recursos de acessibilidade; a criação oferece oito combinações de tons de pele, cabelos e roupas, e o nome permanece salvo no jogador.
- Dicas contextuais apresentam movimentação e interação no momento em que são necessárias. O caderno separa objetivos de missões e cartas coletadas.
- O mapa separa os pontos de missão, reúne as casas em ruas próximas ao pavilhão central e ao armazém e mantém caminhos para a praia, a casa de farinha e a trilha da mata; também inclui fandango animado e elementos decorativos.
- A trilha da mata contém a missão «Trilha dos Saberes da Mata», com Seu Ari, personagem fictício, plantas destacadas e conteúdo marcado para validação cultural.
- A atividade de pesca mostra o lançamento, a fisgada e o peixe; a escolha de guardar ou devolver atualiza os indicadores e a disponibilidade local.
- O armazém está junto ao núcleo comunitário, e um caminho conecta a vila à área de observação da mata.
- As construções residenciais e personagens usam uma escala revisada para tornar as proporções mais coerentes.
- A seta de missão acompanha a etapa atual, mostra o destino no mapa ou na borda da tela e some ao chegar; o painel informa objetivo e progresso.
- O armazém permite adicionar cada produto uma vez ao inventário persistido. O caderno mostra quantidades, e uma notificação confirma cada coleta.
- Caminhos conectam as frentes das casas e novas luminárias iluminam pontos da vila ao entardecer. Identificações de locais aparecem quando o jogador se aproxima.
- Licença a definir pela equipe.

## Validação cultural
As etapas da farinha, o fandango, os sinais do tempo, a pesca, a missão da mata e o evento do Barco de Fora são rascunhos educativos marcados para revisão. Antes de publicar, validá-los com a comunidade caiçara da Ponta Oeste e o Instituto Raízes Caiçaras.
