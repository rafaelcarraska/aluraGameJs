class Cenario{
  constructor(imagem, velocidade){
    this.imagem = imagem;
    this.velocidade = velocidade;
    
    this.x1 = 0;
    this.x2 = width;
  }
  
  exibe(){
    image(imagemCenario, this.x1,0, width, height);
    image(imagemCenario, this.x2,0, width, height);
  }
  
  move(){ 
    if(dash){
      this.x1 = this.x1 - this.velocidade - 20;
      this.x2 = this.x2 - this.velocidade - 20;
    }else{
      this.x1 = this.x1 - this.velocidade;
      this.x2 = this.x2 - this.velocidade;
    }

    if(this.x1 < -width){
      this.x1 = width;
    }
    
    if(this.x2 < -width){
      this.x2 = width;
    }
  }
}