import { Lavajato } from "./gerenciamentoCleanDrive.js";
import { Cliente } from "./CadastroCliente.js";

let veiculo = new Lavajato('onibus', '10', '2','145')
veiculo.validarPrazo()
veiculo.setPrazoDeLavagem = 3
veiculo.validarPrazo()
veiculo.setPrazoDeLavagem = -1
veiculo.validarPrazo()
console.log(veiculo)

console.log('======================================================')
let clie1 = new Cliente('carro','10', '1', '80', 'Cleiton', '11 12345-6789')
clie1.validarPrazo()
console.log(clie1)

console.log('======================================================')
let clie2 = new Cliente('moto','10', '-1','40', 'Junior', '11 12345-6789', )
clie2.setValidarTelefone = '11123456789'
clie2.validarPrazo()
console.log(clie2)