class Vida{
    constructor(maxima, inicial){
        this.maxima = maxima;
        this.inicial = inicial;

        this.atuais = this.inicial;
        this.atuais = config.vidaInicial;
        this.maxima = config.vidaMaxima;

        this.largura = 25;
        this.altura = 25;
        this.xInicial = 20;
        this.y = 20;
    }

    draw(){
        for (let index = 0; index < this.atuais; index++) {
            const margem = index * 10;
            const posicao = this.xInicial * (index + 1);

            image(imagemCoracao, posicao + margem, this.y, this.largura, this.altura);
            
        }
    }

    ganhaVida(){
        if(this.atuais < this.maxima){
            this.atuais++;
        }
    }

    pedeVida(){
        this.atuais--;
    }
}