function soma(x, y) {
    return x + y
}
console.log(soma(5,7))
console.log(soma(2,9))
console.log(soma(12,2))
console.log(soma(4,27))

function deMaior(idade) {
    if (idade === 18) {
        console.log('Você tem exatamente 18 anos')
    } else if (idade > 18) {
        return 'Você tem mais de 18 anos'
    } else if (idade < 18) {
        return 'Você tem menos de 18 anos'
    } else {
        console.log('Impossivel analisar sua idade')
    }
}

const prompt = require('prompt-sync')()
let idade = Number(prompt('Informe sua idade: '))
let mensagem = deMaior(idade)

// Função anonima - funcão dentro de uma variavel
const minhaFuncao = function () { return 2 + 2}

console.log(minhaFuncao() + 6)

// função anonima - função dentro de um array
const meuArray = [function(a,b) { return a -b }, 'Paulo', 2024, 'a', true]

console.log(meuArray[0](3,2))

// função anonima - função dentro de um objeto
const meuObjeto = {}
meuObjeto.saudacao = function() { return 'Ola pessoal' }
console.log(meuObjeto)
console.log(meuObjeto.saudacao())

// Função anonima - função como argumento de uma função
function qualquerCoisa(funcao) {
    funcao()
}

qualquerCoisa(function() {console.log('Executando uma função interna...')})

function calculaImposto(funcao, valor) {
    funcao(valor)
}

calculaImposto(
    function(valor) {
        let imposto = valor * 0.05
        console.log(imposto)
    }, 2500
)

// argumentos variaveis nas funções
function multiplicar() {
    let multiplicar = 1
    for (i in arguments) {
        multiplicar *= arguments[i]
    }
    return {multiplicar}
}
console.log(multiplicar())
console.log(multiplicar(6))
console.log(multiplicar(2,6))
console.log(multiplicar(2,6,5,10))
console.log(multiplicar(2,6,5,10,3))


function novaSoma(a=0, b=0, c=0, d=0, e=0, f=0, g=0) {
    let somaTudo = a+b+c+d+e+f+g
    return somaTudo
}

console.log(novaSoma(3,4))