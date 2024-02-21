// spread - é uma sintaxe que permite espelhamento de objetos iteraveis

let meuArray = [1, 2, 3, 4]
let novoArray = [...meuArray, 5, 6, 7, 8, 9]
console.log(novoArray)

let meuObjeto = { 
    nome: 'Paulo',
    idade: 29,
    profissao: 'Programador'
}

let novoObjeto = {
    ...meuObjeto,
    filhos: 4,
    animais: 2,
    casas: 10,
}
console.log(novoObjeto)

let maisNovoObjeto = {
    ...novoObjeto,
    natural: 'Fortaleza',
    nacionalidade: 'americano',
    parentesco: 'mexicano'
}

console.log(maisNovoObjeto)


const cadastroDePets = (info) => {
    let novosDados = {
        ...info,
        tipoRacao: 'Canina',
        enfermidade: 'Não',
        nivelDeSaude: 10,
    }
    return novosDados
}

console.log(cadastroDePets({nome: 'Bob', idade: 7, raca: 'Pug'}))