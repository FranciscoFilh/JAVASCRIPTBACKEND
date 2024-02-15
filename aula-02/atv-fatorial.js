// Faça um algoritmo que calcule o fatorial de um número.
const  prompt = require('prompt-sync')()

let numero = Number(prompt('Informe uma numero: '))
let resultado = 1
for (let i=1; i<=numero; i++) {
    resultado *= i
}
console.log(`O fatorial de ${numero} é ${ resultado }`)