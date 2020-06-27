
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  jogo = new Jogo();
  telaInicial = new TelaInicial();

  jogo.setup();
  cenas = {
    jogo,
    telaInicial  
  };
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);

  frameRate(40);
  //somDoJogo.loop();
}

function keyPressed() {
  jogo.keyPressedKeyCode(keyCode);
}

function mousePressed() {  
  jogo.mousePressed();
}

function jump() {
  if (!gameOver) {
    personagem.pula();    
  }
}

function draw() {  
  cenas[cenaAtual].draw();
}

