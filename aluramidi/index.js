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
    // digitar o "." 3 vezes em qualquer página no giithub faz com que o arquivo seja aberto em um editor vscode na web
    // a tendência é começar a rodar esses códigos no cloud msm

    // git log --oneline mostra todos os commits do projeto

    // git clone apaga todo o repositório e coloca a versão do projeto do github

    // git pull link é usado para ver se tem alguma alteração no projeto, acredito q ele tb faça a alteração no repositório local

    // git status mostra os arquivos modiicados no repositório local com relação ao remoto

    // dá para usar o terminal do vs code p fazer commits tb

    // diff é aquilo que foi modificado no arquivo, isso pode ser consultado na msg do commit do arquivo no github

    // git commit . -m "" faz o commit em todo o arquivo

    // git restore --source 470150d volta para essa versão do arquivo com todos os seus arquivos

    // git restore --source 470150d app.js modifica o arquivo app.js do commit 470150d
    // depois diso precisa fazer um commit avisando q voltou a versão e colocar um push

}