export class Lavajato {
    constructor(veiculo, diaDeEntradaVeiculo, prazoDeLavagem, preco) {
        this.veiculo = veiculo
        this.diaDeEntradaVeiculo = diaDeEntradaVeiculo
        this.prazoDeLavagem = prazoDeLavagem
        this.preco = preco
    }
    
    get getVeiculo() {
        return this.veiculo
    }

    get getDiaDeEntradaVeiculo() {
        return this.diaDeEntradaVeiculo
    }

    get getPrazoDeLavagem() {
        return this.prazoDeLavagem
    }

    get getPreco() {
        return this.preco
    }

    set setVeiculo(novoVeiculo) {
        this.veiculo = novoVeiculo
    }

    set setDiaDeEntradaVeiculo(novoDiaDeEntradaVeiculo) {
        this.diaDeEntradaVeiculo = novoDiaDeEntradaVeiculo
    }

    set setPrazoDeLavagem(novoPrazoDeLavagem) {
        this.prazoDeLavagem = novoPrazoDeLavagem
    }

    set setPreco(novoPreco) {
        this.preco = novoPreco
    }

    validarPrazo() {
        if (this.prazoDeLavagem >= 0 && this.prazoDeLavagem <= 2) {
            if (this.diaDeEntradaVeiculo + this.prazoDeLavagem ) {
                console.log(`O prazo de ${this.prazoDeLavagem} dia foi cumprido. O valor ficou de R$ ${this.preco}`)
            }
        } else {
            if (this.prazoDeLavagem < 0) {
                console.log(`Erro!!! Impossivel de confirmar o prazo de ${this.prazoDeLavagem} de dia negativo`)
                this.prazoDeLavagem = undefined
            } else {
                console.log(`O prazo de ${this.prazoDeLavagem} dia não foi cumprido. Por causa dessa demora você receberá 10% de desconto, o valor ficou de R$ ${this.preco - (this.preco * 0.10)}`)
                this.preco -= (this.preco * 0.10)
            }
        }
    }
}