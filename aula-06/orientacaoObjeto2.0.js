class Animal{
    constructor(tipo, cor, peso) {
        this.tipo = tipo
        this.cor = cor
        this.peso = peso
    }

    obterTipo() {
        return this.tipo
    }
    obterPeso() {
        return this.peso
    }
    obterCor() {
        return this.cor
    }
}

let meuPet = new Animal('anfibio', 'verde', '500g')
let meuPet2 = new Animal('felino', 'cinza', '5kg')
let meuPet3 = new Animal('reptil', 'marrom', '1kg')

console.log(meuPet.obterTipo())
console.log(typeof meuPet)
console.log(meuPet2)
console.log(typeof meuPet2)
console.log(meuPet3)
console.log(typeof meuPet3)
console.log(typeof Animal.prototype)