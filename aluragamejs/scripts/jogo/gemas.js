class Gema extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delayMin, delayMax, tipo)  {
   super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite); 
    
    this.velocidade = velocidade;
    this.tipo = tipo;
    
    this.delay = aleatorio(delayMin, delayMax);
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
    }
  }
}