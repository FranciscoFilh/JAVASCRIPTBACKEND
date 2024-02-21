function pessoa(nome, sobrenome) {
    nome = nome
    sobrenome = sobrenome
    console.log(`Meu nome é: ${ nome } ${ sobrenome }`)
}

pessoa('Paulo', 'Junior')


class Pessoa {
    constructor() {
        this.nome = ''
        this.sobrenome = ''
    }

    nomePessoa(primeiroNome) {
        this.nome = primeiroNome
        console.log(`Meu nome é: ${ this.nome }`)
    }

    sobrenomePessoa(segundoNome) {
        this.sobrenome = segundoNome
        console.log(`Meu sobrenome é: ${ this.sobrenome }`)
    }

    nomeCompleto() {
        let nomeCompleto = this.nome + ' ' + this.sobrenome
        console.log(`Meu nome completo é: ${ nomeCompleto }`)
    }
}

let paulo = new Pessoa()
paulo.nomePessoa('Paulo')
paulo.sobrenomePessoa('Junior')
paulo.nomeCompleto()