const Funcionarios = {
    nome: '',
    cargo: '',
    alterarNome: function(novoNome) {
        this.nome = novoNome
    }
}

const func01 = {}
const func02 = {}

Object.setPrototypeOf(func01, Funcionarios)
Object.setPrototypeOf(func02, Funcionarios)

func01.nome = 'Paulo'
func02.nome = 'Vaniele'

console.log(func01.nome)
console.log(func02.nome)

func01.alterarNome('João')
console.log(func01.nome)