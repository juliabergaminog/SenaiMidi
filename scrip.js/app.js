// Pegando um unico elemento
// let tecla_pom = document.querySelector(".tecla_pom");
// function tocarSom(){
//     document.querySelector("#som_tecla_pom").play();
// }
// tecla_pom.onclick = tocarSom;
 
let listaDeTeclas = document.querySelectorAll(".tecla");
 
function tocarSom(idElemento){
    document.querySelector(idElemento).play();
}
 
let contador = 0;
while (contador <= listaDeTeclas.length) {
    let tecla = listaDeTeclas[contador];
    let instrumento = tecla.classList[1]; //ex: tecla_XXX;
    let audio = `#som_${instrumento}`
    tecla.onclick = function () {
        tocarSom(audio);
       
    }
    tecla.onkeydown = function(event){
        if (event.code === "Enter" || event.code === "Space" || event.code === "NumpadEnter"){
            tecla.classList.add("ativa")
        }
    }
    tecla.onkeyup = function(){
            tecla.classList.remove("ativa")
    }
    contador++;
};