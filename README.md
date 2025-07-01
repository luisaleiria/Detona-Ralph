# Detona Ralf

**Detona Ralf** é um jogo web no estilo "Whac-A-Mole" em que o objetivo é clicar rapidamente no quadrado onde o inimigo (Ralph) aparece. A cada acerto, o jogador ganha pontos; a cada erro, perde vidas. O jogo termina quando o tempo se esgota ou as vidas acabam.

## 📁 Estrutura do Projeto

```
detonaRalf/
├── index.html            # página principal do jogo
├── src/
│   ├── images/           # imagens usadas no jogo
│   │   ├── wall.png      # textura de fundo que se repete
│   │   ├── ralph.png     # sprite do inimigo
│   │   └── player.png    # ícone de vida
│   ├── audios/           # efeitos sonoros
│   │   ├── hit.m4a       # som de acerto
│   │   └── miss.m4a      # som de erro
│   ├── styles/           # estilos CSS
│   │   ├── reset.css     # reset global de CSS
│   │   └── main.css      # layout e visuais do jogo
│   └── scripts/          # lógica JavaScript
│       └── engine.js     # controle do fluxo do jogo
└── README.md             # este arquivo
```

## 🚀 Tecnologias

* **HTML5** e **CSS3** (Flexbox)
* **JavaScript (ES6+)**
* **Audio API**: reprodução de sons

## 🎮 Como Jogar

1. Abra `index.html` em seu navegador.
2. O cronômetro inicia em 60 segundos e você começa com 3 vidas.
3. A cada segundo, o inimigo aparece em uma das 9 casas.
4. Clique sobre o quadrado onde Ralph surgiu para marcar 1 ponto.
5. Clicar em um quadrado vazio reduz 1 vida.
6. O jogo termina quando o tempo chega a 0 ou você perde todas as vidas.

## ⚙️ Instalando e Executando

Não há dependências externas. Basta abrir o `index.html` ou usar um servidor local:

```bash
# usando serve (Node.js)
npx serve .
```

E então visite `http://localhost:5000` no navegador.

## 🔧 Configurações

* **Tempo**: altere `currTime` em `src/scripts/engine.js`.
* **Velocidade**: ajuste `gameVel` (intervalo de aparição) no estado inicial.
* **Vidas**: modifique `numLife` no estado inicial.

## 🌟 Funcionalidades

* Textura de fundo que se repete usando `background-repeat`.
* Feedback visual de vidas e pontuação em tempo real.
* Efeitos sonoros de acerto e erro.
* Reset automático após game over.

## 📜 Licença

Este projeto está sob a [MIT License](LICENSE).

---

*Desenvolvido por Luisa Leiria e equipe para o Bootcamp Frontend.*
