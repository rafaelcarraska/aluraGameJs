
function criaMatriz(coluna, linha, x, y, falta, iniciox = 0, inixioy = 0) {
    console.log(iniciox);
    let matrizCalc = [];
    for (let i = 0; i < linha; i++) {
      for (let t = 0; t < coluna; t++) {
        if (i < linha - 1 || t < coluna - falta) {
          matrizCalc.push([t * x + iniciox, i * y + inixioy]);
        }
      }
    }
  
    return matrizCalc;
  }
  
  function aleatorio(min, max){
    return (Math.floor(Math.random() * max) + min);
  }