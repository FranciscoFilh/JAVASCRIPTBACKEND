const conversor = {
    valor: 0,
    unidade: 'unidade',
}

const metros = {
    converterParaM: function () {
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
}

const centimetros = {
    converterParaCm: function () {
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

Object.setPrototypeOf(metros, conversor)
Object.setPrototypeOf(centimetros, metros)

metros.valor = 200
metros.unidade = 'km'
metros.converterParaM()

centimetros.valor = 100
centimetros.unidade = 'mm'
centimetros.converterParaCm()