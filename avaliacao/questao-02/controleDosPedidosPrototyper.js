const pedidos = {
    nome: 'Nome do pedido',
    preco: 0,
}

const saborPizza = {
    pedido: 0,
    statusDeVenda: false,
    setPedido: function(novoPedido) {
        if ( this.pedido != 0) {
            if (novoPedido > 0) {
                this.pedido += novoPedido
                return  true
            } else {
                if ( this.pedido < Math.abs(novoPedido)) {
                    console.log(`Você tem ${ this.pedido } impossivel retirar ${ Math.abs(novoPedido) }`)
                    return false
                } else {
                    this.pedido += novoPedido
                    return true
                }
            }
        } else {
            if ( novoPedido > 0 ) {
                this.pedido += novoPedido
                return true
             } else {
                console.log(`Você tem ${ this.pedido } impossivel retirar ${ Math.abs(novoPedido) }`)
                return false
            }
        }
    }
}


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
    pedido: 0,
    statusDeVenda: false,
    setLote: function(novaQuantidade) {       
        if ( this.pedido != 0) {
            if (novaQuantidade > 0) {
                this.pedido += novaQuantidade
                return  true
            } else {
                if ( this.pedido < Math.abs(novaQuantidade)) {
                    console.log(`Você tem ${ this.pedido } impossivel retirar ${ Math.abs(novaQuantidade) }`)
                    return false
                } else {
                    this.pedido += novaQuantidade
                    return true
                }
            }
        } else {
            if ( novaQuantidade > 0 ) {
                this.pedido += novaQuantidade
                return true
             } else {
                console.log(`Você tem ${ this.pedido } impossivel retirar ${ Math.abs(novaQuantidade) }`)
                return false
            }
        }
    }
}

Object.setPrototypeOf(saborPizza, pedidos)
saborPizza.nome = 'frango'
saborPizza.preco = 29.90
saborPizza.pedido = 1
saborPizza.statusDeVenda = true
console.table(saborPizza)

Object.setPrototypeOf(saborLaranja, bebidas)

saborLaranja.nome = 'Fanta'
saborLaranja.marca = 'CocaCola Company'
saborLaranja.preco = 7.99
saborLaranja.quantidade = 200
saborLaranja.pedido = 1
saborLaranja.statusDeVenda = true
console.table(saborLaranja)

let resultado = saborPizza.pedido + saborLaranja.pedido
console.log(resultado)
