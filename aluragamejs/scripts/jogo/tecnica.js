class Tecnica {
  constructor(imagem, largura, altura, velocidade) {
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura,
    this.velocidade = velocidade;

    this.x = 0;

  }

  ataque(x, y) {
    image(this.imagem, x, y, this.largura,
      this.altura);  
      console.log('tecnica', x, this.velocidade);
      personagem.image = imagemtecnica01;
      this.x = x;
  }

  draw() {
    // if (dash) {
    //   this.x = this.x - this.velocidade - 20;
    // } else {
      this.x = this.x + this.velocidade;
      
    // }

    // if (this.x >= width + this.largura) {
    //   this.x = width;
    // }
  }
}