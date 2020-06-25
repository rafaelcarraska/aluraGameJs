class Pontuacao{
 constructor(){
 }
  
  exibe(){
    textAlign(RIGHT);
    textSize(50);
    fill('#fff');
    text(parseInt(pontos), width - 30, 50); 
  }
  
  adicionarPonto(){
   pontos = pontos + 0.2; 
  }
}