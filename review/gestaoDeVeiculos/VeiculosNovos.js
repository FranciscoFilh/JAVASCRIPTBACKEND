import { Veiculos } from "./Veiculos.js";

export class VeiculosNovos extends Veiculos {
    constructor(marca, modelo, placa, cor, anoDeFabricacao, tipoDeCombustivel, quantidade, preco, localizacao) {
        super(marca, modelo, placa, cor, anoDeFabricacao, tipoDeCombustivel, quantidade)
        this._preco = preco
        this.localizacao = localizacao
        this.emplacado = false
        this.taxaDeEmplacamento = 0
        this.statusDeVenda = false
    }

    get preco() {
        return this._preco
    }

    get getLocalizacao() {
        return this.localizacao
    }

    get getEmplacado() {
        return this.emplacado
    }

    get getTaxaDeEmplacamento() {
        return this.taxaDeEmplacamento
    }

    get getStatusDeVenda() {
        return this.statusDeVenda
    }

    set preco(novoPreco) {
        this._preco = novoPreco
    }

    set setLocalizacao(novaLocalizacao) {
        this.localizacao = novaLocalizacao
    }

    set setEmplacamento(novoStatus) {
        this.emplacado = novoStatus
    }

    set setTaxaDeEmplacamento(novaTaxaDeEmplacamento) {
        this.taxaDeEmplacamento = novaTaxaDeEmplacamento
    }

    set setStatusDeVenda(novoStatus) {
        this.statusDeVenda = novoStatus
    }
}