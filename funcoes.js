function soma(n1, n2){
    return n1 + n2
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
  
}

var validar = 0;

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }
    else{
        validar = false
    }
    return validar
}

var idade = prompt('Qual sua idade ? ')
// console.log(validaIdade(validar))
