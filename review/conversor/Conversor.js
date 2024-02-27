export class Conversor{
    constructor(valor, unidade) {
        this.valor = valor
        this.unidade = unidade
        this.resultado = 0
    }

    converterParaKm() {
        if (this.unidade.toLowerCase() === 'm') {
            this.resultado = this.valor / 1000
            console.log(`O valor ${this.valor}${this.unidade} convertido para km é: ${this.resultado}km`)
        }
        if (this.unidade.toLowerCase() === 'cm') {
            this.resultado = this.valor / 100000
            console.log(`O valor ${this.valor}${this.unidade} convertido para km é: ${this.resultado}km`)
        } 
        if (this.unidade.toLowerCase() === 'mm') {
            this.resultado = this.valor / 1000000
            console.log(`O valor ${this.valor}${this.unidade} convertido para km é: ${this.resultado}km`)
        } 
    }

    converterParaM() {
        if (this.unidade.toLowerCase() === 'km') {
            this.resultado = this.valor * 1000
            console.log(`O valor ${this.valor}${this.unidade} convertido para m é: ${this.resultado}m`)
        }
        if (this.unidade.toLowerCase() === 'cm') {
            this.resultado = this.valor / 100
            console.log(`O valor ${this.valor}${this.unidade} convertido para m é: ${this.resultado}m`)
        } 
        if (this.unidade.toLowerCase() === 'mm') {
            this.resultado = this.valor / 1000
            console.log(`O valor ${this.valor}${this.unidade} convertido para m é: ${this.resultado}m`)
        } 
    }

    converterParaMm() {
        if (this.unidade.toLowerCase() === 'km') {
            this.resultado = this.valor * 1000000
            console.log(`O valor ${this.valor}${this.unidade} convertido para mm é: ${this.resultado}mm`)
        }
        if (this.unidade.toLowerCase() === 'cm') {
            this.resultado = this.valor * 10
            console.log(`O valor ${this.valor}${this.unidade} convertido para mm é: ${this.resultado}mm`)
        } 
        if (this.unidade.toLowerCase() === 'm') {
            this.resultado = this.valor * 1000
            console.log(`O valor ${this.valor}${this.unidade} convertido para mm é: ${this.resultado}mm`)
        } 
    }

    converterParaCm() {
        if (this.unidade.toLowerCase() === 'm') {
            this.resultado = this.valor * 100
            console.log(`O valor ${this.valor}${this.unidade} convertido para cm é: ${this.resultado}cm`)
        }
        if (this.unidade.toLowerCase() === 'Km') {
            this.resultado = this.valor * 100000
            console.log(`O valor ${this.valor}${this.unidade} convertido para cm é: ${this.resultado}cm`)
        } 
        if (this.unidade.toLowerCase() === 'mm') {
            this.resultado = this.valor / 10
            console.log(`O valor ${this.valor}${this.unidade} convertido para cm é: ${this.resultado}cm`)
        } 
    }
}