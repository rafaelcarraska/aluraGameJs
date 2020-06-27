let config = [];

let imagemCenario;
let imagemPersonagem;
let imagemAplicandoTecnica01;

let imagemTecnica01;

let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;

let gemaVerde;
let gemaAzul;
let gemaVermelha;

let imagemGameOver;
let imagemTelaInicial;
let imagemGemas;
let imagemCoracao;
let imagemMana;

let somDoJogo;
let somDoPulo;
let somPonto;

let jogo;
let telaInicial;
let botaoGerenciador;
let fontTelaInicial;

let cenario;
let personagem;

let personagemTecnica01;

let pontuacao;
let vida;
let mana;

let tecnica01;

let cenaAtual = "telaInicial";
let cenas

var pontos = 0;
var dash = false;
var gameOver = false;

const matrizPersonagem = criaMatriz(4, 4, 220, 270, 0);
const matrizTecnica01 = criaMatriz(5, 3, 480, 540, 0);

const matrizInimigo = criaMatriz(4, 7, 105, 102, 0);
const matrizInimigoGrande = criaMatriz(5, 6, 400, 400, 2);
const matrizInimigoVoador = criaMatriz(3, 6, 200, 150, 2);
const matrizGemaAzul = criaMatriz(6, 1, 80, 80, 0, 30, 15);
const matrizGemaVerde = criaMatriz(6, 1, 80, 80, 0, 30, 115);
const matrizGemaVermelha = criaMatriz(6, 1, 80, 80, 0, 30, 215);

let inimigo;
let inimigoGrande;
let inimigoVoador;

let inimigos = [];
let gemas = [];
