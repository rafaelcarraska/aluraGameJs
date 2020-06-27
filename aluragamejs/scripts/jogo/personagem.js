class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - variacaoY;
    this.y = this.yInicial;

    this.velocidadeDoPulo = 0;
    this.gravidade = 5;
    this.alturaDoPulo = - 55;
    this.pulos = 0;
    this.invencivel = false;
  }

  pula() {
    if(this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
      somDoPulo.play();
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      
      this.pulos = 0;
    }
  }

  estaColidindo(inimigo) {
    if (this.invencivel) {
      return false;
    }
    //noFill();
    //rect(this.x + 5, this.y + 5, this.largura * 0.7, this.altura - 15);
    //rect(inimigo.x +15, inimigo.y + 10, inimigo.largura * 0.8, inimigo.altura *0.7);
    
    // const precisao = 0.7;
    const colisao = collideRectRect(
      this.x + 5,
      this.y, 
      this.largura * 0.7, 
      this.altura - 10,
      inimigo.x + 15, 
      inimigo.y + 10, 
      inimigo.largura * 0.8, 
      inimigo.altura * 0.7
    );

    return colisao;

  }

  tornarInvencivel(){
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1000);
  }

  estaColidindoGema(gema) {
    const precisao = 0.7;

    // noFill();
    // rect(this.x + 5, this.y + 5, this.largura * precisao, this.altura - 15);
    // rect(gema.x, gema.y, gema.largura, gema.altura);
    
    const colisao = collideRectRect(
      this.x + 5,
      this.y, 
      this.largura * precisao, 
      this.altura - 10,
      gema.x, 
      gema.y, 
      gema.largura, 
      gema.altura
    );

    return colisao;

  }
}