let imagemCenario;
let imagemPersonagem;
let imagemInimigo;

let somDoJogo;
let somDoPulo;

let cenario;
let personagem;
let inimigo;
const matrizInimigo = criaMatrizInimigo();
const matrizPersonagem = criaMatrizPersonagem();

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imageInimigo = loadImage('imagens/inimigos/gotinha.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 110, 135, 220, 270);

  inimigo = new Inimigo(matrizInimigo, imageInimigo, width - 52, 52, 52, 104, 104);

  frameRate(40);
  //somDoJogo.loop();
}

function keyPressed() {
  if (key === 'ArrowUp') {
    personagem.pula();
    somDoPulo.play();
  }
}

function draw() {
  cenario.exibe();
  cenario.move();

  personagem.exibe();
  personagem.aplicaGravidade();

  inimigo.exibe();
  inimigo.move();

  if (personagem.estaColidindo(inimigo)) {
    console.log('dano');
  }
}


function criaMatrizInimigo() {
  let matrizCalc = [];
  for (let i = 0; i < 7; i++) {
    for (let x = 0; x < 4; x++) {
      matrizCalc.push([x * 105, i * 102]);
    }
  }

  return matrizCalc;
}

function criaMatrizPersonagem() {
  let matrizCalc = [];
  for (let i = 0; i < 4; i++) {
    for (let x = 0; x < 4; x++) {
      matrizCalc.push([x * 220, i * 270]);
    }
  }
  return matrizCalc;
}