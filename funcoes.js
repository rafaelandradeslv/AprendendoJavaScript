function soma(n1, n2) {
    return n1 + n2
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)

}

var validar = 0;

function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true
    }
    else {
        validar = false
    }
    return validar
}
//var idade = prompt('Qual sua idade ? ')
// console.log(validaIdade(validar))

function clicou() {
    agradecimento = document.getElementById('agradecimento')
    agradecimento.innerHTML = "Obrigado por Clicar"
}

function redirecionar() {
    window.open('https://www.google.com')
    window.location.href = 'https://www.google.com'
}


function trocar(elemento) {
    // move = document.getElementById('mousemove')
    // move.innerHTML = 'O mouse passou em cima'
    elemento.innerHTML = 'O mouse está em cima'
}
function voltar(elemento) {
    // move = document.getElementById('mousemove')
    // move.innerHTML = 'Passe o mouse aqui'
    elemento.innerHTML = 'Já passou o mouse, atualize a página'
}

function load(){
    console.log('Página carregada')
}

function functionChange(elemento){
    console.log(elemento.value)


}

