function preload() {
  config = loadJSON('config.json');

  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');

  imagemAplicandoTecnica01 = loadImage('imagens/personagem/aplicandotecnica01.png');
  imagemtecnica01 = loadImage('imagens/personagem/tecnica01.png');

  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imagemCoracao = loadImage('imagens/cenario/coracao.png');
  imagemMana = loadImage('imagens/cenario/mana.png');
  imagemGemas = loadImage('imagens/cenario/gemas.png');

  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');

  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  somPonto = loadSound('sons/somPonto.mp3');

  fontTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
}