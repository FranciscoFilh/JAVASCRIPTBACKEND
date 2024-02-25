const Pessoa = {
    nome: '',
    cpf: '',
    validarCpf: function(novoCpf) {
        if(novoCpf.length === 14) {
            this.cpf = novoCpf
        } else {
            console.log(`O cpf: ${novoCpf} não é valido`) 
            this.cpf = undefined  
        }
    },
    email: '',
    telefone: '',
    validarTelefone: function(novoTelefone) {
        if (novoTelefone.length === 14) {
            this.telefone = novoTelefone
        } else {
            console.log(`O telefone: ${novoTelefone} não é valido`)
            this.telefone = undefined
        }
    }
}

const pessoa1 = {}

Object.setPrototypeOf(pessoa1, Pessoa)

pessoa1.nome = 'Francisco'
pessoa1.cpf = '123.456.789-01'
pessoa1.email = 'teste@gmail.com'
pessoa1.telefone = '(88)12345-6789'
console.log(pessoa1)
pessoa1.validarCpf('12345678901')
pessoa1.validarTelefone('88123456789')
console.log(pessoa1)