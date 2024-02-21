//  destruction é uma expressão que posibilita a extração de dados dinamicamente de arrays e/ou objetos em variaveis.

const pessoa =  {
    nome: 'Elvis',
    sobrenome: 'Soares',
    idade: 28,
}
// forma convencional de atribuição e impressão
console.log(pessoa.sobrenome)
let sobrenomeDoElvis = pessoa.sobrenome
console.log(sobrenomeDoElvis)
sobrenomeDoElvis = 'Rodrigues'
console.log(sobrenomeDoElvis)
// forma descontruida
let { idade, nome, sobrenome } = pessoa
console.log(sobrenome)
console.log(nome)
console.log(idade)
let { nome:nomeDoElvis } = pessoa
console.log(nomeDoElvis)
nomeDoElvis = 'TioElvis'
console.log(nomeDoElvis)
console.log(nome)

let nomes = ['Alice', 'Francisco', 'Felipe', 'Micael']
// forma convencional de utililizar um Array
console.log(nomes[1])
let nomeFrancisco = nomes[1]
console.log(nomeFrancisco)
// Descontrução de Arrays
let [nome1, nome2, nome3, nome4] = nomes
let { 3:nomeMicael } = nomes
let { 0:nomeAlice, 2:nomeFelipe } = nomes
console.log(nomeAlice)
console.log(nomeFelipe)
console.log(nomeMicael)