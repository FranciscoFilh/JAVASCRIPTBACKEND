import { Veiculos } from "./Veiculos.js"
import { VeiculosNovos } from "./VeiculosNovos.js"

let palio = new Veiculos('Fiat', 'ELX', 'GHJ-4729', 'vermelha', '2005', 'Flex', 0)

console.log(palio.getMarca)
console.log(palio.anoDeFabricacao)
console.log('==============================')
console.log(palio.quantidade)
palio.setQuantidade = -3
console.log(palio.quantidade)
palio.setQuantidade = 2
console.log(palio.quantidade)
palio.setQuantidade = 5
console.log(palio.quantidade)
palio.setQuantidade = -6
console.log(palio.quantidade)
palio.setQuantidade = -4
console.log(palio.quantidade)


let civic = new VeiculosNovos('Honda', 'Touring', null, 'branca', 2024, 'Flex', 10, 265000.00, 'patio')
console.table(civic)

console.log('==========================')
civic.setStatusDeVenda = true
civic.setQuantidade = -1
civic.setTaxaDeEmplacamento = 3000.00
civic.setEmplacamento = true
civic.setPlaca = 'YUT-0954'

console.table(civic)

console.log('==========================')
civic.setStatusDeVenda = true
civic.setQuantidade = -2
civic.setTaxaDeEmplacamento = 6000.00
civic.setEmplacamento = true
civic.setPlaca = ['WER-1521', 'TYG-5432']

console.table(civic)
