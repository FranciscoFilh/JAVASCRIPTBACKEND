export class Funcionarios {
    #salario
    constructor(nome, cargo, turno, salario){
        this._nome = nome
        this._cargo = cargo
        this._turno = turno
        this.#salario = salario
    }

    get nome() {
        return this._nome
    }

    get cargo() {
        return this._cargo
    }

    get salario() {
        return this.#salario
    }

    get turno() {
        return this._turno
    }

    set alteraNome(novoNome) {
        this._nome = novoNome
    }

    set alteraCargo(novoCargo) {
        this._cargo = novoCargo
    }

    set alteraSalario(novoSalario) {
        if ( this.#salario < novoSalario) {
            this.#salario = novoSalario
        } else {
            return `Novo salario não pode ser menor que ${ this.#salario }`
        }
    }

    set alteraTurno(novoTurno) {
        if ( this._turno !== novoTurno ) {
            return `Seu turno já é: ${ this._turno }`
        } else {
            this._turno =  novoTurno
        }
    }
}