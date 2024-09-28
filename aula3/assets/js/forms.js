/**
 * Primeira forma de manipulação em javascript
 */


let aluno = document.getElementById("aluno")
let serie = document.getElementById("serie")
let materia = document.getElementById("materia")



let botao = document.getElementById("btn-salvar")

// Evento chamado click
/* Função addEventListener -> esta função add evento e 
   escuta eventos a um elemento do html
*/

botao.addEventListener("click", function () {
    console.log(aluno.value)
    console.log(serie.value)
    console.log(materia.value)

    document.getElementById("text").innerHTML = "Nome do Aluno" + aluno.value +
                                                "<br> Série: " + serie.value +
                                                "<br> Matéria: " + materia.value
});




































































