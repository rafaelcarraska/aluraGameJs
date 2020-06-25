class Inimigo extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay)  {
   super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite); 
    
    this.velocidade = velocidade;
    
    this.delay = delay;
    this.x = width + this.delay;
  }
  
  move(){
    
    if(dash){
      this.x = this.x - this.velocidade - 20;
    }else{
      this.x = this.x - this.velocidade;
    }    
    
    if(this.x < -this.largura - this.delay){
      this.x = width; 
      pontos = pontos + 10;
      this.velocidade = this.velocidade + (pontos / 100);

    }
  }
}