// execuções
import { Funcionarios } from "./Funcionarios.js"
import { Professor } from "./Professor.js"

let func01 = new Funcionarios('Francisco','Programador', 'Diurno','1412')
let prof01 = new Professor('Paulo','Programador','Diurno','Programação','Back-End')

console.log(func01)
console.log(func01.nome)
console.log(func01.salario)
console.log(prof01)