import { Pessoa } from "./DadosDePessoa.js"

let pessoa1 = new Pessoa('Francisco', '123.456.789-01', 'teste@gmail.com', '(88)12345-6789')

console.log(pessoa1)

pessoa1.validarCpf = '12345678901'
pessoa1.validarTelefone = '88123456789'

console.log(pessoa1)