// map - é um metodo que tem uma função interna que itera com cada elemento de um Array ou Objeto. 

const listaDeNumeros =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const tabuadaDoSeis = listaDeNumeros.map((item) => {
    return item * 6
})
const tabuadaDoSete = listaDeNumeros.map((item, indice) => {
    return item + indice
})

console.table(tabuadaDoSeis)
console.table(tabuadaDoSete)

let minhaTabuada = [...tabuadaDoSeis, ...tabuadaDoSete]
console.log(minhaTabuada)


const encontraNumero = listaDeNumeros.find((item) =>{
    return item === 7
})
console.log(`Sai do find quando encontrei o ${encontraNumero}`)

const somaArray = listaDeNumeros.reduce((total, proximoValor) => {
    return total + proximoValor
})

console.log(somaArray)