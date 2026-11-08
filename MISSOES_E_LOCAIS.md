# MISSÕES E LOCAIS

Todos os textos são rascunhos. Siga a seção «Linguagem» de docs/NARRATIVA.md e marque fatos culturais a validar com `validar: true`.

## Tipos de passo
- `conversar`: falar com um personagem.
- `ir-ate`: chegar a um edifício ou área.
- `encontrar`: achar objetos espalhados no mapa.
- `ordenar`: colocar etapas na ordem certa (toque em sequência).
- `observar`: clicar em sinais do ambiente.
- `escolher`: escolha final com consequência nos indicadores.

## Locais
| id | Tamanho (tiles) | Interior | Função e aparência |
|---|---:|---|---|
| casa-de-farinha | 5x4 | sim | Missão da Dona Cida. Forno de barro, prensa, tipiti, peneira, cestos e sacos |
| armazem | 4x3 | sim | Prateleiras com farinha, peixe seco e produtos. Pistas e conversas |
| mercadinho | 4x3 | não | Bancas de peixe, fruta, artesanato e biju |
| pier | 1 de largura, até a borda do mar | não | Canoas amarradas, rede secando, cestos. Seu Nelson junto à canoa principal |
| parque | 5x4 | não | Balanço, gangorra, banco, crianças brincando |
| escola | 4x3 | não | Placa na frente. Citada nas escolhas da missão da farinha |
| capela | 3x3 | não | Simples, de madeira |
| horta-e-roca | 6x4 | não | Roça de mandioca e horta |
| lagoa | 8x6 | não | Peixes visíveis, ondulações, aves aquáticas, plantas e pedras |
| casa-rural | 3x3 | não | Afastada, ligada à vila por estrada sinuosa com cerca, flores e pedras |
| pavilhao-fandango | 5x4 + terreiro | não | Terreiro aberto onde fica a roda de dança |
| barraca | 3x2 | não | Artesanato e comida, com placa, biju, cataia e lixeiras |
| trilha-da-mata | área aberta da mata | não | Caminho de observação com plantas; os usos locais precisam ser validados |

O núcleo da vila reúne as casas em ruas próximas ao pavilhão e ao armazém. Caminhos conectam esse núcleo à praia, à casa de farinha e à trilha da mata.

## Missões existentes

### roca: Memória da Farinha (Dona Cida)
Cenário: roça de mandioca ao lado da casa de farinha.
1. `conversar`: Dona Cida na roça aceita a missão.
2. `ir-ate`: casa-de-farinha. Entrar (Fase 3).
3. `ordenar`: descascar, ralar, prensar, peneirar, torrar. Dona Cida comenta cada etapa.
4. `conversar`: ouvir a história do mutirão na roça.
5. `escolher`: as três escolhas atuais. Ao concluir, carta «Carta de Memória».

### mar: A Leitura do Tempo (Seu Nelson e Davi)
Cenário: píer com canoas e redes. Seu Nelson junto à canoa.
1. `ir-ate`: píer. `conversar` com Seu Nelson.
2. `observar` três sinais: maré (cheia ou vazante), vento (bandeirinha no píer), lua (céu).
3. `conversar` com Davi. Seu Nelson corrige com delicadeza.
4. `escolher`: as três escolhas atuais. Ao concluir, carta «Carta de Mar».

### fandango: Resgate Cultural (Mestre Tião)
Cenário: pavilhão e terreiro com a roda de dança.
1. `conversar`: Mestre Tião no pavilhão.
2. `encontrar`: viola, rabeca e adufo em três pontos diferentes da vila. Cada instrumento tem pista de um morador.
3. `ir-ate`: pavilhão-fandango e entregar os instrumentos.
4. A roda começa: dançarinos animados. Mestre Tião explica o batido dos tamancos e a roda.
5. `escolher`: as três escolhas atuais. Ao concluir, carta «Carta de Música».

### visitantes: O Conflito Contemporâneo (Rita e Jaque)
Cenário: barraca com placa, biju, cataia e lixeiras junto de Rita; Jaque fica a oeste da lagoa, separado do núcleo da barraca.
1. `ir-ate`: barraca. `conversar` com Rita e Jaque.
2. `observar`: dilemas do artesanato copiado e do lixo de visitantes.
3. `ordenar`: separar lixo orgânico e reciclável nas lixeiras.
4. `escolher`: as três escolhas atuais. Ao concluir, carta «Carta de Renda e Cuidado».

### mata: Trilha dos Saberes da Mata (Seu Ari, personagem fictício)

Cenário: trilha de observação com três plantas destacadas. Seu Ari é fictício e todo conteúdo sobre plantas medicinais, frutos e cataia está marcado `validar: true`.
1. `conversar`: conversar com Seu Ari sobre plantas e frutos locais, incluindo a cataia, sem apresentar usos como fatos confirmados.
2. `encontrar`: observar três plantas sem coletá-las.
3. `observar`: chegar ao ponto indicado e conversar sobre cuidado com a planta mãe; a orientação de manejo precisa ser confirmada localmente.
4. `escolher`: registrar apenas o que a comunidade autorizar. Ao concluir, carta «Carta da Mata e dos Remédios da Terra».

## Missões novas sugeridas
Personagens novos são fictícios e devem estar marcados como fictícios.
- **O Peixe do Dia** (Seu Nelson e Davi, píer ou lagoa): usar a tarrafa e devolver ao mar os peixes pequenos.
- **Mutirão da Praia** (Rita, Jaque e crianças): recolher lixo na areia e separar.
- **A Canoa de um Pau Só** (Seu Zé, canoeiro fictício): como a canoa artesanal é feita e por que não usa motor. Validar antes de escrever.
- **Escola da Vila** (Professora Marina, fictícia): crianças perguntam sobre a vida na vila; o jogador responde com o que aprendeu.

## Atividade de pesca
Atividade curta, calma, sem violência, no píer e na lagoa. Peixes pequenos devem ser devolvidos. A quantidade de peixe por horário é limitada. Pescar demais reduz o indicador de peixe disponível. Se o Barco de Fora aparecer (17:30) e nada tiver sido feito, o peixe disponível cai e a lagoa e o mar ficam mais vazios. A pesca afeta Renda e Ambiente, não gera pontuação final ou ranking. Cada atividade rende uma carta ou anotação no caderno.

## Resumo do dia
Mostra o que o jogador observou, ouviu e decidiu. Não declara vitória nem derrota. Mantém as três perguntas de reflexão em dados/conteudo.js e o aviso de que o jogo não substitui a voz da comunidade.
