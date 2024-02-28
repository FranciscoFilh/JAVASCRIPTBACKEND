const veiculos = {
    nome: 'Nome do Carro',
    marca: 'Marca do Veiculo',
    modelo: 'Modelo do Veiculo',
    placa: 'Placa do Veiculo',
    tipoDoVeiculo: 'novo',
    cor: 'branca',
    ano: 0,
    tipoDeCombustivel: 'gasolina',
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
    }
}

const veiculosUsados = {
    quantidadeDeDonos: 'Donos',
    kmRodados: 'todos',
    preco: 0,
    statusDeVenda: false,
    estadoDeConservacao: 'bom',
    vendaDoVeiculo: function(quantidade) {        
        if (this.setQuantidade(quantidade) === true) {
            this.statusDeVenda = true
        }
    }
}

Object.setPrototypeOf(veiculosUsados, veiculos)

veiculosUsados.nome = 'Palio'
veiculosUsados.marca = 'Fiat'
veiculosUsados.modelo = 'ELX'
veiculosUsados.placa = 'UHV-6532'
veiculosUsados.cor = 'vermelha'
veiculosUsados.ano = 2005
veiculosUsados.tipoDeCombustivel = 'Flex'
veiculosUsados.quantidade = 2

console.table(veiculosUsados)

veiculosUsados.vendaDoVeiculo(-1)

console.log(`O veiculo de marca ${ veiculosUsados.marca } e modelo ${ veiculosUsados.modelo }. Tem a placa ${ veiculosUsados.placa } e a cor ${ veiculosUsados.cor }. Seu tipo de combustivel é ${ veiculosUsados.tipoDeCombustivel } e temos ${ veiculosUsados.quantidade } unidades em nossa loja.`)

console.log(veiculosUsados.statusDeVenda)