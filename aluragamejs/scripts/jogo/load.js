function preload() {
    imagemCenario = loadImage('imagens/cenario/floresta.png');
    imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  
    imagemGameOver = loadImage('imagens/assets/game-over.png');
    imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
    imagemCoracao = loadImage('imagens/cenario/coracao.png');
    imagemGemas = loadImage('imagens/cenario/gemas.png');
  
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  
    somDoJogo = loadSound('sons/trilha_jogo.mp3');
    somDoPulo = loadSound('sons/somPulo.mp3');
    somPonto = loadSound('sons/somPonto.mp3');

    fontTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  }