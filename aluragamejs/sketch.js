let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameOver;

let somDoJogo;
let somDoPulo;

let cenario;
let personagem;
let pontuacao;

var pontos = 0;
var dash = false;
var gameOver = false;

const matrizPersonagem = criaMatriz(4, 4, 220, 270, 0);
const matrizInimigo = criaMatriz(4, 7, 105, 102, 0);
const matrizInimigoGrande = criaMatriz(5, 6, 400, 400, 2);
const matrizInimigoVoador = criaMatriz(3, 6, 200, 150, 2);

let inimigos = [];

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');

  imagemGameOver = loadImage('imagens/assets/game-over.png');

  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');

  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  pontuacao = new Pontuacao();

  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);

  startGame();

  frameRate(40);
  //somDoJogo.loop();
}

function startGame() {
  loop();
  pontos = 0;
  gameOver = false;

  let inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 10, 52, 52, 104, 104,
    (Math.floor(Math.random() * 11) + 4),
    (Math.floor(Math.random() * 500) + 200));
  let inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400,
    (Math.floor(Math.random() * 12) + 6),
    (Math.floor(Math.random() * 1500) + 300));
  let inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150,
    (Math.floor(Math.random() * 11) + 5),
    (Math.floor(Math.random() * 1500) + 300));

  inimigos.push(inimigo);
  inimigos.push(inimigoGrande);
  inimigos.push(inimigoVoador);

}

function keyPressed() {
  if (key === 'ArrowUp' && !gameOver) {
    jump();
  }
}

function mousePressed() {
  if (gameOver) {
    startGame();
  } else {
    jump();
  }
}

function jump() {
  personagem.pula();
  somDoPulo.play();
}


function draw() {
  if (keyIsDown(RIGHT_ARROW)) {
    dash = true;
  } else {
    dash = false;
  }

  cenario.exibe();
  cenario.move();

  pontuacao.exibe();
  pontuacao.adicionarPonto();

  personagem.exibe();
  personagem.aplicaGravidade();

  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.move();

    if (personagem.estaColidindo(inimigo)) {
      console.log('dano');
      gameOver = true;

    }

    if (gameOver) {
      GameOver();
    }
  });
}

function GameOver() {
  textAlign(LEFT);
  textSize(50);
  fill('#fff');
  text("Clique no mouse para reiniciar o jogo.", width/4 - 50, height / 3 + 200); 
  image(imagemGameOver, width / 2 - 200, height / 3);
  noLoop();
  inimigos = [];
}


function criaMatriz(coluna, linha, x, y, falta) {
  let matrizCalc = [];
  for (let i = 0; i < linha; i++) {
    for (let t = 0; t < coluna; t++) {
      if (i < linha - 1 || t < coluna - falta) {
        matrizCalc.push([t * x, i * y]);
      }
    }
  }

  return matrizCalc;
}