// o query selector seleciona apenas o primeiro elemento, query selector all seleciona todos os elementos com a mesma classe
// o QuerySelectorAll cria um array com indices de seus elementos que podem ser acessados
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        console.log("Elemento não encontrado");
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    // o classList na posição 1 indica a segunda classe do elemento q no caso é tecla pom, clap tim etc...
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    tecla.onkeydown = function (evento){
        if(evento.code == 'Space' || evento.code == 'Enter'){
            tecla.classList.add('ativa');
        }
        // class ativa muda a estilização do elemento no css, lá essa classe já existe
    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }

}