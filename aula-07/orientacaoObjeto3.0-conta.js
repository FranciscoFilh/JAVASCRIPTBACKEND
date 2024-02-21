import { Operacoes } from './orientacaoObjeto3.0-operacoes.js'

export class Conta extends Operacoes {
    constructor(nome, cpf, conta, saldo){
        super(saldo)
        this.nome = nome
        this._cpf = cpf
        this.conta = conta
    }

    get mostraNome() {
        return this.nome
    }

    get cpf() {
        return this._cpf
    }

    get obterConta() {
        return this.conta
    }
}