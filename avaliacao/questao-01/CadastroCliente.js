import { Lavajato } from "./gerenciamentoCleanDrive.js"

export class Cliente extends Lavajato {
    constructor(veiculo, diaDeEntradaVeiculo, prazoDeLavagem,preco, nome, telefone) {
        super(veiculo, diaDeEntradaVeiculo, prazoDeLavagem, preco)
        this.nome = nome
        this.telefone = telefone
    }

    get getNome() {
        return this.nome
    }

    get getTelefone() {
        return this.telefone
    }

    set setNome(novoNome) {
        this.nome = novoNome
    }

    set setValidarTelefone(novoTelefone) {
        if (novoTelefone.length === 14) {
            this.telefone = novoTelefone
        } else {
            console.log(`O telefone: ${novoTelefone} não é valido`)
            this.telefone = undefined
        }
    }
}