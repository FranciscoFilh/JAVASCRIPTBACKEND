import { Conta } from './orientacaoObjeto3.0-conta.js'

let conta1 = new Conta('João', 12345, 1234567890, 0)
let conta2 = new Conta('Pedro', 67890, 1019876523, 0)
conta1.depositar(1000)
conta2.depositar(500)
conta1.sacar(200)
conta2.sacar(150)
conta1.tranferir(200, conta2)
console.log(conta1)
console.log(conta2)
conta2.tranferir(25, conta1)
console.log(conta1)
console.log(conta2)