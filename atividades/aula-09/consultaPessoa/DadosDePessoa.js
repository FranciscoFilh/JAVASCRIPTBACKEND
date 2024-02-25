export class Pessoa {
    constructor(nome, cpf, email, telefone) {
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.telefone = telefone
    }

    get pegarNome() {
        return this.nome
    }

    get pegarCpf() {
        return this.cpf
    }

    get pegarEmail() {
        return this.email
    }

    get pegarTelefone() {
        return this.telefone
    }

    set validarNome(novoNome) {
        this.nome = novoNome
    }

    set validarCpf(novoCpf){
        if (novoCpf.length === 14) {
            this.cpf = novoCpf
        } else {
            console.log(`O CPF: ${novoCpf} não é valido`)
            this.cpf = undefined
        }
    }

    set validarEmail(novoEmail) {
        this.email = novoEmail
    }

    set validarTelefone(novoTelefone) {
        if (novoTelefone.length === 14) {
            this.telefone = novoTelefone
        } else {
            console.log(`O telefone: ${novoTelefone} não é valido`)
            this.telefone = undefined
        }
    }
}