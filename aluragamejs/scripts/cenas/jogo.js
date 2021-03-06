class Jogo {
    constructor() {
    }

    setup() {
        createCanvas(windowWidth, windowHeight);
        cenario = new Cenario(imagemCenario, 3);
        pontuacao = new Pontuacao();
        vida = new Vida();
        mana = new Mana();
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
        personagemTecnica01 = new Personagem(matrizTecnica01, imagemAplicandoTecnica01, 0, 30, 220, 270, 480, 540);
        tecnica01 = new Tecnica(imagemGemas, width, aleatorio(150, 400), 40, 40, 80, 80,
            3, 300, 500);
        jogo.startGame();
    }

    startGame() {
        console.log('startGame');
        inimigos = [];
        gemas = [];
        pontos = 0;
        gameOver = false;
        loop();

        inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 10, 52, 52, 104, 104,
            4, 11, 200, 500);
        inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400,
            6, 12, 300, 1500);
        inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150,
            5, 11, 300, 1500);

        inimigos.push(inimigo);
        inimigos.push(inimigoGrande);
        inimigos.push(inimigoVoador);

        gemaVerde = new Gema(matrizGemaVerde, imagemGemas, width, aleatorio(150, 400), 40, 40, 80, 80,
            3, 300, 500, "verde");
        gemaAzul = new Gema(matrizGemaAzul, imagemGemas, width, aleatorio(200, 400), 40, 40, 80, 80,
            3, 1500, 2500, "azul");
        gemaVermelha = new Gema(matrizGemaVermelha, imagemGemas, width, aleatorio(250, 500), 40, 40, 80, 80,
            3, 2500, 4500, "vermelha");

        tecnica01 = new Tecnica(imagemtecnica01, 100, 100, 15);

        gemas.push(gemaVerde);
        gemas.push(gemaAzul);
        gemas.push(gemaVermelha);
    }

    gameOver() {
        console.log('gameOver');
        textAlign(LEFT);
        textSize(50);
        fill('#fff');
        text("precione enter para reiniciar o jogo.", width / 4 - 50, height / 3 + 200);
        image(imagemGameOver, width / 2 - 200, height / 3);
        noLoop();
    }

    mousePressed() {
        if (!gameOver) {
            jump();
        }
    }

    keyPressedKeyCode(keyCode) {
        console.log('keyPressedKeyCode:', keyCode);
        if (keyCode == 32) {
            // if (mana.atuais > 0) {
                 mana.pedeMana();
            //     tecnica01.ataque(personagem.x, personagem.y);
            //     let personagemPadrao = personagem;
            //     personagem = personagemTecnica01;
            //     personagem; personagemPadrao;
            // }
        }

        if (keyCode == 13) {
            console.log('keyCode: ', keyCode);
            if (gameOver) {
                jogo.startGame();
            }
        }

        if ((keyCode == 87 || keyCode == 38) && !gameOver) {
            jump();
        }
    }

    draw() {
        if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            dash = true;
        } else {
            dash = false;
        }

        cenario.exibe();
        cenario.move();

        vida.draw();
        mana.draw();

        pontuacao.exibe();
        pontuacao.adicionarPonto();

        personagem.exibe();
        personagem.aplicaGravidade();

        inimigos.forEach(inimigo => {
            inimigo.exibe();
            inimigo.move();

            if (personagem.estaColidindo(inimigo)) {
                console.log('dano');
                vida.pedeVida();
                personagem.tornarInvencivel();
                if (vida.atuais <= 0) {
                    gameOver = true;
                    console.log('gameOver');
                }
            }
        });

        gemas.forEach(gema => {
            gema.exibe();
            gema.move();

            if (personagem.estaColidindoGema(gema)) {
                console.log('gema', gema);
                gema.x = width + gema.delay;
                somPonto.play();

                console.log('tipo', gema.tipo);
                switch (gema.tipo) {
                    case "verde":
                        console.log('pontos a', pontos);
                        pontos = pontos + 50;
                        console.log('pontos d', pontos);
                        break;
                    case "azul":
                        mana.ganhaMana();
                        break;
                    case "vermelha":
                        vida.ganhaVida();
                        break;

                    default:
                        break;
                }
            }
        });

        if (gameOver) {
            jogo.gameOver();
        }
    }
}