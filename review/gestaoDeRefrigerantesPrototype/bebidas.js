const bebidas = {
    nome: 'Nome do produto',
    marca: 'fabricante do produto',
    dataDeValidade: 'Data de validade',
    dataDeFabricacao: 'Data de fabricacao',
    volume:'',
    preco: 0,
    quantidade: 0,
    setQuantidade: function(novaQuantidade) {
        if ( this.quantidade != 0) {
            if (novaQuantidade > 0) {
                this.quantidade += novaQuantidade
                return  true
            } else {
                if ( this.quantidade < Math.abs(novaQuantidade)) {
                    console.log(`Você tem ${ this.quantidade } impossivel retirar ${ Math.abs(novaQuantidade) }`)
                    return false
                } else {
                    this.quantidade += novaQuantidade
                    return true
                }
            }
        } else {
            if ( novaQuantidade > 0 ) {
                this.quantidade += novaQuantidade
                return true
             } else {
                console.log(`Você tem ${ this.quantidade } impossivel retirar ${ Math.abs(novaQuantidade) }`)
                return false
            }
        }
    },
    obterValidade: function() {
        const dataAtual = new Date()
        if ( this.dataDeValidade < dataAtual) {
            console.log('Produto dentro da validade')
        } else {
            console.log('Produto vencido. Favor recolher.')
        }
    },
    setDataDeFacricacao: function(novaData) {
        const dataAtual = new Date()
        if ( novaData > dataAtual ) {
            console.log('Verifique a data informada')
        } else {
            this.dataDeFabricacao = novaData
        }

    }
}

const saborLaranja = {
    lote: 0,
    statusDeVenda: false,
    setLote: function(novaQuantidade) {       
        if ( this.lote != 0) {
            if (novaQuantidade > 0) {
                this.lote += novaQuantidade
                return  true
            } else {
                if ( this.lote < Math.abs(novaQuantidade)) {
                    console.log(`Você tem ${ this.lote } impossivel retirar ${ Math.abs(novaQuantidade) }`)
                    return false
                } else {
                    this.lote += novaQuantidade
                    return true
                }
            }
        } else {
            if ( novaQuantidade > 0 ) {
                this.lote += novaQuantidade
                return true
             } else {
                console.log(`Você tem ${ this.lote } impossivel retirar ${ Math.abs(novaQuantidade) }`)
                return false
            }
        }
    },
    vendaDoLote: function(quantidade) {        
        if (this.setLote(quantidade) === true) {
            this.statusDeVenda = true
        }
    }
}

Object.setPrototypeOf(saborLaranja, bebidas)

saborLaranja.nome = 'Fanta'
saborLaranja.marca = 'CocaCola Company'
saborLaranja.preco = 5
saborLaranja.quantidade = 200
saborLaranja.lote = 3
saborLaranja.vendaDoLote(1)
console.table(saborLaranja)
