class Mana{
    constructor(Maxima, inicial){
        this.maxima = Maxima;
        this.inicial = inicial;

        this.atuais = this.inicial;
        this.atuais = config.manaInicial;
        this.maxima = config.manaMaxima;

        this.largura = 25;
        this.altura = 25;
        this.xInicial = 20;
        this.y = 70;
    }

    draw(){
        for (let index = 0; index < this.atuais; index++) {
            const margem = index * 10;
            const posicao = this.xInicial * (index + 1);

            image(imagemMana, posicao + margem, this.y, this.largura, this.altura);
            
        }
    }

    ganhaMana(){
        if(this.atuais < this.maxima){
            this.atuais++;
        }
    }

    pedeMana(){
        this.atuais--;
    }
}